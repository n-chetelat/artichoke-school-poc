"use server";

import prisma from "@/lib/prisma";
import { getCurrentCourse } from "@/queries/course";

export async function createHomework(prevState: any, formData: FormData) {
  const course = await getCurrentCourse();

  if (!course) {
    throw new Error("No current course found");
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const homework = await prisma.homework.create({
    data: {
      classId: course.id,
      title,
      content,
    },
  });

  return homework;
}
