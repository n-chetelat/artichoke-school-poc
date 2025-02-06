import BackButton from "@/components/common/BackButton";
import StaffInvitationForm from "@/components/course/staff/StaffInvitationForm";
import StaffInvitationList from "@/components/course/staff/StaffInvitationList";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import { getCourseStaffInvitations } from "@/queries/invitation";

export default async function CourseStaffPage() {
  const invitations = await getCourseStaffInvitations();
  return (
    <div className="container mx-auto">
      <BackButton toPath="/courses/homework" />

      <TypographyH1>Invite a new staff member</TypographyH1>
      <div className="flex flex-col gap-8">
        <StaffInvitationForm />
        {invitations.length ? (
          <>
            <TypographyH2>Previous invitations</TypographyH2>
            <StaffInvitationList invitationsStr={JSON.stringify(invitations)} />
          </>
        ) : null}
      </div>
    </div>
  );
}
