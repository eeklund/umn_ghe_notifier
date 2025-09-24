# UMN GitHub Legacy Notifier (Chrome/Firefox)

Warns when you are viewing legacy `github.umn.edu/asrweb/*` pages and offers a one‑click jump to the corresponding `github.com/umn-asr/*` URL.

## What it does

- Injects a high‑contrast banner with official U of M colors at the top of any page under `https://github.umn.edu/asrweb/*`.
- Message: **“You are viewing github.umn.edu! Did you mean github.com?”**
- Buttons:
  - **Switch to github.com** → rewrites the current URL from `github.umn.edu/asrweb/...` to `github.com/umn-asr/...`
  - **Dismiss** → hides the banner for the current tab/session
- Accessibility:
  - Banner color: UMN Gold (`#ffcc33`) with black text for AAA contrast.
  - Buttons: UMN Maroon (`#7a0019`) with white text (AAA contrast).
  - Keyboard focus outlines on controls.
- Privacy & security:
  - No special permissions.
  - Runs only on `https://github.umn.edu/asrweb/*` via a content script.
  - No network calls, no analytics, no storage beyond ephemeral `sessionStorage` for dismiss‑once behavior.

## Folder layout

```
umn-ghe-notifier/
├─ manifest.json
└─ umn_github_notifier_banner.jsn
```

## Configure mapping (optional)

By default the extension maps:

```
https://github.umn.edu/asrweb/<rest-of-path>
→ https://github.com/umn-asr/<rest-of-path>
```

If you need a different target org, edit `umn_github_notifier_banner.js`:

```js
const cloud = current.replace(
  "https://github.umn.edu/asrweb/",
  "https://github.com/umn-asr/"
);
```

---

## Install on **Google Chrome** (local “unpacked”)

1. Download or clone this folder.
2. Open `chrome://extensions/`.
3. Toggle **Developer mode** (top‑right).
4. Click **Load unpacked** and select the `umn-ghe-notifier` folder.
5. Visit any page under `https://github.umn.edu/asrweb/...` and verify the banner appears.

---

## Install on **Mozilla Firefox** (temporary add‑on)

Firefox supports Manifest V3 content scripts (Firefox 109+). To load locally:

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Select the `manifest.json` inside the `umn-ghe-notifier` folder.
4. Navigate to `https://github.umn.edu/asrweb/...` to see the banner.

Notes:
- "Temporary" means it unloads when you restart Firefox. Repeat steps to reload.
- Sadly for permanent installation this repo would need to be packaged and signed as an add‑on via addons.mozilla.org (AMO). Favor Google Chrome for this extension since it persists past browser restarts.

