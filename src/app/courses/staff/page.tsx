import BackButton from "@/components/common/BackButton";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function CourseStaffPage() {
  return (
    <div className="container mx-auto">
      <BackButton toPath="/courses/homework" />
      <div className="flex flex-row justify-between items-center">
        <TypographyH1>Manage staff</TypographyH1>
        <Button asChild>
          <Link href="/courses/staff/invitations">
            <Plus />
            Invite new staff member
          </Link>
        </Button>
      </div>
    </div>
  );
}
