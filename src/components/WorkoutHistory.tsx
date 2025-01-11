import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dumbbell, Calendar } from "lucide-react";

const mockWorkouts = [
  { id: 1, name: "Upper Body", date: "2024-02-20", duration: "45 min" },
  { id: 2, name: "Leg Day", date: "2024-02-19", duration: "60 min" },
  { id: 3, name: "Cardio", date: "2024-02-18", duration: "30 min" },
];

export function WorkoutHistory() {
  return (
    <Card className="gradient-card">
      <CardHeader>
        <CardTitle className="text-xl">Recent Workouts</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {mockWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="mb-4 flex items-center space-x-4 rounded-lg bg-secondary/50 p-4"
            >
              <div className="rounded-full bg-primary/20 p-2">
                <Dumbbell className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{workout.name}</h4>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-3 w-3" />
                  {workout.date} • {workout.duration}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}