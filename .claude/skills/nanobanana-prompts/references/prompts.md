# Nano Banana Pro Prompt Reference

Curated from [ZeroLu/awesome-nanobanana-pro](https://github.com/ZeroLu/awesome-nanobanana-pro) (CC BY 4.0). Sources are credited under each prompt. This is a trimmed subset of the original list — see SKILL.md for what was left out and why. Read the section that matches what the user wants; skim a neighboring section if nothing matches exactly, since the *pattern* transfers even when the subject doesn't.

## Table of contents

1. [Photorealism & Portraits](#1-photorealism--portraits)
2. [Creative & Experimental Compositions](#2-creative--experimental-compositions)
3. [Education & Infographics](#3-education--infographics)
4. [E-commerce & Virtual Studio](#4-e-commerce--virtual-studio)
5. [Workplace & Productivity](#5-workplace--productivity)
6. [Photo Editing & Restoration](#6-photo-editing--restoration)
7. [Interior Design](#7-interior-design)
8. [Social Media & Marketing](#8-social-media--marketing)
9. [Daily Life & Translation](#9-daily-life--translation)
10. [Avatars & Social Content](#10-avatars--social-content)

---

## 1. Photorealism & Portraits

### 1.1 Hyper-Realistic Crowd Composition
*Complex multi-subject composition with specific lighting.*
```text
Create a hyper-realistic, ultra-sharp, full-color large-format image featuring a massive group of celebrities from different eras, all standing together in a single wide cinematic frame. The image must look like a perfectly photographed editorial cover with impeccable lighting, lifelike skin texture, micro-details of hair, pores, reflections, and fabric fibers.

GENERAL STYLE & MOOD: Photorealistic, 8k, shallow depth of field, soft natural fill light + strong golden rim light. High dynamic range, calibrated color grading. Skin tones perfectly accurate. Crisp fabric detail with individual threads visible. Balanced composition, slightly wide-angle lens (35mm), center-weighted. All celebrities interacting naturally, smiling, posing, or conversing. Minimal background noise, but with enough world-building to feel real.

THE ENVIRONMENT: A luxurious open-air rooftop terrace at sunset overlooking a modern city skyline. Elements include: Warm golden light wrapping around silhouettes. Polished marble.
```
*Source: [@SebJefferies](https://x.com/SebJefferies/status/1991531687147360728)*

### 1.2 Era-Specific Aesthetic Portrait (JSON style)
*Structured JSON prompt for a specific decade/aesthetic — swap the era, hair, clothing, and background details for any nostalgic look.*
```json
{
  "subject": {
    "description": "A young woman taking a mirror selfie with very long voluminous dark waves and soft wispy bangs",
    "age": "young adult",
    "expression": "confident and slightly playful",
    "hair": { "color": "dark", "style": "very long, voluminous waves with soft wispy bangs" },
    "clothing": {
      "top": { "type": "fitted cropped t-shirt", "color": "cream white",
        "details": "features a large cute anime-style cat face graphic with big blue eyes, whiskers, and a small pink mouth" }
    },
    "face": { "preserve_original": true, "makeup": "natural glam makeup with soft pink dewy blush and glossy red pouty lips" }
  },
  "accessories": {
    "earrings": { "type": "gold geometric hoop earrings" },
    "jewelry": { "waistchain": "silver waistchain" },
    "device": { "type": "smartphone", "details": "patterned case" }
  },
  "photography": {
    "camera_style": "early-2000s digital camera aesthetic",
    "lighting": "harsh super-flash with bright blown-out highlights but subject still visible",
    "angle": "mirror selfie",
    "shot_type": "tight selfie composition",
    "texture": "subtle grain, retro highlights, crisp details, soft shadows"
  },
  "background": {
    "setting": "nostalgic early-2000s bedroom",
    "wall_color": "pastel tones",
    "elements": ["chunky wooden dresser", "CD player", "posters of 2000s pop icons", "hanging beaded door curtain", "cluttered vanity with lip glosses"],
    "atmosphere": "authentic 2000s nostalgic vibe",
    "lighting": "retro"
  }
}
```
*Source: [@ZaraIrahh](https://x.com/ZaraIrahh/status/1991681614368436468)*

### 1.3 Era-Specific Film Camera Portrait
*Replicating specific film textures, flash photography, and era-specific atmosphere while preserving the subject's face.*
```text
Without changing her original face, create a portrait of a beautiful young woman with porcelain-white skin, captured with a 1990s-style camera using a direct front flash. Her messy dark brown hair is tied up, posing with a calm yet playful smile. She wears a modern oversized cream sweater. The background is a dark white wall covered with aesthetic magazine posters and stickers, evoking a cozy bedroom or personal room atmosphere under dim lighting. The 35mm lens flash creates a nostalgic glow.
```
*Source: [@kingofdairyque](https://x.com/kingofdairyque/status/1991780760030961768)*

### 1.4 Professional Business Headshot
*Transforms a casual photo into a studio headshot via precise lens/lighting instructions — the named camera/lens and three-point lighting setup are what make this reliable.*
```text
Keep the facial features of the person in the uploaded image exactly consistent. Dress them in a professional navy blue business suit with a white shirt, similar to the reference image. Background: Place the subject against a clean, solid dark gray studio photography backdrop. The background should have a subtle gradient, slightly lighter behind the subject and darker towards the edges (vignette effect). There should be no other objects. Photography Style: Shot on a Sony A7III with an 85mm f/1.4 lens, creating a flattering portrait compression. Lighting: Use a classic three-point lighting setup. The main key light should create soft, defining shadows on the face. A subtle rim light should separate the subject's shoulders and hair from the dark background. Crucial Details: Render natural skin texture with visible pores, not an airbrushed look. Add natural catchlights to the eyes. The fabric of the suit should show a subtle wool texture. Final image should be an ultra-realistic, 8k professional headshot.
```
*Source: WeChat Article*

### 1.5 Cinematic Film-Look Portrait
*Kodak Portra-style cinematic look while maintaining facial consistency from an uploaded photo.*
```text
Keep the facial features of the person in the uploaded image exactly consistent. Style: A cinematic, emotional portrait shot on Kodak Portra 400 film. Setting: An urban street coffee shop window at Golden Hour (sunset). Warm, nostalgic lighting hitting the side of the face. Atmosphere: Apply a subtle film grain and soft focus to create a dreamy, storytelling vibe. Action: The subject is looking slightly away from the camera, holding a coffee cup, with a relaxed, candid expression. Details: High quality, depth of field, bokeh background of city lights.
```
*Source: WeChat Article*

### 1.6 Professional Profile Photo from a Selfie
*Turn a casual selfie into a polished LinkedIn-style profile photo.*
```text
A professional, high-resolution profile photo, maintaining the exact facial structure, identity, and key features of the person in the input image. The subject is framed from the chest up, with ample headroom. The person looks directly at the camera. They are styled for a professional photo studio shoot, wearing a premium smart casual blazer in a subtle charcoal gray. The background is a solid neutral studio color. Shot from a high angle with bright and airy soft, diffused studio lighting, gently illuminating the face and creating a subtle catchlight in the eyes, conveying a sense of clarity. Captured on an 85mm f/1.8 lens with a shallow depth of field, exquisite focus on the eyes, and beautiful, soft bokeh. Observe crisp detail on the fabric texture of the blazer, individual strands of hair, and natural, realistic skin texture. The atmosphere exudes confidence, professionalism, and approachability. Clean and bright cinematic color grading with subtle warmth and balanced tones, ensuring a polished and contemporary feel.
```
*Source: [@PavolRusnak](https://x.com/PavolRusnak/status/1994097306526994558)*

### 1.7 Dramatic Spotlight Portrait
*High-contrast single-light-source portrait — good template for any "dramatic lighting" request.*
```text
Generate a hyperrealistic portrait of a character standing in a completely black background.
Lighting: use a narrow beam spotlight focused only on the center of the face.
The edges of the light must be sharp and dramatic.
All areas outside the spotlight should fall quickly into deep darkness (high falloff shadow), almost blending into the black background. Not soft lighting.
Pose: one hand raised gently to the lips in a shy, hesitant gesture. Eyes looking directly at the camera with a mysterious mood.
Overall tone: dark, moody, dramatic, mysterious. High-contrast only in the lit portion of the face. Everything outside the spotlight should be nearly invisible.
```
*Source: [@SimplyAnnisa](https://x.com/SimplyAnnisa/status/1995131975351562274)*

### 1.8 Photorealistic Documentation Shot (structured JSON)
*Full structured spec for a documentary-style photo of an art object — a good template when the user wants exhaustive control over frame, lighting, camera, and negative constraints.*
```json
{
  "intent": "Photorealistic documentation of a chalkboard drawing in a classroom context.",
  "frame": {
    "aspect_ratio": "4:3",
    "composition": "A centered medium shot focusing on the chalkboard mural, teacher's desk in foreground for scale.",
    "style_mode": "documentary_realism, texture-focused, ambient naturalism"
  },
  "environment": {
    "location": "A standard classroom.",
    "lighting_direction": "Overhead and slightly frontal, diffuse ambient light."
  },
  "camera": {
    "sensor_format": "35mm full-frame digital sensor",
    "lens": "35mm prime lens",
    "aperture": "f/5.6",
    "depth_of_field": "Moderate; subject sharp, foreground softens slightly",
    "iso": "400"
  },
  "negative": {
    "content": "extra subjects, digital art overlay, vector graphics, messy composition, extreme low angle, fisheye lens",
    "style": "no hyper-saturation, no soft focus filters, no heavy vignetting"
  }
}
```
*Source: [@IamEmily2050](https://x.com/IamEmily2050/status/1994624635300974734)*

### 1.9 Selfie with a Character/Reference Subject
*Composite selfie-with-someone-else template — swap in any second subject.*
```text
"I'm taking a selfie with [subject] on the set of [location].

Keep the person exactly as shown in the reference image with 100% identical facial features, bone structure, skin tone, facial expression, pose, and appearance. 1:1 aspect ratio, 4K detail."
```
*Source: [@rohanpaul_ai](https://x.com/rohanpaul_ai/status/1995641282056925680)*

### 1.10 Fisheye Group Selfie
*Wide-angle distortion selfie with multiple subjects reacting to camera.*
```text
A hyper-realistic fisheye wide-angle selfie, captured with a vintage 35mm fisheye lens creating heavy barrel distortion, without any camera or phone visible in the subject's hands.
Subject & Action: A close-up, distorted group photo featuring [person] with [other subjects]. Everyone is making wild, exaggerated faces, squinting slightly from the flash.
Lighting & Texture: Harsh, direct on-camera flash lighting that creates hard shadows behind the subjects. Authentic film grain, slight motion blur on the edges, and chromatic aberration. It looks like a candid, amateur snapshot, not a studio photo.
```
*Source: [@Arminn_Ai](https://x.com/Arminn_Ai/status/1996285140893622391)*

### 1.11 Museum/Gallery Portrait with Painted Double
*A person posing next to a classical-painting rendition of themself.*
```text
A commercial grade photograph of [subject] posing inside a high-end museum exhibition space. Behind them hangs a large, ornate framed classical oil painting.

The painting depicts the same person but rendered in a rich, traditional oil painting style with thick, visible impasto brushstrokes, deep textures, and rich color palettes on canvas. Gallery spotlights hit the textured paint surface.
Masterpiece, ultra-detailed, cinematic lighting, strong contrast, dramatic shadows, 8K UHD, highly detailed textures, professional photography.
```
*Source: [@brad_zhang2024](https://x.com/brad_zhang2024/status/1996072707348201827)*

### 1.12 Photo Displayed on a Camera Screen
*Nested-frame effect: a photo shown on the LCD of a specific camera model, complete with UI chrome.*
```text
A close-up shot of a subject displayed on the screen of a compact Canon digital camera. The camera body surrounds the image with its buttons, dials, and textured surface visible, including the FUNC/SET wheel, DISP button, and the "IMAGE STABILIZER" label along the side. The photo on the screen shows the subject indoors at night, illuminated by a bright built-in flash. The mood is candid, raw, nostalgic, reminiscent of early 2000s digital camera snapshots.

Scale ratio: 4:5 vertical
Camera: compact digital camera simulation | Lens: equivalent to 28-35mm | Aperture: f/2.8 | ISO: 400 | Shutter speed: 1/60 with flash
Color grading: nostalgic digital-camera tones, high contrast flash, subtle display grain, authentic screen glow.
```
*Source: [@kingofdairyque](https://x.com/kingofdairyque/status/1996033217795903655)*

### 1.13 Magazine Cover Portrait
*Cover-layout composition with named title text, issue details, and a shelf setting.*
```text
A photo of a glossy magazine cover, the cover has the large bold words "[TITLE]". The text is in a serif font, black on white, and fills the view. No other text.

In front of the text there is a dynamic portrait of a person in [colors] high-end fashion.

Put the issue number and today's date in the corner along with a barcode and a price. The magazine is on a white shelf against a wall.
```
*Source: [@NanoBanana](https://x.com/NanoBanana/status/1996262496802361675)*

### 1.14 Luxury Floating Product Shot (fill-in-the-blank template)
```text
Product:
[BRAND] [PRODUCT NAME] - [bottle shape], [label description], [liquid color]

Scene:
Luxury product shot floating on dark water with [flower type] in [colors] arranged around it. [Lighting style — e.g. "golden hour glow" / "bright fresh light"] creates reflections and ripples across the water.

Mood & Style:
[Adjectives — e.g. "ethereal and luxurious" / "fresh and clean"], high-end commercial photography, [camera angle], shallow depth of field with soft bokeh background
```
*Source: [@AmirMushich](https://x.com/AmirMushich/status/1974767431714304456)*

---

## 2. Creative & Experimental Compositions

### 2.1 Dense Crowd / "Where's Waldo" Scene
```text
A where is waldo image showing all [theme] characters on [location]
```
*Source: [@creacas](https://x.com/creacas/status/1991585587548348513)*

### 2.2 Aging Through the Years
```text
Generate the holiday photo of this person through the ages up to 80 years old
```
*Source: [@dr_cintas](https://x.com/dr_cintas/status/1991888364099035581)*

### 2.3 Recursive / Droste-Effect Image
```text
recursive image of an orange cat sitting in an office chair holding up an iPad. On the iPad is the same cat in the same scene holding up the same iPad. Repeated on each iPad.
```
*Source: [@venturetwins](https://x.com/venturetwins/status/1993174445515772086)*

### 2.4 Coordinate-Based Scene Generation
```text
35.6586° N, 139.7454° E at 19:00
```
*Source: Replicate*

### 2.5 Conceptual/Interpretive Visualization
```text
How engineers see the San Francisco Bridge
```
*Source: Replicate*

### 2.6 Multi-Subject Compositing
*Combine several separate reference photos into one cohesive group shot.*
```text
an office team photo, everyone making a silly face
```
*Source: Replicate*

### 2.7 Specific-Medium Simulation (whiteboard marker, chalk, etc.)
```text
Create a photo of [subject] drawn on a glass whiteboard in a slightly faded green marker
```
*Source: [@nicdunz](https://x.com/nicdunz/status/1991556910106177849)*

### 2.8 Split-View Realism/Wireframe Product Render
*Half photoreal, half technical-wireframe render of a single product — precise about the hard-cut boundary and single-object constraint.*
```text
Create a high-quality, realistic 3D render of exactly one instance of the object: [PRODUCT]. The object must float freely in mid-air and be gently tilted and rotated in 3D space. Use a soft, minimalist dark background in a clean 1080x1080 composition.

Left Half — Full Realism: appears exactly as it looks in real life — accurate materials, colors, textures, reflections, proportions. Completely opaque, no wireframe overlay.

Right Half — Hard Cut Wireframe Interior: switches cleanly to a wireframe interior diagram. The boundary must be a perfectly vertical, sharp, crisp cut line, top to bottom. No diagonal edges, no gradient. Wireframe lines: primarily white, thin, precise, engineering-style, matching the object's real geometry.

Strict Single-Object Rule: Render only ONE object. No second object, reflection, shadow, silhouette, or duplicate from any angle.
```
*Source: [@michalmalewicz](https://x.com/michalmalewicz/status/1995910758169752059)*

### 2.9 Isometric Diorama of Multiple Locations
```text
Create a high-detail 3D isometric diorama of [REGION], where each sub-area is represented as its own miniature platform. Inside each, place a stylized, small-scale 3D model of that area's most iconic landmark. Soft pastel colors, clean materials, smooth rounded forms, gentle shadows, subtle reflections. Arrange in accurate geographical layout, consistent lighting and perspective. Include labels in a clean, modern font.
```
*Source: [@DataExec](https://x.com/DataExec/status/1995876348879937648)*

### 2.10 Map Made of Themed Objects
```text
create a map of [REGION] where every sub-area is made out of its most famous [theme, e.g. food] (it should actually look like it's made of the thing, not a picture of the thing). Check carefully to make sure each area is right.
```
*Source: [@emollick](https://x.com/emollick/status/1995720976068137048)*

### 2.11 Proportionally-Accurate Comparison Render
*Side-by-side miniature comparison where relative scale must be strictly accurate — useful whenever real-world proportions matter (buildings, objects, etc).*
```text
Present a clear, side miniature 3D cartoon view of [SUBJECTS TO COMPARE]. Use minimal textures with realistic materials and soft, lifelike lighting and shadows. Arrange from LEFT to RIGHT in STRICT descending [metric] order — the largest must appear visibly largest, each next one clearly smaller, following accurate relative proportions matching real-world ratios. No item may be visually stretched or compressed. Maintain consistent camera angle and identical scale. No forced perspective — straight-on orthographic-style rendering.

Use a square 1080x1080 composition, clean neutral background, no extra objects.
```
*Source: [@michalmalewicz](https://x.com/michalmalewicz/status/1995532450861080956)*

### 2.12 Personalized Isometric Illustration
```text
Based on what you know about me, generate a 3D isometric colored illustration of me [activity], filled with various interior details. Visual style: rounded, polished, playful. --ar 1:1
```
*Source: [@dotey](https://x.com/dotey/status/1995944319677554985)*

### 2.13 Emoji Mashup
```text
combine these emojis: [emoji] + [emoji], on a white background as a google emoji design
```
*Source: [@NanoBanana](https://x.com/NanoBanana/status/1996193397913317384)*

### 2.14 Selective Torn-Paper Reveal Edit (structured YAML-style)
*Edit-only instruction that preserves everything except a specifically placed effect — good template for "change only X, leave everything else untouched" edits.*
```yaml
task: "edit-image: add torn-paper layered effect"
base_image:
  use_reference_image: true
  preserve_everything: [identity, expression, pose, outfit, background, lighting, composition, art style]
rules:
  - Only modify the torn-paper interior areas.
  - Do not change pose, anatomy, proportions, clothing details, shading, or scene elements.
effects:
  - effect: "torn-paper-reveal"
    placement: "[LOCATION]"
    description: "Add a wide, natural horizontal tear. Interior uses the style defined in interior_style."
interior_style:
  mode: "line-art"   # or sumi-e, colored-pencil, watercolor, pencil-drawing
```
*Source: [@munou_ac](https://x.com/munou_ac/status/1996129537806213597)*

### 2.15 Cinematic Keyframe / Storyboard Generator
*A meta-prompt: instructs the model to act as a director and produce a full storyboard grid from one reference image, with strict continuity rules.*
```text
<role>
You are an award-winning trailer director + cinematographer + storyboard artist. Turn ONE reference image into a cohesive cinematic short sequence, then output AI-video-ready keyframes.
</role>

<non-negotiable rules>
1) Analyze the full composition: identify ALL key subjects and describe spatial relationships.
2) Do not guess real identities or exact real-world locations. Stick to visible facts.
3) Strict continuity across ALL shots: same subjects, wardrobe, environment, time-of-day, lighting style. Only action, expression, framing, angle, and camera movement may change.
4) Depth of field realistic: deeper in wides, shallower in close-ups. ONE consistent color grade throughout.
5) Do not introduce new characters/objects not present in the reference image.
</non-negotiable rules>

<goal>Expand the image into a 10-20 second cinematic clip with setup -> build -> turn -> payoff.</goal>

Output, in order: A) Scene breakdown (subjects, environment/lighting, visual anchors that must stay constant) B) Theme & 4-beat emotional arc C) Cinematic approach (shot progression, camera movement, lens/exposure, light & color) D) A keyframe list (9-12 frames) E) ONE master contact-sheet grid image containing every keyframe as a labeled panel (KF number + shot type + duration), followed by the full text breakdown of each keyframe for regeneration at higher quality.
```
*Source: [@underwoodxie96](https://x.com/underwoodxie96/status/1995109628825489647)*

### 2.16 Person Inserted at Precise Coordinates
```text
Create a beautiful, photo book style magazine cover that fully utilizes the 9:16 aspect ratio. Place the attached person at the precise coordinates of [latitude/longitude], seamlessly blending them into the scene as if they are sightseeing. NEGATIVE: coordinate texts
```
*Source: [@minchoi](https://x.com/minchoi/status/1998784591155409397)*

### 2.17 Floating Themed Island/Diorama Poster
```text
Create an ultra-HD, hyper-realistic digital poster of a floating miniature island shaped like [SUBJECT], resting on white clouds in the sky. Blend iconic landmarks, natural landscapes, and cultural elements unique to [SUBJECT]. Carve "[LABEL]" into the terrain using large white 3D letters. Add artistic details, cinematic lighting, vivid colors, aerial perspective, sun reflections. Ultra-quality, 4K+ resolution.
```
*Source: [@TechieBySA](https://x.com/TechieBySA/status/1999110884879221052)*

### 2.18 Story/Film Scene as 3D Miniature Poster
```text
Design a high-quality 3D poster for [WORK], first retrieving information about it and its most famous/representative scene. Construct that scene as a delicate axonometric 3D miniature model, [ANIMATION STUDIO]-style soft rendering, reproducing architectural details, character dynamics, and environmental atmosphere. Background: a void environment with faint ink-wash diffusion and flowing light mist, elegant colors, giving depth. Bottom layout: centered title in a matching font, with a classic quote from the work below it in an elegant serif font.
```
*Source: [@op7418](https://x.com/op7418/status/1998355915456790916)*

### 2.19 Surreal Miniature-World Collage
```text
Surreal miniature-world collage poster featuring an oversized [everyday object] repurposed as a whimsical [scene, e.g. swimming pool]. Tiny figures interact with it at scale [describe activity]. Background: a soft, warm, lightly textured surface, evenly lit, no visual noise. Ground the scene with soft shadows beneath props and figures. Preserve a soft, high-saturation, toy-like aesthetic with plush textures, pastel gradients, and gentle lighting.
```
*Source: [@Salmaaboukarr/status/1998394870759567373]*

### 2.20 Chibi Diorama Inside a Transparent Object
```text
A transparent [container] hanging by a [detail]. Inside, a tiny diorama of [subject] reimagined as a cute 3d chibi character, [activity/setting], with small themed props and lighting. Cinematic lighting, shallow depth of field, soft reflections on the glass, ultra-polished materials, high detail, warm atmosphere.
```
*Source: [@CharaspowerAI/status/1998432458941858282]*

### 2.21 Macro Surreal Editorial Concept
*Extreme macro photography combined with a surreal visual metaphor — good template for conceptual/editorial imagery.*
```json
{
  "prompt": "An award-winning, hyper-realist macro photograph in the style of high-concept editorial art. [Describe the surreal metaphor and its execution in concrete physical detail]. The image demands microscopic clarity, capturing fine texture detail. The lighting is an unforgiving, high-contrast hard flash typical of avant-garde fashion photography.",
  "artistic_style": {
    "genre": ["Contemporary Pop-Surrealism", "Satirical Editorial", "Visual Metaphor"],
    "lighting": "Studio Ring Flash, High-Key, Hard Shadows, Glossy finish",
    "composition": "Macro Photography, Rule of Thirds"
  },
  "technical_specs": { "camera": "Hasselblad H6D-100c", "lens": "Macro 120mm f/4", "resolution": "8k" }
}
```
*Source: [@egeberkina/status/1997061102237049047]*

### 2.22 "Impossibly Perfect" Isometric Photo
```text
Make a photo that is perfectly isometric. It is not a miniature, it is a captured photo that just happened to be perfectly isometric. It is a photo of [SUBJECT].
```
*Source: [@NanoBanana](https://x.com/NanoBanana/status/1998085942201163905)*

### 2.23 Extreme Wide-Angle Edit with Screen Replacement (structured JSON)
*Precise edit-mode template: change only camera angle/pose, replace only a phone screen's content, keep everything else locked.*
```json
{
  "edit_type": "extreme_wide_angle_phone_edit",
  "mode": "EDIT",
  "preserve_elements": ["Person", "Face", "Hairstyle", "Clothing", "Environment style"],
  "change_rules": {
    "camera_angle": "Ultra-wide or fisheye lens (12-18mm equivalent)",
    "perspective_effect": "Nearby objects exaggerated, distant objects smaller"
  },
  "screen_replacement": {
    "target": "Only the smartphone screen portion displayed",
    "source": "Second reference image",
    "fitting_rules": "Strictly match the screen shape, no stretching"
  },
  "global_restrictions": ["No new characters", "No clothing changes", "No text/logos/watermarks added"]
}
```
*Source: [@qisi_ai/status/1997925279948534056]*

### 2.24 Person Beside Their Own Cartoon Doll (shop window reflection)
```text
Create a bright, high-end street-fashion photograph of the person from the reference image, keeping their face, hair, body & outfit exactly the same. They stand outside a luxury toy-shop window, gently touching the glass. Inside the window display, place a full-height cartoon-style doll designed to resemble them — same features, hair, outfit — transformed into a cute, big-eyed, stylized animated character. Crisp lighting, premium street-fashion look, realistic reflections, face unchanged.
```
*Source: [@xmiiru_/status/1997182817235583293]*

### 2.25 Glasses-Free 3D LED Urban Display
```text
An enormous L-shaped glasses-free 3D LED screen at a bustling urban intersection, iconic architectural style. The screen displays a captivating glasses-free 3D animation featuring [SCENE]. Characters/objects possess striking depth and appear to break through the screen's boundaries. Under realistic daylight, they cast lifelike shadows onto the screen surface and surrounding buildings.
```
*Source: [@dotey/status/1997574511705657772]*

### 2.26 Trans-Dimensional Object Interaction (structured JSON)
*Physical object interacting across a "screen boundary" into a digital scene — a template for any surreal reality/screen-bridging concept.*
```json
{
  "scene_architecture": { "dominant_element": "[oversized device, super-scaled]", "subordinate_elements": ["miniature props"] },
  "realm_physical": {
    "active_agent": { "identity": "Human hand", "action": "Pouring/interacting" },
    "lighting_global": { "source": "Natural light", "shadow_quality": "Soft, diffused" }
  },
  "realm_digital": { "screen_content": { "subject_scale": "Close-up filling screen" } },
  "surreal_bridge_event": {
    "physics_violation_rules": ["The boundary acts as a permeable membrane solely for this interaction.", "The physical element transitions seamlessly into its digital representation on contact."]
  },
  "rendering_specifications": { "visual_fidelity": "Hyper-realistic", "mood": "Cinematic, warm, magical" }
}
```
*Source: [@YaseenK7212/status/1996559154240967144]*

### 2.27 Extreme Close-Up Fisheye Lifestyle Shot
```json
{
  "scene": { "environment": "[setting]", "lighting": "bright_midday_sun" },
  "camera": { "lens": "ultra_wide_fisheye_12mm", "distance": "very_close_up", "distortion": "strong_exaggeration" },
  "subject": { "expression": "curious_playful", "pose": "leaning_forward" },
  "effects": { "depth_of_field": "shallow_foreground_sharp_background_soft", "color_grade": "clean_natural" }
}
```
*Source: [@egeberkina/status/1995069549805187087]*

### 2.28 Multi-Pose Scrapbook Collage
*Multiple poses of the same styled subject arranged in a collage, with a consistent outfit/hairstyle lock across all panels.*
```text
Colorful scrapbook poster aesthetic, vibrant stickers, one subject wearing the same outfit and hairstyle across multiple poses and cutouts, colorful strokes and lines, frameless collage style. Include several distinct poses (e.g. close-up, full-body, mid-shot with a prop) that stay consistent in identity, outfit, and hairstyle across every panel. Holographic textures, pastel gradients, glitter accents, playful doodles, magazine cut-out graphics, chaotic yet balanced layout.
negative_prompt: "no blurry face, no distorted hands, no extra limbs, no face warping, no low resolution, no watermark, no AI artifacts"
```
*Source: [@ShreyaYadav___/status/1995760655018942720]*

### 2.29 Disposable-Camera Candid Snapshot
```text
A daily snapshot taken with a low-quality disposable camera. A clumsy, candid photo. (Aspect ratio 3:2 recommended)
```
*Source: [@SSSS_CRYPTOMAN/status/1994245271220568233]*

---

## 3. Education & Infographics

### 3.1 Concept-to-Infographic
```text
Create an educational infographic explaining [CONCEPT]. Visual Elements: Illustrate the key components clearly. Style: Clean, flat vector illustration suitable for a textbook. Use arrows to show flow/relationships. Labels: Label each element clearly in [LANGUAGE].
```
*Source: WeChat Article*

### 3.2 Illustrated Travel Journal
*Auto-populates a themed itinerary illustration from a city name and trip length.*
```text
Create a vibrant, child-like crayon-style vertical (9:16) illustration titled "{City Name} Travel Journal." Warm, light-toned background combined with bright cheerful colors.

Main Scene: a winding travel route with arrows connecting stops, auto-generated based on {Number of Days}: Stop 1 (attraction + short description) ... Final Stop (local food/souvenir + closing remark).

Surrounding elements: cute travel character doodles, hand-drawn iconic landmarks labeled by name, funny signboards, sticker-style short phrases, local food icons — all auto-adapted to the named city.

Style: crayon/children's hand-drawn diary style, bright warm palette, cute handwritten font throughout.
```
*Source: [@dotey/status/1994908289813880915]*

### 3.3 Branded Financial Sankey Diagram
*Data-visualization template that derives its color palette from a brand's logo.*
```text
[Subject]: A professional financial Sankey diagram visualizing the Income Statement of [COMPANY], in the style of professional corporate financial reports. [Visual Style]: High-fidelity vector infographic, clean minimalist aesthetic, flat design, light background.

[Color Strategy]: Extract the primary brand color from the [COMPANY] logo and use it as the dominant theme — saturated shades for the vertical nodes, semi-transparent lighter gradients for the flowing paths. Avoid clashing colors.

[Composition]: Horizontal flow from Left (Revenue Sources) to Right (Net Profit). Connecting paths appear "silky smooth" with elegant Bezier curves. Minimalist flat vector icons for each revenue segment on the left. Logo placed clearly near the central bar.

[Details]: High resolution, sharp sans-serif typography, professional data-viz layout distinguishing Revenue, Gross Profit, Operating Expenses, and Net Profit.
```
*Source: [@bggg_ai/status/1996211865207316751]*

---

## 4. E-commerce & Virtual Studio

### 4.1 Virtual Garment Try-On
```text
Using Image 1 (the garment) and Image 2 (the model), create a hyper-realistic full-body fashion photo where the model is wearing the garment. Crucial Fit Details: The garment must drape naturally on the model's body, conforming to posture with realistic folds and wrinkles. High-Fidelity Preservation: Preserve the original fabric texture, color, and any logos from Image 1 with extreme accuracy. Seamless Integration: Match ambient lighting, color temperature, and shadow direction between the two images. Photography Style: Clean e-commerce lookbook, shot on a Canon EOS R5 with a 50mm f/1.8 lens.
```
*Source: WeChat Article*

### 4.2 Clean Product Photography from a Messy Photo
```text
Identify the main product in the uploaded photo (automatically removing any hands holding it or messy background details). Recreate it as a premium e-commerce product shot. Subject Isolation: Cleanly extract the product, completely removing fingers, hands, or clutter. Background: Place on a pure white studio background with a subtle, natural contact shadow at the base to ground it. Lighting: Soft, commercial studio lighting highlighting texture and material, even illumination, no harsh glare. Retouching: Fix lens distortion, improve sharpness, color-correct.
```
*Source: WeChat Article*

### 4.3 Miniature Chibi-Style Brand Store
```text
3D chibi-style miniature concept store of {Brand Name}, exterior inspired by the brand's most iconic product/packaging. Two floors with large glass windows showing a cozy, finely decorated interior in the brand's primary color, warm lighting, staff dressed in brand-matching outfits. Tiny figures stroll the street, benches, street lamps, potted plants. Miniature cityscape style, blind-box toy aesthetic, rich detail, soft afternoon lighting. --ar 2:3
```
*Source: [@dotey/status/1995190286775881780]*

### 4.4 Furnish an Empty Room
```text
Show me how this room would look with furniture in it
```
*Source: [@NanoBanana](https://x.com/NanoBanana/status/1994483569625022487)*

---

## 5. Workplace & Productivity

### 5.1 Whiteboard Sketch to Corporate Flowchart
```text
Convert this hand-drawn whiteboard sketch into a professional corporate flowchart suitable for a business presentation. Style Guide: minimalist 'McKinsey-style' aesthetic — clean lines, ample whitespace, sophisticated blue-and-gray palette. Structure: Automatically align boxes/diamonds to a strict grid. Connect with straight, orthogonal arrows (90-degree angles only). Text: Transcribe handwritten labels into a clear, bold sans-serif font. Output: High-resolution vector-style image on pure white background.
```
*Source: WeChat Article*

### 5.2 Wireframe Sketch to High-Fidelity UI Mockup
```text
Transform this rough wireframe sketch into a high-fidelity UI design mockup for a mobile app. Design System: modern, clean aesthetic (iOS/Material Design). Rounded corners, soft drop shadows, vibrant primary color. Components: interpret the sketch intelligently — scribbles become placeholder images, rough rectangles become buttons with gradients, lines become realistic text blocks. Layout: perfect padding and consistent spacing. Context: place the design inside a realistic phone frame mockup.
```
*Source: WeChat Article*

### 5.3 Text-to-Magazine-Layout
```text
Put this whole text, verbatim, into a photo of a glossy magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [...the unformatted article]
```
*Source: [@fofrAI/status/1991530971800182929]*

---

## 6. Photo Editing & Restoration

### 6.1 Smart Outpainting (Aspect Ratio Expansion)
```text
Zoom out and expand this image to a [TARGET ASPECT RATIO]. Context Awareness: Seamlessly extend the scenery on all expanded sides, matching the original lighting, weather, and texture perfectly. Logical Completion: If there are cut-off objects on the borders, complete them naturally based on logical inference. Do not distort the original center image.
```
*Source: WeChat Article*

### 6.2 Smart Crowd/Object Removal
```text
Remove all [unwanted elements] in the background behind the main subject. Intelligent Fill: Replace them with realistic background elements that logically fit the scene. Consistency: Ensure no blurry artifacts or 'smudges' remain — the filled area must match grain, focus depth, and lighting of the rest of the photo.
```
*Source: WeChat Article*

### 6.3 Face-Detection Bounding-Box Overlay
```text
Create a high angle CCTV surveillance shot using the uploaded image as the source. Detect every visible person and automatically draw a white rectangular bounding box around each face. For the most prominent person, add a zoomed-in inset: a sharp, enhanced close-up of their face in a floating rectangular frame connected with a thin white line. Keep the main image slightly noisy and security-camera-like (soft grain, slight distortion, muted colors); the inset should be clearer and more detailed. No text, no timestamps except the boxes and connecting line.
```
*Source: [@egeberkina/status/1994804061024010628]*

---

## 7. Interior Design

### 7.1 Floor Plan to Full Design Presentation Board
```text
Based on the uploaded 2D floor plan, generate a professional interior design presentation board in a single image. Layout: a collage with one large main image at the top, several smaller images below.

Content: 1) Main image — wide-angle perspective of the main living area. 2) Small image — Master Bedroom view. 3) Small image — Home Office/Study view. 4) Small image — 3D top-down floor plan showing furniture layout.

Overall Style: Apply one consistent style (materials, wall color, flooring) across ALL images. Quality: photorealistic rendering, soft natural lighting.
```
*Source: WeChat Article*

---

## 8. Social Media & Marketing

### 8.1 Viral Video Thumbnail
```text
Design a viral video thumbnail using the person from Image 1. Face Consistency: keep facial features exactly the same as Image 1, but change expression to excited/surprised. Action: pose the person on one side, pointing toward the other side of the frame. Subject: on the other side, place a high-quality image of [SUBJECT]. Graphics: bold arrow connecting the pointing hand to the subject. Text: massive, pop-style overlay text with a thick white outline and drop shadow reading "[HOOK TEXT]". Background: blurred, bright setting, high saturation and contrast.
```
*Source: WeChat Article*

### 8.2 Commercial Promotional Poster
```text
Design a professional promotional poster for [BUSINESS]. Composition: a cinematic close-up of [product] on [surface], [seasonal/mood detail] in the background. Text Integration: 1) Main Title in elegant typography at the top. 2) Offer clearly displayed in a modern badge/sticker style. 3) Footer in small clean text at the bottom. Quality: all text perfectly spelled, centered, and integrated into the image's depth of field.
```
*Source: WeChat Article*

---

## 9. Daily Life & Translation

### 9.1 In-Place Sign/Menu Translation
*Preserves the physical surface texture so the translated text looks native to the original photo, not overlaid.*
```text
Translate the [LANGUAGE] text on the [sign/menu] into [TARGET LANGUAGE] for foreign tourists. Texture Preservation: Crucial — maintain the original aged, textured look of the surface. The new text should look like it was written/printed on the same surface, with matching fading or wear. Keep any currency symbols and numbers exactly as they are. Layout: align translations next to or replacing the original text naturally.
```
*Source: WeChat Article*

### 9.2 Speech-Bubble / Meme Localization
```text
Translate the text in the speech bubbles/captions from [SOURCE LANGUAGE] to [TARGET LANGUAGE]. Seamless Cleaning: erase the original text and perfectly fill the background (bubble or image background). Style Matching: render the translated text using a font style that matches the aesthetic of the original (handwritten/casual for comics, bold impact font for memes). Fit: ensure text fits naturally without overcrowding.
```
*Source: WeChat Article*

---

## 10. Avatars & Social Content

### 10.1 3D Blind-Box Style Avatar
```text
Transform the person in the uploaded photo into a cute 3D blind-box toy character. Likeness: keep key features recognizable (hair color, glasses, hairstyle). Style: C4D rendering, occlusion render, cute Q-version, soft studio lighting, pastel colors. Background: a simple, solid matte color. Detail: smooth, plastic toy texture with a slight glossy finish. Facing forward, friendly expression.
```
*Source: WeChat Article*

### 10.2 Pet Meme Sticker
```text
Turn this photo of my [pet] into a funny hand-drawn sticker. Style: minimalist ugly-cute line drawing (doodle style), white background. Expression: exaggerate the animal's expression (shocked/judgemental/lazy, based on the photo). Accessories: add cute doodles like sweat drops, question marks, or sparkles around the head. Text: handwritten caption at the bottom in a messy, funny style.
```
*Source: WeChat Article*

### 10.3 Y2K Scrapbook Poster, Multiple Poses
*Consistent identity/outfit/hairstyle across several distinct poses within one collage — see also 2.28 for a non-Y2K version of this pattern.*
```text
facelock_identity: true
accuracy: 100%
scene: "Colorful Y2K scrapbook poster aesthetic, vibrant stickers, one subject wearing the same outfit and hairstyle with different poses and cutouts, colorful strokes and lines, frameless collage style. Includes: close-up shot with heart-shape fingers, full-body pose holding a polaroid camera, mid-shot blowing bubblegum, mid-shot smiling while holding a cat, seated pose with peace sign, mid-shot holding flowers. Holographic textures, pastel gradients, glitter accents, playful doodles, magazine cut-out graphics."
negative_prompt: "no realism that breaks the aesthetic, no modern clothing, no messy composition, no blurry face, no distorted hands, no extra limbs, no face warping, no watermark, no AI artifacts"
```
*Source: [@ShreyaYadav___/status/1995760655018942720]*

### 10.4 AI Skin-Analysis Assistant (text response, not image)
*Not an image prompt — a structured-response template for turning a close-up photo into a skincare recommendation. Included because it's a common adjacent "photo in, structured output" request.*
```text
You are a professional skin analyst and skincare expert. The user uploads a close-up photo of their face and may add short notes (age, allergies, current routine, etc). Use ONLY what you see in the image plus the user's text.

1. Inspect the skin: shine, pores, redness, blemishes, texture, fine lines, dark circles.
2. Decide the main skin type: oily, dry, normal, combination, sensitive.
3. Identify visible issues.

RESPONSE FORMAT: 3-6 short lines describing skin type/issues and severity, then a line reading "SKIN ROUTINE", then at least 5 numbered steps, each naming a product type, key ingredients (no brand names), AM/PM timing, and one practical instruction. Over-the-counter products only — no prescriptions or medical diagnosis. If anything looks severe or infected, kindly suggest a dermatologist.
```
*Source: [@Samann_ai/status/1996230732470010064]*

---

## Further reading

- [Official Nano Banana Pro Prompting Guide](https://blog.google/products/gemini/prompting-tips-nano-banana-pro/)
- [Community prompting guide (fofr.ai)](https://www.fofr.ai/nano-banana-pro-guide)
