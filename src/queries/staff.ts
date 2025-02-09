import { clerkClient } from "@clerk/nextjs/server";
import { getCurrentCourse } from "@/queries/course";
import { unstable_cache } from "next/cache";

export async function getCourseStaff() {
  const course = await getCurrentCourse();
  if (!course) {
    throw new Error("No current course could be found");
  }
  const clerk = await clerkClient();
  const staff = await unstable_cache(
    async () => {
      return clerk.organizations.getOrganizationMembershipList({
        organizationId: course.id,
      });
    },
    ["staff"],
    { tags: ["staff"] }
  )();

  if (!staff) {
    throw new Error("There was an error while retrieving staff members");
  }

  return staff.data;
}

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
