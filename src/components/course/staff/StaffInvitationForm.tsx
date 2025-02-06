"use client";
import { useActionState } from "react";
import { inviteCourseStaff } from "@/actions/invitations";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StaffInvitationForm() {
  const [state, action] = useActionState(inviteCourseStaff, undefined);

  return (
    <form action={action} className="flex flex-col gap-4">
      {state?.error && (
        <p className="text-destructive">
          There was a problem while sending this invitation
        </p>
      )}
      <Label htmlFor="emailAddress">Email</Label>
      <Input id="emailAddress" name="emailAddress" type="text" />
      <Label htmlFor="role">Role</Label>
      <select id="role" name="role" className="p-2 rounded-md border">
        <option value="org:admin">Admin</option>
        <option value="org:manager">Manager</option>
      </select>
      <Button className="min-w-60 w-1/4 mx-auto">Send</Button>
    </form>
  );
}
