# Under Fifty

A daily spending log built around one number: a **¥50 per day** limit.

Log what you spend and what it was for. The big number is what's left today —
green while you're fine, amber for the last ¥10, red once you're over. The bar
beneath it is a ¥50 ruler marked every ¥10, so you read your position against
the real limit rather than a percentage.

It installs to a phone home screen and works fully offline.

## Using it

- Type an amount, tap a category, optionally note what it was, hit **Add**.
- Tap any bar in **Last 14 days** to view that day — you can still add to it,
  so a purchase you forgot to log yesterday isn't lost.
- **Streak** counts consecutive days at or under the limit.
- The daily limit is editable if ¥50 stops being the right line.

## Installing on a phone

Open the deployed URL, then:

- **iPhone / iPad (Safari)** — Share → *Add to Home Screen*
- **Android (Chrome)** — menu → *Install app*

It then opens full screen with its own icon, no browser chrome, and runs
without a connection.

## Where the data lives

Entries are kept in the browser's local storage on the device, so the app works
offline and starts instantly. That also means the log is **per device** — use
**Export backup** to save a JSON file and **Import** to merge it into another
device. Importing is idempotent: re-importing the same file adds nothing.

When the same page is served inside a Claude Artifact, it additionally saves
back into the artifact itself so the log follows you across devices. The label
in the top right says which mode it's in.

## Deploying

Static files, no build step. Any static host works. For GitHub Pages:

1. Settings → Pages
2. Source: *Deploy from a branch*
3. Branch: `claude/hello-86nrop`, folder `/ (root)`

GitHub Pages requires the repository to be **public** on a free account.

To run it locally instead:

```sh
python3 -m http.server 8000
# open http://127.0.0.1:8000
```

A service worker is only registered over HTTPS or on `localhost` — opening
`index.html` straight off the filesystem skips the offline layer.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app — markup, styles, and logic in one file |
| `manifest.webmanifest` | Name, icons, and standalone display for installation |
| `sw.js` | Service worker; caches the shell so the app opens offline |
| `icons/` | Home screen icons, including a maskable variant for Android |

Bump `CACHE` in `sw.js` when app files change so installed copies update.
