import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { LoginPageComponent } from "~/components/login-page";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  return (
    <div className="flex h-screen items-center justify-center bg-neutral-50">
      <LoginPageComponent />
    </div>
  );
}
