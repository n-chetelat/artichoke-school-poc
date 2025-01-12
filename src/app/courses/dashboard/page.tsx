import { notFound } from "next/navigation";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
} from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Pencil, Pointer, BookOpenCheck } from "lucide-react";

export default async function CourseDashboardPage() {
  const { orgId } = await auth();
  const clerk = await clerkClient();
  const course = await clerk.organizations.getOrganization({
    organizationId: orgId as string,
  });
  if (!course) return notFound();
  const user = await currentUser();
  // TODO disallow people who are not in this organization, preferably in middleware

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-secondary p-4">
        <TypographyH1 className="lg:text-3xl">
          Hello, {user?.firstName}!
        </TypographyH1>
        <TypographyH2>
          Welcome to the <span className="text-primary">{course.name}</span>{" "}
          dashboard
        </TypographyH2>
      </div>
      <div>
        <TypographyH3 className="text-center mb-8">
          What do you want to do today?
        </TypographyH3>
        <ul className="grid grid-cols-2 min-w-80 w-1/3 m-auto gap-4">
          <li>
            <Button className="w-full min-h-32" asChild>
              <Link href="/courses/homework/new" className="flex flex-col">
                <Plus style={{ width: "1.5rem", height: "1.5rem" }} />
                Create new homework{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="w-full min-h-32" asChild>
              <Link href="/courses/homework" className="flex flex-col">
                <Pencil style={{ width: "1.5rem", height: "1.5rem" }} />
                Edit existing homework{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="w-full min-h-32" asChild>
              <Link href="/courses/homework/assign" className="flex flex-col">
                <Pointer style={{ width: "1.5rem", height: "1.5rem" }} />
                Assign homework{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button className="w-full min-h-32" asChild>
              <Link href="/courses/homework/grade" className="flex flex-col">
                <BookOpenCheck style={{ width: "1.5rem", height: "1.5rem" }} />
                Grade homework{" "}
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
