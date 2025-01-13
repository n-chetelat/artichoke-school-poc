import prisma from "@/lib/prisma";
import { getCurrentCourse } from "@/queries/course";

export async function getCourseHomework() {
  const course = await getCurrentCourse();

  if (!course) {
    throw new Error(
      "There was a problem while retrieving current course's homework"
    );
  }

  const homework = await prisma.homework.findMany({
    where: { classId: course.id },
  });

  return homework;
}
