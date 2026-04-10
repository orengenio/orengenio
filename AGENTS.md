<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a **single-service** Next.js 16 (App Router) marketing website with no backend, database, or Docker dependencies.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Lint | `npm run lint` (ESLint) |

### Notes

- There are no automated tests configured; the `package.json` has no `test` script.
- Lint exits with code 1 due to pre-existing warnings/errors in the repo (unused vars, `<img>` vs `<Image />`, unescaped entities). This is expected and does not indicate a new problem.
- **Pre-existing build breaker:** `src/app/orenkanbuilder/page.tsx` imports `./KanBuilder` which does not exist in the repo. This causes `npm run build` and the dev server to fail with a 500 on all routes. To unblock dev/build, either add the missing component or comment out the import.
- The site loads 3D scenes and images from external CDNs (`cdn.content360.io`, `storage.googleapis.com`, `unpkg.com`). These assets require internet access; pages still render without them but will show missing visuals.
- No `.env` files or secrets are required to run the dev server.
