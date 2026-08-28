# Murad — model card

`murad-model-card.png` (3200×2000) and `murad-model-card.jpg` are the
deliverable. Everything else here rebuilds them.

## Editing

`card-source.html` is the layout, with `__HERO__`, `__STUDIO__`, `__FIELD__`,
`__STREET__` and `__PHONE__` as placeholders. Text edits (measurements, notes,
booking address) happen directly in that file.

Photo positions are fixed pixel boxes near the bottom of the stylesheet —
`.lead` for the black-and-white lead frame, `.f1`–`.f3` for the three on the
right. Each is cropped with `background-position`; raise the second percentage
to move a crop's window down the photograph.

## Rebuilding

Substitute the photographs as base64 data URIs, then screenshot at 2× with
Playwright:

```sh
node render.js "$PWD/card.html" murad-model-card.png 2
node render.js "$PWD/card.html" murad-model-card.jpg 2   # jpeg, quality 94
```

`index.html` is a separate, self-contained web version of the same card.
