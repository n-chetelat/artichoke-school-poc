"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrganizationInvitation as Invitation } from "@/lib/types";
import { formatDate, capitalize } from "@/lib/utils";

type StaffInvitationListProps = {
  invitationsStr: string;
};

export default function StaffInvitationList({
  invitationsStr,
}: StaffInvitationListProps) {
  const invitations: Invitation[] = JSON.parse(invitationsStr);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Sent on</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invitations.map((invitation: Invitation) => (
          <TableRow key={invitation.id}>
            <TableCell>{invitation.emailAddress}</TableCell>
            <TableCell>{capitalize(invitation.role.split(":")[1])}</TableCell>
            <TableCell>{formatDate(new Date(invitation.createdAt))}</TableCell>
            <TableCell>{capitalize(invitation.status as string)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
