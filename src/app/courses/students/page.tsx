import { getCourseStudents } from "@/queries/student";

export default async function StudentsPage() {
  const students = await getCourseStudents();

  return (
    <div>
      <ul>
        {students &&
          students.map((student) => (
            <li key={student.id}>{student.fullName}</li>
          ))}
      </ul>
    </div>
  );
}
