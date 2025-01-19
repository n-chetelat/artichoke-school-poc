import prisma from "@/lib/prisma";
import { getCurrentCourse } from "@/queries/course";

export async function getCourseHomework() {
  const course = await getCurrentCourse();

  if (!course) {
    throw new Error("No current course could be found");
  }

  const homeworks = await prisma.homework.findMany({
    where: { classId: course.id },
  });

  return homeworks;
}

export async function getHomework(id: string) {
  const course = await getCurrentCourse();

  if (!course) {
    throw new Error("No current course could be found");
  }

  const homework = await prisma.homework.findUnique({
    where: { id, classId: course.id },
  });

  if (!homework) {
    throw new Error(
      `Could not find homework ${id} associated with current course`
    );
  }

  return homework;
}
