# Lane 2 — Pipelines / Stages / Deals

Shipped in `feat/crm-phase-2-lane-2-deals-pipeline`.

## What’s included

- Pipelines admin (owner/admin only)
  - Create pipeline, rename, delete
  - Set default pipeline
- Stages admin (owner/admin only)
  - Add / edit / delete stages
  - Reorder stages (up/down)
- Deals
  - Kanban board grouped by stage (default pipeline)
  - Native HTML5 drag-and-drop to move deals between stages
  - Click-to-move via per-deal stage selector
  - Per-stage totals (grouped by currency)
  - List view with filters (stage, owner, status)
  - New deal + deal detail/edit + mark won/lost + delete
- Shared formatting helpers in `src/lib/format.ts`

## Notes / limitations

- Owner selection displays user IDs (Supabase Auth emails aren’t available via RLS; a user profile table can improve this later).
- “Pipeline + stage picker” is server-rendered; stage options include the pipeline name and the server action validates the stage belongs to the chosen pipeline.

