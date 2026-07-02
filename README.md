# WaveRide Landing Page

A single-file, Apple-style glassmorphism landing page for the WaveRide indicator. No build step — just static HTML/CSS/JS.

## 1. Add your images

Drop these files into the `img/` folder (same names, so the page picks them up automatically):

| File | Used for |
|---|---|
| `img/logo_1.png` | Navbar + footer logo (falls back to a wave icon if missing) |
| `img/bot_image.png` | Hero visual |
| `img/testimony-1.png` | Testimonial screenshot 1 |
| `img/testimony-2.png` | Testimonial screenshot 2 |
| `img/testimony-3.png` | Testimonial screenshot 3 |
| `img/author.png` | About-the-author photo |

Until a file is added, that spot shows a clean placeholder label instead of a broken image icon — so the page still looks presentable.

## 2. Edit the "About the author" text

Open `index.html`, search for `[Add 2–3 sentences here...]` and `[Optional: mention the markets...]` and replace with your real bio. These were left as placeholders instead of invented facts.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "WaveRide landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Other** (it's static HTML, no build command needed).
3. Root directory: leave as `/`.
4. Deploy — Vercel will serve `index.html` at your project's root URL.

Every push to `main` will auto-redeploy.

## Notes

- Buy Now buttons link to: `https://selar.com/tk9s4g61x8`
- Price shown: ₦10,800 (~$7)
- Icons: [Lucide](https://lucide.dev) via CDN
- Scroll animations: [AOS](https://michalsnik.github.io/aos/) via CDN
- Fonts: Inter (Google Fonts), falling back to `-apple-system` / SF Pro on Apple devices
