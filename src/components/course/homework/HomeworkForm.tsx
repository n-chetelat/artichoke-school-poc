"use client";

import { useActionState, useState } from "react";
import { createHomework, updateHomework } from "@/actions/homework";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Homework } from "@/lib/types";
import { usePermissions } from "@/hooks/usePermissions";

type HomeworkFormProps = {
  homework?: Homework;
};

export default function HomeworkForm({ homework }: HomeworkFormProps) {
  const [title, setTitle] = useState(homework?.title || "");
  const [content, setContent] = useState(homework?.content || "");
  let homeworkAction = createHomework;
  if (homework) {
    homeworkAction = updateHomework;
  }
  const [state, action, pending] = useActionState(homeworkAction, undefined);
  const { canCreate, canEdit } = usePermissions();
  let canSubmit: boolean;
  if (homework) {
    canSubmit = canEdit;
  } else {
    canSubmit = canCreate;
  }
  return (
    <div>
      <form action={action} className="flex flex-col gap-4">
        <Label htmlFor="homework-form-title">Title</Label>
        <Input
          id="homework-form-title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="homework-form-content">Content</Label>
        <Textarea
          id="homework-form-content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {!!homework && <input type="hidden" name="id" value={homework.id} />}

        <Button
          disabled={!canSubmit || pending}
          aria-disabled={!canSubmit || pending}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
