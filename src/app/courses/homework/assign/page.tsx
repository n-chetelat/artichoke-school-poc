import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCourseHomework } from "@/queries/homework";
import { getCourseStudents } from "@/queries/student";

export default async function HomeworkAssignPage() {
  const students = await getCourseStudents();
  const homeworks = await getCourseHomework();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <Label className="text-lg">Select a homework</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {homeworks.map((hw) => (
                <SelectItem key={hw.id} value={hw.id}>
                  {hw.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <Label className="text-lg">Select a student</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {students.map((student) => (
                <SelectItem key={student.id} value={student.id}>
                  {student.fullName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-64 m-auto">Assign</Button>
    </div>
  );
}
