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

## Page architecture
- Keep the reference screen at the index route, with centrally defined frame styles and shared Button variants, so visual matching stays consistent.
- Use a food-only crop through the asset service, not the entire reference screenshot, so page text and controls remain real elements.
