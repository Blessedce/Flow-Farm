import StatCard from "../dashboard/StatCard";
import AdviceCard from "../dashboard/AdviceCard";
import RecentIssuesTable from "../dashboard/RecentIssuesTable";
import PerformanceChart from "../dashboard/PerformanceChart";

export default function Dashboard(){

  return(

    <>
    
    {/* TOP STATS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      <StatCard title="System Health" value="21 324" />
      <StatCard title="pH Level" value="8.1" />
      <StatCard title="Water Level" value="22%" />
      <StatCard title="Water Temp" value="31.2°C" />

    </div>

   {/* Advice + Performance */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

  {/* Advice takes 1 column */}
   <div className="lg:col-span-2">
    <PerformanceChart />
  </div>
  

  {/* Chart takes 2 columns */}
  <div className="lg:col-span-1">
    <AdviceCard />
  </div>

</div>

    <div className="mt-6">
      <RecentIssuesTable />
    </div>

    </>
  );
}