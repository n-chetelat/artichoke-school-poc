"use server";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { getCurrentCourse } from "@/queries/course";

export async function removeStaffMember(prevState: any, formData: FormData) {
  const course = await getCurrentCourse();
  if (!course) {
    return {
      error: "No current organization could be found.",
    };
  }

  const userId = formData.get("userId") as string;
  const clerk = await clerkClient();
  const response = await clerk.organizations.deleteOrganizationMembership({
    organizationId: course.id,
    userId,
  });

  if (!response) {
    return {
      error: `There was an error while removing organization member ${userId} from "${course.name}"`,
    };
  }

  return { error: null };
}

export async function inviteCourseStaff(prevState: any, formData: FormData) {
  const inviter = await currentUser();
  if (!inviter) {
    return {
      error: "No user is currently logged in.",
    };
  }
  const course = await getCurrentCourse();
  if (!course) {
    return {
      error: "No current organization could be found.",
    };
  }

  const emailAddress = formData.get("emailAddress") as string;
  const role = formData.get("role") as string;

  const clerk = await clerkClient();
  const response = await clerk.organizations.createOrganizationInvitation({
    organizationId: course.id,
    inviterUserId: inviter.id,
    emailAddress,
    role,
  });

  if (!response) {
    return {
      error: `There was an error while creating the invitation for ${emailAddress}`,
    };
  }

  return { error: null };
}
