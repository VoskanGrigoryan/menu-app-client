import { BaseLayout } from "@/src/components/layout/BaseLayout";
import DashboardView from "./dashboard/page";

export default function Home() {
  return (
    <BaseLayout>
      <DashboardView />
    </BaseLayout>
  );
}
