# Agha Noman Portfolio

A static portfolio with a filterable gallery and project previews. The gallery loads covers from Behance’s image CDN. Each project has a link to its full case study and an optional preview from Behance’s official embed. Existing projects have local backup covers.

## Preview

Open `docs/index.html` in a browser. There is no install or build step. An internet connection loads the Behance images, previews and web fonts.

## Add a project

1. Publish the project on Behance. Open **Share → Copy Link** and use the full URL starting with `https://www.behance.net/gallery/`.
2. Open `docs/projects.js` on GitHub and click the pencil icon. Copy an entry and replace its values. The order here is the order on the site. A new category appears automatically in the filter bar.
3. For the cover, upload a high-resolution WebP or JPEG to `docs/assets` and set `cover` to `assets/your-image.webp`, or paste a direct Behance cover image URL. In Chrome, right-click the published cover and choose **Copy image address**. You can leave `cover` out and the card will show its title while the case study link and preview still work.
4. Commit the change. If GitHub Pages is enabled, GitHub will update the site after its deployment finishes.

```js
{
  title: 'Project title',
  category: 'Branding',
  description: 'One or two sentences about the work.',
  behance: 'https://www.behance.net/gallery/123456789/Project-Title',
  cover: 'assets/project-title.webp',
},
```

The project URL supplies the ID for the embed. Use a public project with embedding enabled. If an embed is unavailable, the full project link still opens Behance. To change a hero tile, move its `featured` value to another project. Use each slot once: `upper-left`, `lower-left`, `upper-right`, and `lower-right`.

## Publish on GitHub Pages

In your repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/docs`, then save. GitHub displays the site URL after deployment. The repo’s visibility and your GitHub plan determine whether Pages is available. [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

The site only displays entries added to `docs/projects.js`. Publishing a new Behance project by itself does not add it to the gallery. [Behance sharing and embeds](https://help.behance.net/hc/en-us/articles/19288565618971-Guide-Sharing-and-Embedding-Behance-Content)
