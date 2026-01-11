# Custom sections (exact names) + Envelope video opening

## Replace assets
### Envelope screen background
`assets/images/enter.png`

### Opening video
`assets/video/envelope-open.mp4`

### Music
`assets/audio/music.mp3`

### Section backgrounds (export PNGs from Canva and name EXACTLY)
Put into `assets/images/`:

- anisha-weds-kishan.png
- dates-and-location.png
- the-countdown-begins.png
- the-details-venue.png
- the-details-events.png
- invite-01-halidi.png
- haldi-1.png
- haldi-2.png
- ak-logo.png

## Configure
Edit `js/config.js`:
- SITE_PASSWORD
- COUNTDOWN_TARGET_ISO (wedding starts 2026-11-20)
- MAP_EMBED_URL

## Deploy (GitHub + Cloudflare Pages)
Upload everything to GitHub (keep `index.html` in the root).
Cloudflare Pages:
- Framework preset: None
- Build command: (empty)
- Output directory: /
