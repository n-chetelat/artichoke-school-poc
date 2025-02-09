"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrganizationMembership } from "@/lib/types";
import { capitalize } from "@/lib/utils";
import { removeStaffMember } from "@/actions/staff";

type StaffListPrompt = {
  staffStr: string;
};

export default function StaffList({ staffStr }: StaffListPrompt) {
  const [state, removeAction] = useActionState(removeStaffMember, undefined);
  const staff: OrganizationMembership[] = JSON.parse(staffStr);

  function getFullName(member: OrganizationMembership) {
    if (!member.publicMetadata) return "(No name)";
    return `${member.publicUserData?.firstName} ${member.publicUserData?.lastName}`;
  }

  function getRole(member: OrganizationMembership) {
    return capitalize(member.role.split(":")[1]);
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {staff.map((member: OrganizationMembership) => (
          <TableRow key={member.id}>
            <TableCell>{getFullName(member)}</TableCell>
            <TableCell>{`${member.publicUserData?.identifier}`}</TableCell>
            <TableCell>{getRole(member)}</TableCell>
            <TableCell>
              <form action={removeAction}>
                <input
                  type="hidden"
                  name="userId"
                  value={member.publicUserData?.userId}
                />
                <Button variant="destructive">Remove</Button>
              </form>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
