import MissingItemReportComponent from "../../components/missing-item-report";
import Header from "../_components/header";

export default function Dashboard() {
  return (
    <>
      {/* header */}
      <Header />
      <div className="flex h-screen items-center justify-center bg-neutral-50">
        <MissingItemReportComponent />
      </div>
    </>
  );
}
