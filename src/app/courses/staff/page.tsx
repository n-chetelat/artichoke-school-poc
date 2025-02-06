import BackButton from "@/components/common/BackButton";
import StaffInvitationForm from "@/components/course/staff/StaffInvitationForm";
import { TypographyH1 } from "@/components/ui/typography";

export default async function CourseStaffPage() {
  return (
    <div className="container mx-auto">
      <BackButton toPath="/courses/homework" />

      <TypographyH1>Invite a new staff member</TypographyH1>
      <StaffInvitationForm />
    </div>
  );
}
