# Response to Sebastian Anjou (Terravada) and Georg Voegtle (LUXX)

**Status: INTERNAL DRAFT, 18 Sep 2026. Not sendable yet.**
Deck built from this: `delivered/2026-09-18-integration-deck/` (8 slides, EN, sections named
after Sebastian's action points).

Owner: Ondrej. Blocking gaps are marked `[JAN]`, `[JOSEF]` or `[DECIDE]` inline and listed in
section 6. Everything not marked is either observed from our own deployed setup or public vendor
specification.

Covers Ondrej's action points 1, 5 and 9 from the 18 Sep call. Josef's pricing (action 6) is a
separate document and should go in the same email, or the email should say when it follows.

---

## 1. Camera: minimum requirements

**The headline for Sebastian:** we are a software company and our vision stack is camera-agnostic.
Any UVC-compliant USB camera works, and in most stores the existing camera estate can be used
instead of new hardware. The specification below is a floor, not a shopping list. It exists so that
when he stands in front of a client he can say "below this line it will not work".

### Reference unit (what our field devices run today)

| | |
|---|---|
| Model | REDEAGLE USB webcam, 2K, 2.8mm lens, 120 degree wide angle |
| Source | REDEAGLE Official Store, AliExpress |
| Indicative unit cost | approx. EUR 16 to 22 depending on batch |
| Interface | USB, UVC class, no vendor driver |

This is deliberately commodity hardware. It is the camera in every M&M unit deployed to date,
including the Euroshop demo unit LUXX tested.

### Minimum specification for any substitute camera

| Parameter | Minimum | Recommended | Note |
|---|---|---|---|
| Interface | USB 2.0, UVC class | USB 2.0 or 3.0, UVC | No proprietary SDK. `[JAN]` confirm whether RTSP/IP cameras are supported today or are roadmap |
| Resolution | 1280 x 720 | 1920 x 1080 or 2K | Higher resolution does not improve accuracy at our working distance, it costs CPU |
| Frame rate | `[JAN]` fps at working resolution | | |
| Field of view | 90 degrees | 120 degrees | Wider FOV covers the shelf approach zone from a single unit |
| Focal length | fixed focus | 2.8mm | Autofocus is unnecessary and adds hunting artifacts |
| Low light | `[JAN]` minimum lux | | Forecourt and convenience lighting is usually adequate; freezer aisles and back-of-shelf are not |
| Mounting | rigid, fixed angle | | Position matters more than sensor quality. See below |
| Cable | USB, up to `[JAN]` m without active extension | | POE into the player then USB to camera is fine |

### What actually determines accuracy

Mounting geometry, not sensor price. The camera needs a clear view of the approach zone at roughly
face height, angled so that a person facing the shelf is seen near-frontally. One camera per e-shelf
unit is sufficient for our use case. If Terravada stacks planogram and replenishment use cases on
the same units, those want a rear-of-shelf camera position and that is a second camera, not a
compromise on ours.

`[DECIDE]` Do we give Sebastian a named 2 to 3 item shortlist he can source in Shenzhen, Hamburg and
the UK, as he asked, or only the specification? A shortlist is more useful to him and costs us
nothing, but it invites him to treat those models as certified. Recommendation: give the REDEAGLE as
the reference plus the specification table, and say explicitly that any UVC camera meeting the table
is supported, with no certification implied.

### Privacy framing (must appear in the document that goes out)

No facial recognition, no identities, no biometric templates. Age estimation with error bands, not
age detection. Classification is transient and in-memory on the device; reporting is aggregated
only, at k >= 25. This is the line that survives being forwarded to Shell's legal team, so it goes
in the document rather than being saved for the objection conversation.

---

## 2. Media player: minimum requirements

This is the section Sebastian's gap analysis will actually be run against, so it is written twice:
once as our reference unit, once as an abstract floor any third-party player can be measured
against. The second form is what he needs, because the candidates in his portfolio are Windows and
Android boxes, not Raspberry Pis.

### Reference unit (deployed today)

| | |
|---|---|
| Board | Raspberry Pi 5, 4GB RAM `[JAN]` confirm 4GB is the supported floor; field units to date are 8GB per the HW cost sheet |
| SoC | Broadcom BCM2712, quad-core Arm Cortex-A76 at 2.4 GHz |
| OS | Raspberry Pi OS 64-bit, Debian-based |
| Storage | 64 GB microSD (Kingston Canvas Plus class in current units) |
| Power | official 27 W USB-C PD supply |
| Thermal | active cooling required for sustained inference load |
| Video out | 2 x micro-HDMI, 4Kp60, when the Pi also drives the screen |
| I/O used | 1 x USB for the camera; Gigabit Ethernet or Wi-Fi |

The Pi can act as the media player itself, which is how the Euroshop demo unit ran, or it can sit
alongside a separate player as a sensing hub. Both are supported. Which one Terravada wants changes
the integration in section 3, not the hardware floor.

### Abstract floor for a third-party Linux player

| Requirement | Minimum | Why it matters |
|---|---|---|
| OS | Linux, 64-bit, glibc-based, kernel `[JAN]` version or newer | Native target. Debian and Ubuntu derivatives are the tested path |
| Architecture | arm64 or x86_64 | `[JAN]` confirm we ship or can build both |
| CPU | 4 cores, Cortex-A76 class or better, 2.0 GHz+ | Local age and gender inference runs on CPU at this class |
| RAM | 4 GB | |
| Free storage | `[JAN]` GB | Models plus buffer |
| NPU / GPU | not required | Worth stating explicitly: no accelerator needed, which removes a whole cost line from Sebastian's BOM |
| USB | 1 free USB 2.0 port, UVC support in kernel | |
| Network | Ethernet or Wi-Fi, optional | See connectivity below |
| Access | shell access, ability to install and run our service, systemd | `[DECIDE]` do we ship as a container, a .deb, or an image? This shapes what "Linux player" has to mean |
| Remote management | SSH or equivalent for updates | `[JAN]` what does the fleet update path require of the host |

### Connectivity: the point worth making loudly

Basic demographic classification runs entirely on the device. No internet connection is required for
it. Cloud connectivity is needed only for deeper profiling, for fleet management, and for reporting.
This matters commercially, because Sebastian's forecourt clients are, in his words, in the stone age,
and "it works without a connection" removes the objection before it is raised.

### On Android

We are native on Linux. An Android build is technically feasible and we are open to it, but it is a
scoped development project and would need committed volume behind it before we allocate the team.
This is exactly what was said on the call. It should not soften in writing into anything that reads
like a commitment or a date.

### The honest summary for Sebastian

If the chosen player runs Linux, integration is straightforward: we place our application on the
player and it drives the camera directly. If the player is Windows or Android, there are two routes,
neither of them free: port the application, or keep a small Linux sensing hub alongside the player
and integrate over the network. Route two works today and would be the fallback for the October
demo. `[DECIDE]` Do we put route two in writing now? It weakens the pressure on the Linux decision,
which currently runs in our favor, but it also de-risks his October date, which is what makes us
useful to him. Recommendation: mention it as a demo fallback only, not as a product option.

---

## 3. CMS trigger events: mapping

Sebastian's ask, precisely: he showed a CMS content plate where interactive content is bound to
commands like `f_1`, `f_2`, `f_3`, which today come from Nexmosphere e-shelf sensors. He wants the
equivalent from us, so that his CMS team can bind creatives to our recognition events the same way
they already bind them to a shelf sensor. He was explicit that he does not need our methodology,
only the mapping and the transport.

### How it works today

Our application on the device does both jobs: it classifies the person and selects the creative
directly, locally. There is no external trigger interface in the current build, because nothing has
needed one. This is worth stating plainly rather than implying a product exists that does not.

### What we would emit

`[JAN]` this table is a proposal, not a specification. Confirm the actual attribute names, value
ranges and confidence handling before this goes out.

| Field | Type | Example | Note |
|---|---|---|---|
| `event_id` | uuid | | Deduplication |
| `timestamp` | ISO 8601 | | Device clock, UTC |
| `device_id` | string | | Maps to the M&M fleet record |
| `age_band` | enum | `25_34` | Estimation with an error band, never a point age |
| `age_confidence` | float | `0.82` | |
| `gender` | enum | `m` / `f` / `unknown` | |
| `group_size` | int | `2` | Local, no cloud needed |
| `profile` | enum | `[JAN]` | Cloud-only deeper segment, absent when offline |
| `dwell_state` | enum | `approach` / `present` / `left` | `[JAN]` confirm we emit state transitions or single events |

### Mapping to CMS trigger codes

The binding itself is a flat lookup that Terravada owns and can edit without us. Illustrative shape:

| M&M condition | CMS command |
|---|---|
| `gender=m AND age_band in (25_34, 35_44)` | `f_1` |
| `gender=f AND age_band in (25_34, 35_44)` | `f_2` |
| `group_size >= 2` | `f_3` |
| no person present for N seconds | default plate |

The value of handing it over in this shape is that it keeps content decisions in the CMS, which is
exactly where Sebastian said he wants them, and keeps recognition on our side, which is where we
want it. Say that explicitly: it is the clean version of the value-chain split we already run.

### Transport options to put in front of him

`[JAN]` which of these is realistic to have working by mid-October?

1. **HID keypress emulation.** Our process on the player emits the same F-key the Nexmosphere sensor
   emits. Zero CMS work, zero latency, and it drops straight into the bindings he demonstrated on
   the call. Almost certainly the fastest route to a working Hamburg demo. Limitation: one code per
   event, no payload, so no confidence values and no analytics through this path.
2. **Local HTTP POST to the CMS or player agent.** Full JSON payload as per the table above.
   Requires a CMS-side endpoint. This is what he needs to check the CMS API for, which is his own
   action point 4.
3. **MQTT or websocket to a local broker.** Better if multiple consumers want the same event, for
   instance if planogram and replenishment later subscribe to the same stream.

Recommendation to put in the document: option 1 for the October demo, option 2 as the product
integration, with the mapping table identical in both so nothing is thrown away.

### Latency: raise it, do not bury it

Ondrej flagged this on the call and it should be in writing. If recognition has to travel to the CMS
and a creative decision has to travel back, the round trip has to complete while the person is still
in front of the shelf. Our current local-decision design avoids this entirely. The number to ask
Sebastian for: what round-trip latency does the CMS guarantee from trigger to plate change? If it is
above roughly one second `[JAN] confirm our working threshold`, option 1 or a local decision path is
not a preference, it is a requirement. Framing this as a question to his CMS team is better than
framing it as our constraint.

---

## 4. NDA

Send the same mutual NNN template that LUXX signed on 24 Apr 2026. Source file on Drive:
`Luxx : M&M NDA signed.pdf`, in the `Luxx` folder. A clean unsigned copy needs to be pulled from that
template. `[DECIDE]` who holds the clean .docx version.

Points worth checking before it goes to Terravada, given that Terravada is an integrator and not a
distributor:

- The template is drafted for a **Distributor** counterparty and the Permitted Purpose says
  "distribution partnership". For Terravada the purpose is integration and channel. Adjust the
  purpose clause or accept that it reads oddly.
- Section 4, anti-tampering, is the clause the seal incident sat under. Keep it.
- Section 5, non-circumvention, five years, includes not bypassing M&M to reach clients or End Users
  introduced through the partnership. For an integrator who owns the end-client relationships, this
  is the clause most likely to come back with comments. Worth pre-empting.
- Section 7, EUR 50,000 liquidated damages per breach. Expect pushback.
- Section 6 requires a separate DPA before any live data flows through partner infrastructure. That
  applies here the moment anything runs in Hamburg. Flag it now rather than in October.

Note for the record: LUXX signed the NNN and their copy is countersigned on their side only in the
scan we hold. `[DECIDE]` confirm we hold a fully executed copy with the M&M signature block filled.

---

## 5. What we should ask for in return

The response should not be one-directional. Four asks, all of which were either promised on the call
or follow naturally:

1. **The gap analysis.** Sebastian committed to sharing it. It tells us whether Linux survives, and
   the answer determines whether we invest anything else in this before November.
2. **The player decision date, in writing.** Georg said it plainly: no Linux player, no October. We
   should hold them to a date rather than a "next week or something like that".
3. **Volume roadmap.** Josef already asked. Pricing against 150k to 200k units is an anchor Sebastian
   himself called indicative. We should say what we need to turn it into a real quote: device counts
   by quarter for the next four to six quarters, even as a range.
4. **CMS round-trip latency,** per section 3.

And one process point: future openings of sealed M&M hardware to be agreed with us in advance. It
was accepted verbally on the call. Putting one sentence in the email makes it a record without
making it a confrontation.

---

## 6. Gaps blocking this document

| Gap | Owner | Blocks |
|---|---|---|
| Camera fps, lux, USB cable length, RTSP support | Jan | Section 1 table |
| RPi 5 4GB vs 8GB as the supported floor | Jan | Section 2 |
| Kernel version, architectures built, storage, fleet update requirements | Jan | Section 2 abstract floor |
| Packaging format: container, .deb or image | Jan + Ondrej | Section 2, and what "Linux player" contractually means |
| Attribute schema: real field names, enums, confidence | Jan | Section 3 table |
| Which transport is realistic by mid-October | Jan | Section 3 recommendation |
| Latency threshold below which local decisioning is mandatory | Jan | Section 3 |
| Clean unsigned NNN .docx and confirmation of a fully executed LUXX copy | Ondrej | Section 4 |
| Pricing at 150k-200k units | Josef | Sent alongside, action 6 |
| Shortlist vs specification-only for cameras | Ondrej | Section 1 |
| Whether to put the sensing-hub fallback in writing | Ondrej | Section 2 |

Once Jan's column is closed, this converts into two clean documents for Sebastian (hardware
requirements; trigger interface) plus a short cover email. Draft those then, not before.
