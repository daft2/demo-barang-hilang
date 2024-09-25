import { LostItemHistoryComponent } from "~/components/lost-item-history";
import Header from "../_components/header";

export default function History() {
  return (
    <>
      <Header />

      <div className="flex h-screen items-center justify-center bg-neutral-50">
        <LostItemHistoryComponent />
      </div>
    </>
  );
}
