import { notFound } from "next/navigation";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";

export default async function CourseDashboardPage() {
  const { orgId } = await auth();
  const clerk = await clerkClient();
  const course = await clerk.organizations.getOrganization({
    organizationId: orgId as string,
  });
  if (!course) return notFound();
  const user = await currentUser();
  // TODO disallow people who are not in this organization

  return (
    <div>
      <TypographyH1 className="lg:text-3xl">
        Hello, {user?.firstName}!
      </TypographyH1>
      <TypographyH2>
        Welcome to the <span className="text-primary">{course.name}</span>{" "}
        dashboard
      </TypographyH2>
    </div>
  );
}
