---
name: nanobanana-prompts
description: Curated prompt techniques and templates for "Nano Banana Pro" style AI image generation — photorealistic portraits, product/e-commerce photography, virtual try-on, interior design visualization, infographics, UI mockups, viral thumbnails, avatars, memes, and creative 3D/diorama compositions. Use this skill whenever the user wants help crafting a detailed, high-fidelity image-generation prompt, asks for "nano banana" style prompts, wants to turn a photo into a professional headshot/product shot/mockup, or is stuck trying to describe a complex visual scene for an image model. This supplies prompt-crafting technique and ready-made templates, not the generation itself — pair it with this session's `media-gen` skill (or whatever image-generation tool is available) to actually produce the image.
---

# Nano Banana Pro Prompt Techniques

This skill packages prompt-writing technique for high-fidelity AI image generation, adapted from a curated public prompt collection. It teaches the *pattern* these prompts follow so you can write a new prompt for whatever the user actually wants, rather than only reusing the examples verbatim.

**Attribution:** The prompt examples in `references/prompts.md` are sourced from [ZeroLu/awesome-nanobanana-pro](https://github.com/ZeroLu/awesome-nanobanana-pro) (CC BY 4.0), itself aggregating prompts from X/Twitter, WeChat, and Replicate creators credited inline. This is a curated subset — sponsor content and a few entries that combined real-photo identity-lock with sexualized framing were deliberately left out (see "What was excluded" below).

## How to use this skill

1. **Figure out what the user actually wants**: a portrait/headshot, a product shot, a UI mockup, an infographic, an avatar, a poster, an editing task (outpainting, translation, restoration), etc.
2. **Open `references/prompts.md`** and find the closest matching category and example. Read 1–2 similar examples to internalize the *pattern* — don't just fill in the blanks of one example if the user's request differs in a meaningful way.
3. **Write a new prompt** following the pattern below, tailored to the user's actual subject, not a copy-paste of the example.
4. **Hand the prompt to the image-generation step.** This skill does not call any generation API itself — use the `media-gen` skill (Fal.ai) or another available image tool to actually produce the image. If the user has an existing reference photo/asset, tell the generation tool to use it as an input image where the workflow supports that.
5. If the first result misses the mark, don't discard the prompt structure — identify which single axis (lighting, camera/lens, background, pose, or text/typography) was off and adjust just that.

## The underlying pattern

Every effective prompt in the reference collection is precise about the same handful of axes, in roughly this order of importance:

1. **Subject & action** — what/who is in frame and what they're doing, stated plainly first.
2. **Identity/consistency constraints** — if a real reference photo is involved, state explicitly what must stay identical (face, features, proportions) and what may change (clothing, setting, pose). Be precise here; vague identity instructions cause drift.
3. **Camera & lens** — naming a real camera/lens/focal length ("85mm f/1.8", "Sony A7III", "fisheye 12mm") reliably steers realism and depth-of-field far better than saying "professional photo."
4. **Lighting** — direction, quality (hard/soft), and source (golden hour, studio three-point, flash) shape mood more than almost anything else in the prompt.
5. **Environment/background** — concrete, specific set dressing beats generic description ("cobblestone pavement, empty park benches" beats "a nice background").
6. **Style/mood adjectives** — keep these last and few; they're a finishing touch, not a substitute for the concrete details above.
7. **Text/typography** (when the image includes text) — spell out exact wording, placement, and font style; models render text far more reliably when told precisely what to say and where.
8. **Negative constraints** — for tricky compositions (single-object renders, no-extra-limbs, no forced perspective), explicitly stating what must NOT appear prevents common failure modes.

Structured formats (JSON-like key/value blocks) work as well as prose — use whichever makes the constraints easiest for the user to review and edit. `references/prompts.md` includes examples of both.

## Categories covered in the reference file

Photorealism & portraits · Creative/experimental compositions (dioramas, recursive images, crowd scenes) · Education & infographics · E-commerce & product/virtual try-on · Workplace productivity (flowcharts, UI mockups, layouts) · Photo editing & restoration (outpainting, crowd removal) · Interior design visualization · Social media & marketing (thumbnails, posters) · Translation/localization · Avatars & social content

Read `references/prompts.md` for the full worked examples with attributed sources.

## What was excluded, and why

The source repository is a broad, community-submitted list. When curating it into this skill, entries that combined "lock the face to an uploaded photo of a real person" with sexualized or objectifying body framing were left out. That combination is a real vector for producing non-consensual sexualized imagery of real, identifiable people, which this skill should not make easier to do by accident. Sponsor/ad content and tracking links from the source repo were also dropped as noise, not technique.

If a user's request itself asks to sexualize a real, identifiable person from a photo (themselves or anyone else), treat that the same as any other request to generate non-consensual sexual content of a real person — decline it, independent of what this skill contains.
