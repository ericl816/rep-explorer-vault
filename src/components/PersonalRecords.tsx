import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const records = [
  { name: "Bench Press", value: "185 lbs" },
  { name: "Squat", value: "275 lbs" },
  { name: "Deadlift", value: "315 lbs" },
];

export function PersonalRecords() {
  return (
    <Card className="gradient-card">
      <CardHeader>
        <CardTitle className="text-xl">Personal Records</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {records.map((record) => (
            <div
              key={record.name}
              className="flex items-center justify-between rounded-lg bg-secondary/50 p-4"
            >
              <div className="flex items-center space-x-3">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span>{record.name}</span>
              </div>
              <span className="font-bold">{record.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}