import BackButton from "@/components/common/BackButton";
import AssignHomeworkForm from "@/components/course/homework/AssignHomeworkForm";
import { getCourseHomework } from "@/queries/homework";
import { getCourseStudents } from "@/queries/student";

export default async function HomeworkAssignPage() {
  const students = await getCourseStudents();
  const homeworks = await getCourseHomework();

  return (
    <>
      <BackButton toPath="/courses/dashboard" />
      <AssignHomeworkForm
        homeworkData={JSON.stringify(homeworks)}
        studentData={JSON.stringify(students)}
      />
    </>
  );
}
