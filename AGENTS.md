<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the SkyBlu reference presentation in the home route with exact reference CSS scoped under `.sb-page` and centralized colour tokens in `src/styles.css`; this preserves the approved HTML appearance without inline styling.
- Use the Button reference variant and size for reference contact anchors so shared control defaults do not alter the approved dimensions.
- Serve the existing reference hero and favicon from `public/` using root-relative URLs to preserve the explicitly requested asset paths.
