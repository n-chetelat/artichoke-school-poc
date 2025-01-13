import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getCurrentCourse() {
  try {
    const { orgId } = await auth();
    const clerk = await clerkClient();
    const course = await clerk.organizations.getOrganization({
      organizationId: orgId as string,
    });
    return course;
  } catch (error) {
    console.error("No current organization could be retrieved");
    return null;
  }
}
