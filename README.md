# Agha Noman Portfolio

A static portfolio with a filterable gallery and a full page for each project. Covers and artwork load from Behance’s image CDN. Motion clips play in Adobe’s embedded player.

## Preview

Open `docs/index.html` in a browser. There is no install or build step. An internet connection loads the artwork, motion clips and web fonts.

## Add a project

1. Publish the project on Behance. Open **Share → Copy Link** and use the full URL starting with `https://www.behance.net/gallery/`.
2. Open `docs/projects.js` on GitHub and click the pencil icon. Copy an entry and replace its values. The order here is the order on the site. A new category appears automatically in the filter bar.
3. For the cover, upload a high-resolution WebP or JPEG to `docs/assets` and set `cover` to `assets/your-image.webp`, or paste a direct Behance cover image URL. In Chrome, right-click the published cover and choose **Copy image address**.
4. Add the presentation to `docs/case-studies.js`. Use the number from the Behance URL as the entry key. Put the panels in the order they should appear. Each image entry accepts the image URL or local file path, its width and its height in pixels.
5. Commit the changes. If GitHub Pages is enabled, GitHub updates the site after its deployment finishes.

```js
{
  title: 'Project title',
  category: 'Branding',
  subtitle: 'Brand identity and packaging',
  description: 'One or two sentences about the work.',
  behance: 'https://www.behance.net/gallery/123456789/Project-Title',
  cover: 'assets/project-title.webp',
},
```

```js
'123456789': [
  { images: [['assets/project-panel-1.webp', 1400, 1000]] },
  { images: [['assets/project-panel-2.webp', 1400, 1800]] },
],
```

Put more than one image in an `images` array to show them together as a row. For your own MP4 or WebM, use `{ type: 'video', motion: ['assets/clip.mp4', 1920, 1080] }`. Each case study also links to the original Behance project. To change a hero tile, move its `featured` value to another project. Use each slot once. The slots are `upper-left`, `lower-left`, `upper-right`, and `lower-right`.

## Publish on GitHub Pages

In your repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/docs`, then save. GitHub displays the site URL after deployment. The repo’s visibility and your GitHub plan determine whether Pages is available. [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Add future Behance projects to the project list and case study file after publishing them.
