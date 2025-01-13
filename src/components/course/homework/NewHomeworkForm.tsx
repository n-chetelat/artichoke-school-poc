"use client";

import { useActionState } from "react";
import { createHomework } from "@/actions/homework";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewHomeworkForm() {
  const [state, action, pending] = useActionState(createHomework, undefined);
  return (
    <div>
      <form action={action}>
        <Label htmlFor="new-homework-title">Title</Label>
        <Input id="new-homework-title" name="title" />
        <Label htmlFor="new-homework-content">Content</Label>
        <Textarea id="new-homework-content" name="content" />
        <Button disabled={pending} aria-disabled={pending}>
          Submit
        </Button>
      </form>
    </div>
  );
}
