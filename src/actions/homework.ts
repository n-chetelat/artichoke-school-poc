"use server";

import prisma from "@/lib/prisma";
import { getCurrentCourse } from "@/queries/course";
import { auth } from "@clerk/nextjs/server";

export async function createHomework(prevState: any, formData: FormData) {
  const course = await getCurrentCourse();

  if (!course) {
    throw new Error("No current course found");
  }

  const { has } = await auth();
  const canCreate = has({ permission: "org:hw:create" });

  if (!canCreate) {
    throw new Error("Current user is not allowed to create homework");
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

export async function updateHomework(prevState: any, formData: FormData) {
  const course = await getCurrentCourse();

  if (!course) {
    throw new Error("No current course found");
  }

  const { has } = await auth();
  const canUpdate = has({ permission: "org:hw:edit" });

  if (!canUpdate) {
    throw new Error("Current user is not allowed to edit homework");
  }

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const homework = await prisma.homework.update({
    where: { id, classId: course.id },
    data: {
      title,
      content,
    },
  });

  return homework;
}

export async function assignHomework(prevState: any, formData: FormData) {
  const { has } = await auth();
  const canAssign = has({ permission: "org:hw:assign" });

  if (!canAssign) {
    throw new Error("Current user is not allowed to assign homework");
  }

  const homeworkId = formData.get("homeworkId") as string;
  const studentId = formData.get("studentId") as string;

  const homeworkStudent = await prisma.homeworkStudent.create({
    data: {
      homeworkId,
      studentId,
    },
  });

  if (!homeworkStudent) return null;

  return homeworkStudent;
}
