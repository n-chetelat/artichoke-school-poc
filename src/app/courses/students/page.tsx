import StudentCard from "@/components/course/students/StudentCard";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { getCourseStudents } from "@/queries/student";

export default async function StudentsPage() {
  const students = await getCourseStudents();

  return (
    <div>
      {students.length ? (
        <>
          <TypographyH1>Students</TypographyH1>
          <ul className="grid grid-cols-3 gap-4">
            {students &&
              students.map((student) => (
                <li key={student.id}>
                  <StudentCard student={student} />
                </li>
              ))}
          </ul>
        </>
      ) : (
        <TypographyP className="text-2xl text-center mt-8">
          You have no students yet
        </TypographyP>
      )}
    </div>
  );
}
