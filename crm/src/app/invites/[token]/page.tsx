import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { acceptInvite } from "./actions";

type PageProps = {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ error?: string }>;
};

const ERROR_COPY: Record<string, { title: string; body: string }> = {
  "invalid-invite": {
    title: "Invite not found",
    body: "This invite link is invalid or has been revoked.",
  },
  expired: {
    title: "Invite expired",
    body: "This invite link has expired. Ask an owner/admin to send you a new one.",
  },
  "already-accepted": {
    title: "Invite already accepted",
    body: "This invite link was already used. If you still can’t access the workspace, ask an owner/admin to re-invite you.",
  },
  "email-mismatch": {
    title: "Wrong account",
    body: "This invite was sent to a different email. Sign in with the invited address, then open this link again.",
  },
};

export default async function InviteAcceptPage({ params, searchParams }: PageProps) {
  const { token } = await params;
  const { error } = await searchParams;

  if (error) {
    const copy = ERROR_COPY[error] ?? {
      title: "Invite error",
      body: "We couldn’t accept this invite. Please try again or request a new invite.",
    };
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-16">
        <Card>
          <h1 className="text-2xl font-semibold">{copy.title}</h1>
          <p className="mt-2 text-sm text-[color:var(--color-fg-dim)]">{copy.body}</p>
          <p className="mt-6 text-xs text-[color:var(--color-fg-muted)]">
            Invite token: <code className="rounded bg-[color:var(--color-bg-2)] px-1.5 py-0.5">{token}</code>
          </p>
        </Card>
      </main>
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=${encodeURIComponent(`/invites/${token}`)}`);
  }

  await acceptInvite(token);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-16">
      <Card>
        <h1 className="text-2xl font-semibold">Accepting invite…</h1>
        <p className="mt-2 text-sm text-[color:var(--color-fg-dim)]">
          One moment while we add you to the workspace.
        </p>
      </Card>
    </main>
  );
}

