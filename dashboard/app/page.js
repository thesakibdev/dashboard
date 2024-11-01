import BarChart from "@/components/BarChart";
import RecentOrder from "@/components/RecentOrder";
import TopCard from "@/components/TopCard";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopCard />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrder />
      </div>
    </div>
  );
}
