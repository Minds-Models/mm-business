#!/usr/bin/env python3
"""Bake the cover rail's logo treatment into the image files themselves.

Why this exists rather than three lines of CSS. On screen the rail's look is
`filter:grayscale(1)` on each logo plus a mask that ramps the two outer marks
away into the paper. The PDF renderer (scripts/render-pdf.js) throws both of
those away: its vector pass sets `filter:none` and `mask:none` on everything
inside a sheet, because that is how it stops decorations being drawn twice —
once in the screenshotted raster layer and again in the vector layer on top.
So the deck looked right in a browser and came out of the PDF in full colour
with square-cut edges, which is the file that actually gets emailed.

A gradient drawn in SVG would survive the vector pass but produce a PDF
shading, and shadings are exactly what scripts/pdf-check.py rejects: they come
out grey in Mac Preview and pink in pdf.js. Alpha baked into a PNG survives
both passes and every viewer, so that is where the effect lives.

`opacity` is NOT baked — the renderer leaves opacity alone, so the deck keeps
setting it in CSS where it can still be tuned by eye.

    python3 assets/logos/build-rail.py      # writes assets/logos/rail/*.png

Re-run after replacing any source logo.
"""
import pathlib, subprocess, sys, tempfile
from PIL import Image

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / "rail"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# 4x the largest box the CSS will ever give a logo, so the PDF has real pixels
# to work with at print scale.
RASTER_W = 560

# name -> (source, fade). fade is the horizontal alpha ramp: "l" fades toward
# the left edge, "r" toward the right, None leaves the logo alone. Only the two
# outermost marks in the rail carry one.
LOGOS = {
    "manufaktura": ("manufaktura.svg", "l"),
    "cepro":       ("cepro.svg",       None),
    "o2":          ("o2.png",          None),
    "superzoo":    ("superzoo.png",    None),
    "cpi":         ("cpi.png",         None),
    "vilgain":     ("vilgain.svg",     None),
    "gymbeam":     ("gymbeam.svg",     "r"),
}

# The fade occupies this fraction of the mark, measured from the outer edge,
# and bottoms out at zero. Inner third of each end logo stays fully opaque.
FADE_SPAN = 2 / 3


def rasterise(svg: pathlib.Path) -> Image.Image:
    """Render an SVG to a transparent PNG through headless Chrome."""
    with tempfile.TemporaryDirectory() as tmp:
        tmp = pathlib.Path(tmp)
        shot = tmp / "out.png"
        # The page is sized to the image so the screenshot has no margin to trim.
        (tmp / "p.html").write_text(
            '<body style="margin:0"><img src="%s" style="display:block;width:%dpx">'
            % (svg.as_uri(), RASTER_W))
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--default-background-color=00000000",
                        "--window-size=%d,%d" % (RASTER_W, RASTER_W),
                        "--screenshot=%s" % shot, (tmp / "p.html").as_uri()],
                       check=True, capture_output=True)
        im = Image.open(shot).convert("RGBA")
        return im.crop(im.getchannel("A").getbbox())


def greyscale(im: Image.Image) -> Image.Image:
    """CSS `grayscale(1)`: Rec.709 luma, alpha untouched."""
    r, g, b, a = im.split()
    lum = Image.merge("RGB", (r, g, b)).convert("L", (0.2126, 0.7152, 0.0722, 0))
    return Image.merge("RGBA", (lum, lum, lum, a))


def ramp(im: Image.Image, side: str) -> Image.Image:
    w, h = im.size
    alpha = im.getchannel("A")
    px = alpha.load()
    for x in range(w):
        t = x / max(w - 1, 1)                    # 0 at left edge, 1 at right
        d = t if side == "l" else 1 - t          # 0 at the outer edge
        k = min(1.0, d / FADE_SPAN)              # 0 at outer, 1 at two-thirds in
        for y in range(h):
            if px[x, y]:
                px[x, y] = int(round(px[x, y] * k))
    im.putalpha(alpha)
    return im


def main() -> int:
    if not pathlib.Path(CHROME).exists():
        print("Chrome not found at %s" % CHROME, file=sys.stderr)
        return 1
    OUT.mkdir(exist_ok=True)
    for name, (src, fade) in LOGOS.items():
        p = HERE / src
        im = rasterise(p) if p.suffix == ".svg" else Image.open(p).convert("RGBA")
        im = greyscale(im)
        if fade:
            im = ramp(im, fade)
        dst = OUT / ("%s.png" % name)
        im.save(dst)
        print("%-14s %s  %dx%d%s" % (name, dst.relative_to(HERE.parent.parent),
                                     im.width, im.height,
                                     "  fade:%s" % fade if fade else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
