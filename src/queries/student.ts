import prisma from "@/lib/prisma";
import { getCurrentCourse } from "@/queries/course";
import { clerkClient } from "@clerk/nextjs/server";

export async function getCourseStudents() {
  const course = await getCurrentCourse();

  if (!course) {
    throw new Error("No current course could be found");
  }

  const studentsIds = await prisma.classStudent.findMany({
    where: { classId: course.id },
    select: { studentId: true },
  });

  if (!studentsIds?.length) {
    throw new Error(
      "There was a problem fetching the students for the current class"
    );
  }

  const client = await clerkClient();
  const students = await client.users.getUserList({
    userId: studentsIds.map((s) => s.studentId),
  });

  return students.data;
}
