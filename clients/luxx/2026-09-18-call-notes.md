# LUXX / Terravada, call notes, 18 Sep 2026

**Attendees:** Sebastian Anjou (Terravada), Georg Voegtle (LUXX, dialing in from Shenzhen),
Ondrej Santora (M&M), Josef Nemecek (M&M). 49 minutes.
**Source:** Gemini notes + full transcript, Google Doc `1OVMJTePTY8uyssRrA_LbHcew6auKhAK80MxmhYbW5GA`.
**Confidentiality:** Sebastian asked that the architecture slides and the company names on them be
treated as confidential. Internal use only.

## What this deal actually is

Terravada is assembling a full forecourt and convenience signage stack for the DACH market and is
looking for four partner types: a branch insider with the network, a hardware vendor (LUXX), a
solution integrator (Terravada itself), and a service and installation partner. M&M sits in that
stack as the who-layer: the engine that recognizes who is standing in front of the e-shelf and emits
that as an event the CMS can act on. We are, in Sebastian's own words, "the cherry on the cake":
wanted by everyone, but sequenced after the base stack is built.

## Architecture as presented

- Media players request content from a CMS (default candidate: Nextsense/NextsenseMe), integrated
  with Nexmosphere sensor suites, POS integration, and a service-ticket and reporting layer.
- LUXX supplies the e-shelf screens (LCD) and LED. Screens are daisy-chained off one media player.
- Cameras sit **outside** the screen housing, on the metal shelf, connected to the media player
  (POE switch into the player was discussed). This was explicitly agreed on the call.
- Use cases beyond ours: planogram discipline, automatic replenishment, ticketing, local and
  regional advertising, consolidated invoicing across advertising types.

## The two decisions that matter

**1. Media player OS is undecided and it is the gate on everything.**
Georg was blunt: if there is no Linux media player, the October demo does not happen. Our stack is
native Linux on Raspberry Pi. Other candidate solutions in Terravada's portfolio run on Windows;
LUXX's own world is Android. Sebastian will run a gap analysis across Windows, Android and Linux
with Georg and Tom (UK solution architect) and wants the decision inside one to two weeks so he can
secure funding and Georg can order in China.

An Android port from our side is possible but is gated on committed business volume. That gate was
stated on the call and should not soften in writing.

**2. Camera placement is settled.** External camera, on the shelf, into the player. Not embedded in
the LCD. For our use case one camera per unit is likely enough; more cameras may be needed if
planogram and replenishment use cases are stacked on the same units.

## Our technical position as stated on the call

- Age and gender run locally on the Pi with no internet connection required. Deeper profiling
  (the "Marlboro man vs Camel man" level) needs cloud.
- We are a software company and camera-agnostic: a basic camera works, and existing store cameras
  can be used. Sebastian still wants a named short list because he has to source lab kit for
  Shenzhen, Hamburg, Munich and the UK.
- The Pi can serve as the player itself, or sit alongside one.
- Open technical risk Ondrej raised: latency. If the signal has to travel M&M app to CMS and back
  before the creative changes, a two-second round trip may miss the person it was meant for. Today
  our app selects the creative directly on the device, which avoids this.

## Timeline

Mid-October, Hamburg: Sebastian showcases two use cases to Shell and to investors. That is the hard
date. Working backwards: player decision within a week, sourcing and delivery after that, then a
joint setup session. Sebastian suggested meeting in Prague rather than Munich over the next three
weeks because of Oktoberfest pricing. Georg's events in China are on the same mid-October clock.

## Commercial ask

Josef to send a starting point on licensing and subscription pricing against a volume of
150,000 to 200,000 units. Sebastian was clear this is an indicative anchor to be renegotiated, not a
quote. He cannot give firm volumes before roughly November because every prospect is asking for a
pilot first and each one has to be costed individually. Josef asked for a one to two year device
roadmap to price against; that is the reciprocal ask.

## Security seal incident

The test unit returned from China had its security seals broken. Georg explained that Andreas, the
owner and founder, opened the housing to measure dimensions and see how small the enclosure for the
Pi could be made, with no evaluation of software or chip settings. Ondrej noted that as a software
company our IP is all we have, and asked to be consulted before any future opening. An NNN with LUXX
was already in place at the time. Handled, and closed on the call.

## Action points (as Sebastian dictated them)

| # | Owner | Action | Status |
|---|---|---|---|
| 1 | Ondrej | Minimum requirements for cameras and players, in writing, Linux connectivity included | Draft in `2026-09-18-response-to-terravada.md` |
| 2 | Sebastian | Gap analysis on media players (Windows / Android / Linux) | Theirs. He committed to share it with us. |
| 3 | Georg + Sebastian | Decide and source a player; run demos in Shenzhen and Munich/Hamburg | Theirs |
| 4 | Sebastian | Check the CMS API for trigger events | Theirs |
| 5 | Ondrej | Send the triggering-event mapping for the CMS | Draft, blocked on Jan |
| 6 | Josef | Prices with volume (150k-200k units) | Josef |
| 7 | Georg | NDA (LUXX side) | Already signed 24 Apr 2026 |
| 8 | Sebastian | NDA with Terravada | His side |
| 9 | Ondrej | Send the M&M NDA template | Ready, same NNN template signed with LUXX |
| 10 | All | Next sync, after the player decision | Not scheduled |

## Counterparty note

Sebastian (Terravada) has **no NDA with M&M** and was shown nothing of ours under one. He is also the
person asking for our interface specifications. Sending the NNN template is action 9, and it should
land before or with the technical documents, not after.
