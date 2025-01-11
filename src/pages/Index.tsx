import { Activity, Dumbbell, Timer, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { WorkoutHistory } from "@/components/WorkoutHistory";
import { PersonalRecords } from "@/components/PersonalRecords";
import { ProgressChart } from "@/components/ProgressChart";

const Index = () => {
  return (
    <div className="container mx-auto p-4 space-y-6 animate-in">
      <h1 className="text-4xl font-bold mb-8">Fitness Dashboard</h1>
      
      <div className="stats-grid">
        <StatsCard
          title="Total Workouts"
          value="24"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          description="This month"
        />
        <StatsCard
          title="Active Streak"
          value="7 days"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Time Spent"
          value="12.5 hrs"
          icon={<Timer className="h-4 w-4 text-muted-foreground" />}
          description="This month"
        />
        <StatsCard
          title="Total Weight"
          value="4,800 lbs"
          icon={<Dumbbell className="h-4 w-4 text-muted-foreground" />}
          description="Volume this week"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WorkoutHistory />
        <PersonalRecords />
      </div>

      <ProgressChart />
    </div>
  );
};

export default Index;