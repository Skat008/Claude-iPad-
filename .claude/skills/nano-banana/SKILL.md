---
name: nano-banana
description: Prompt playbook for Nano Banana Pro (Google's Gemini image model). Use whenever the user is generating images with Nano Banana and wants a prompt recipe — professional headshots, product shots, 3D dioramas, cinematic film stocks, viral thumbnails, magazine covers, virtual try-on, sketch-to-mockup, photo restoration, avatar styles, etc. Trigger phrases include "nano banana prompt", "banana pro prompt", "give me a prompt for [X image]", or when the user names an image style this skill indexes (Silicon Valley headshot, Y2K scrapbook, Sankey diagram, isometric diorama, viral thumbnail, and the rest of the catalog below). Do NOT trigger for actual image generation calls — the user has their own tool for that. This skill supplies prompt structure, not generation.
---

# Nano Banana Pro Prompt Playbook

Source: https://github.com/ZeroLu/awesome-nanobanana-pro — a community-curated catalog of ~86 field-tested prompts for Google's Nano Banana Pro image model, contributed by prompt engineers on X/Twitter and WeChat. This skill is the index + retrieval guide. When the user names a style, look it up in the catalog, then fetch the exact prompt from the source repo section noted alongside it.

## How to use this skill

1. **Match the request to a catalog entry below.** Every entry has a numeric ID matching the section in the source repo's README.
2. **If a match exists**, tell the user which entry fits, then either (a) fetch the exact prompt text from the source repo with WebFetch if they want it verbatim, or (b) adapt using the structural formula section at the bottom.
3. **If no match exists**, build a prompt from the formulas section — don't invent from scratch.
4. Nano Banana Pro takes natural-language prompts, sometimes JSON-structured. Preserve the original prompt's structure when adapting — the community found what works.
5. Return the prompt as a copy-ready block. Don't add commentary the user has to strip out.

## Catalog (86 prompts, 10 categories)

### 1. Photorealism & Aesthetics
- **1.1** Hyper-realistic crowd composition — multiple recognizable subjects, cinematic lighting
- **1.2** 2000s mirror selfie — flash, early-2000s digicam aesthetic, JSON-structured
- **1.3** Victoria's Secret backstage — glamorous fashion, beaded embroidery detail
- **1.4** 1990s film camera portrait — vintage grain, direct flash
- **1.5** Silicon Valley business headshot — casual selfie → studio portrait
- **1.6** Emotional film photography — Kodak Portra look, nostalgic light
- **1.7** Professional headshot creator — selfie → polished profile pic
- **1.8** Hyperrealistic anime portrait, spotlight
- **1.9** Bathroom mirror selfie
- **1.10** Chalkboard anime documentation — chalk drawing as classroom photo
- **1.11** Portrait with puppy in snow, face-preserved
- **1.12** Fisheye movie-character selfie (360°)
- **1.13** Character-consistent selfie with a movie character
- **1.14** Museum art exhibition selfie
- **1.15** Compact camera screen display — photo shown on vintage digicam LCD
- **1.16** Magazine cover portrait — glossy fashion editorial
- **1.17** Luxury product photography — floating items + florals + reflections

### 2. Creative Experiments
- **2.1** Star Wars "Where's Waldo" dense crowd
- **2.2** Aging progression (temporal consistency)
- **2.3** Recursive Droste effect
- **2.4** Coordinate visualization (lat/long → scene)
- **2.5** Conceptual visualization of landmarks
- **2.6** Filename → literal visual
- **2.7** Multi-subject compositing (group photo from separate portraits)
- **2.8** Whiteboard marker art on glass
- **2.9** Split view: realistic + wireframe halves
- **2.10** USA 3D diorama with state landmarks
- **2.11** US map made of regional foods
- **2.12** City's tallest buildings, 3D cartoon miniatures
- **2.13** 3D isometric home office
- **2.14** Emoji combination (Google-style merge)
- **2.15** Torn-paper reveal effect
- **2.16** Cinematic keyframe generator (image → sequence)
- **2.17** Photo book magazine cover, 9:16 with coordinates
- **2.18** Floating country island diorama
- **2.19** Novel/film scene as 3D miniature poster
- **2.20** Miniature swimming pool diorama
- **2.21** Christmas ornament 3D character
- **2.22** Ironing wrinkles — surreal anti-aging visual
- **2.23** Perfect isometric photograph
- **2.24** Fisheye + phone screen overlay
- **2.25** Shop window with cartoon reflection of self
- **2.26** Urban 3D LED display (glasses-free)
- **2.27** Trans-dimensional liquid pour
- **2.28** Fisheye matcha girl
- **2.29** Canon IXUS point-and-shoot aesthetic
- **2.30** Anime spotlight portrait (variant)

### 3. Education & Knowledge
- **3.1** Concept → vector infographic
- **3.2** Kids' crayon travel journal illustration
- **3.3** Financial Sankey diagram, corporate style

### 4. E-commerce & Virtual Studio
- **4.1** Virtual model try-on, fabric-preserving
- **4.2** Professional product photography, studio isolation
- **4.3** 3D chibi miniature brand store
- **4.4** Room furnishing preview in empty space

### 5. Workplace & Productivity
- **5.1** Hand-drawn flowchart → McKinsey-style diagram
- **5.2** UI wireframe → high-fidelity mockup
- **5.3** Magazine layout generator with print typography

### 6. Photo Editing & Restoration
- **6.1** Composition rescue — smart outpainting to new aspect ratio
- **6.2** Smart crowd removal with background fill
- **6.3** CCTV face-detection overlay simulation

### 7. Interior Design
- **7.1** 2D floor plan → hard furnishing preview

### 8. Social Media & Marketing
- **8.1** Viral thumbnail (YouTube/TikTok/Douyin), text overlay
- **8.2** Commercial sales poster with typography

### 9. Daily Life & Translation
- **9.1** In-scene text translation (menus, signs), texture-preserving
- **9.2** Comic/meme speech bubble translation

### 10. Social Networking & Avatars
- **10.1** 3D blind-box C4D toy avatar
- **10.2** Pet meme sticker, hand-drawn
- **10.3** Y2K scrapbook, multi-pose collage
- **10.4** Japanese high-school disposable-camera snap
- **10.5** Skin analysis + skincare routine overlay

## Structural formulas (use when adapting or building from scratch)

Nano Banana prompts that work tend to layer these slots. Miss a layer → generic output.

- **Portrait / aesthetic**: `[subject description] + [era or camera model] + [film stock or lighting] + [pose/angle] + [wardrobe detail] + [background] + [grain/texture note] + [aspect ratio]`
- **Product**: `[product + material detail] + [studio/environment] + [lighting rig] + [supporting props] + [reflections/shadows] + [camera lens] + [background gradient]`
- **3D diorama / miniature**: `[isometric | top-down | 45°] + [C4D | clay | chibi | blind-box] + [subject miniaturized] + [contained inside X] + [scale reference] + [soft studio light]`
- **Infographic / diagram**: `[content type: flowchart | Sankey | timeline] + [style: McKinsey | vector flat | hand-annotated] + [color system: 2-3 brand colors] + [typography note] + [aspect ratio for slide/print]`
- **Editorial / thumbnail**: `[hero subject action] + [big-text headline] + [color contrast rule] + [face emotion] + [negative space for text] + [platform aspect: 9:16 vertical, 16:9 thumb]`
- **Editing/restoration**: `[preserve X: face | fabric | text glyphs] + [change Y: background | crowd | aspect] + [match Z: lighting | grain | color temperature]`

## Getting the exact prompt

To copy an entry's original wording verbatim, fetch the section from the source repo:

```
https://github.com/ZeroLu/awesome-nanobanana-pro#[section-anchor]
```

Or grab the raw README:

```
https://raw.githubusercontent.com/ZeroLu/awesome-nanobanana-pro/main/README.md
```

Attribution stays on the original author (usually a Twitter/X handle noted in that section) — pass it along if the user is republishing.

## Aspect ratio quick reference for Murad's Instagram work

- Feed post: 1:1 (1080×1080) or 4:5 (1080×1350) — 4:5 takes more screen real estate
- Reels / Stories: 9:16 (1080×1920)
- Carousel: same as feed
- YouTube thumbnail: 16:9 (1280×720)

When Murad asks for a nano banana prompt for social, default to 4:5 for feed and 9:16 for reels unless he says otherwise.
