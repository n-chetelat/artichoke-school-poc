import { clerkClient } from "@clerk/nextjs/server";
import { getCurrentCourse } from "@/queries/course";

export async function getCourseStaffInvitations() {
  const course = await getCurrentCourse();
  if (!course) {
    throw new Error("No current course could be found");
  }
  const clerk = await clerkClient();
  const invitations = await clerk.organizations.getOrganizationInvitationList({
    organizationId: course.id,
  });

  if (!invitations) {
    throw new Error("There was an error while retrieving invitations");
  }

  return invitations.data;
}
