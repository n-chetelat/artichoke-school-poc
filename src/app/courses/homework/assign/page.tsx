import AssignHomeworkForm from "@/components/course/homework/AssignHomeworkForm";
import { getCourseHomework } from "@/queries/homework";
import { getCourseStudents } from "@/queries/student";

export default async function HomeworkAssignPage() {
  const students = await getCourseStudents();
  const homeworks = await getCourseHomework();

  return (
    <div className="flex flex-col gap-4 mt-8">
      <AssignHomeworkForm
        homeworkData={JSON.stringify(homeworks)}
        studentData={JSON.stringify(students)}
      />
    </div>
  );
}
