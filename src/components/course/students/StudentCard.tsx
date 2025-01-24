import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/lib/types";

type StudentCardProps = {
  student: User;
};

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{student.fullName}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-4">
        <Button>Assign Homework</Button>
        <Button>Grade Homework</Button>
      </CardContent>
    </Card>
  );
}
