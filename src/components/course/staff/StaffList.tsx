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

('[{"id":"orgmem_2se6xtc6uTHiJtTmQONm4rxBV2h","role":"org:manager","permissions":["org:sys_memberships:manage","org:sys_memberships:read","org:sys_profile:manage","org:hw:assign","org:hw:edit"],"publicMetadata":{},"privateMetadata":{},"createdAt":1738803942648,"updatedAt":1738803942648,"organization":{"id":"org_2rSj2tUezA22vkQ5mWaTtkYZDBl","name":"Chilipeppers 101","slug":"chilipeppers-101","imageUrl":"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJyVkdiaUZwdDZ1MWlZYnpkZ3NTd3JST2IydCJ9","hasImage":true,"createdAt":1736559166141,"updatedAt":1738973593297,"publicMetadata":{},"privateMetadata":{},"maxAllowedMemberships":5,"adminDeleteEnabled":false,"createdBy":"user_2rHCyoK06QJ1Bi4kpT1U7vnScWe"},"publicUserData":{"identifier":"dagmar.chetelat@gmail.com","firstName":"Dagmar","lastName":"Chételat","imageUrl":"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yc2U2eHFhOEtXN3FjSlFSQTZwWkFvZWpMVXAifQ","hasImage":true,"userId":"user_2se6xpOuO3yAIPXEIYRVgXjeeSh"}},{"id":"orgmem_2se0OtAG3J4Vt83Hw1YXmRkelfR","role":"org:admin","permissions":["org:sys_profile:manage","org:sys_profile:delete","org:sys_memberships:read","org:sys_memberships:manage","org:sys_domains:read","org:sys_domains:manage","org:hw:assign","org:hw:edit","org:hw:create"],"publicMetadata":{},"privateMetadata":{},"createdAt":1738800703940,"updatedAt":1738800703940,"organization":{"id":"org_2rSj2tUezA22vkQ5mWaTtkYZDBl","name":"Chilipeppers 101","slug":"chilipeppers-101","imageUrl":"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJyVkdiaUZwdDZ1MWlZYnpkZ3NTd3JST2IydCJ9","hasImage":true,"createdAt":1736559166141,"updatedAt":1738973593297,"publicMetadata":{},"privateMetadata":{},"maxAllowedMemberships":5,"adminDeleteEnabled":false,"createdBy":"user_2rHCyoK06QJ1Bi4kpT1U7vnScWe"},"publicUserData":{"identifier":"valentinshchekin@gmail.com","firstName":"Valentin","lastName":"Shchekin","imageUrl":"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yc2UwT3UwclRPMTlYZWxEMlBaTGdzT2Q1TzUifQ","hasImage":true,"userId":"user_2se0OtJWSg8zfwtQMYZkrPlXbJN"}},{"id":"orgmem_2rSj30BSkoYZZUUsxfwqxttDEOw","role":"org:admin","permissions":["org:sys_profile:manage","org:sys_profile:delete","org:sys_memberships:read","org:sys_memberships:manage","org:sys_domains:read","org:sys_domains:manage","org:hw:assign","org:hw:edit","org:hw:create"],"publicMetadata":{},"privateMetadata":{},"createdAt":1736559166161,"updatedAt":1736559166161,"organization":{"id":"org_2rSj2tUezA22vkQ5mWaTtkYZDBl","name":"Chilipeppers 101","slug":"chilipeppers-101","imageUrl":"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJyVkdiaUZwdDZ1MWlZYnpkZ3NTd3JST2IydCJ9","hasImage":true,"createdAt":1736559166141,"updatedAt":1738973593297,"publicMetadata":{},"privateMetadata":{},"maxAllowedMemberships":5,"adminDeleteEnabled":false,"createdBy":"user_2rHCyoK06QJ1Bi4kpT1U7vnScWe"},"publicUserData":{"identifier":"nataliachetelat@gmail.com","firstName":"Natalia","lastName":"Chételat","imageUrl":"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yckhDeXBYQkRKb1hTRmVGMzRDUEpXdW9qY2UifQ","hasImage":true,"userId":"user_2rHCyoK06QJ1Bi4kpT1U7vnScWe"}}]');
