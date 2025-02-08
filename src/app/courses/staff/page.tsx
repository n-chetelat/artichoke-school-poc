import BackButton from "@/components/common/BackButton";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getCourseStaff } from "@/queries/staff";
import StaffList from "@/components/course/staff/StaffList";

export default async function CourseStaffPage() {
  const staff = await getCourseStaff();
  return (
    <div className="container mx-auto">
      <BackButton toPath="/courses/dashboard" />
      <div className="flex flex-row justify-between items-center">
        <TypographyH1>Manage staff</TypographyH1>
        <Button asChild>
          <Link href="/courses/staff/invitations">
            <Plus />
            Invite new staff member
          </Link>
        </Button>
      </div>
      <StaffList staffStr={JSON.stringify(staff)} />
    </div>
  );
}
