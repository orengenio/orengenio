import { Card } from "@/components/ui/card";

function SkeletonRow() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0 flex-1">
        <div className="h-4 w-2/3 rounded bg-white/10" />
        <div className="mt-2 h-3 w-1/3 rounded bg-white/10" />
      </div>
      <div className="h-8 w-24 rounded bg-white/10" />
    </div>
  );
}

export default function LoadingTasks() {
  return (
    <div className="space-y-6">
      <div>
        <div className="h-8 w-40 rounded bg-white/10" />
        <div className="mt-2 h-4 w-72 rounded bg-white/10" />
      </div>

      <div className="flex gap-2">
        <div className="h-9 w-32 rounded bg-white/10" />
        <div className="h-9 w-36 rounded bg-white/10" />
        <div className="h-9 w-44 rounded bg-white/10" />
      </div>

      <Card className="space-y-4">
        <SkeletonRow />
        <div className="h-px bg-[color:var(--color-border)]" />
        <SkeletonRow />
        <div className="h-px bg-[color:var(--color-border)]" />
        <SkeletonRow />
      </Card>
    </div>
  );
}

