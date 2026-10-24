import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkyBlu — Website Under Construction" },
      { name: "description", content: "The SkyBlu website is under construction. Check back soon." },
      { property: "og:title", content: "SkyBlu — Website Under Construction" },
      { property: "og:description", content: "The SkyBlu website is under construction. Check back soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-primary">SkyBlu</h1>
      <p className="mt-4 text-lg text-muted-foreground">Our website is under construction.</p>
      <p className="mt-1 text-sm text-muted-foreground">Check back soon.</p>
    </main>
  );
}
