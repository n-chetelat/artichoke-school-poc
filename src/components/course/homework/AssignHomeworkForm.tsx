"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Homework, User } from "@/lib/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useMemo } from "react";
import { assignHomework } from "@/actions/homework";

const AssignHomeworkFormSchema = z.object({
  homeworkId: z.string(),
  studentId: z.string(),
});

type AssignHomeworkFormProps = {
  homeworkData: string;
  studentData: string;
};

export default function AssignHomeworkForm({
  homeworkData,
  studentData,
}: AssignHomeworkFormProps) {
  const form = useForm<z.infer<typeof AssignHomeworkFormSchema>>({
    resolver: zodResolver(AssignHomeworkFormSchema),
    defaultValues: {
      homeworkId: "",
      studentId: "",
    },
  });

  const homeworks = useMemo(() => {
    return JSON.parse(homeworkData);
  }, [homeworkData]);

  const students = useMemo(() => {
    return JSON.parse(studentData);
  }, [studentData]);

  async function onSubmit(data: z.infer<typeof AssignHomeworkFormSchema>) {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }
    await assignHomework(undefined, formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <FormField
              control={form.control}
              name="homeworkId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Select a homework</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {homeworks.map((hw: Homework) => (
                        <SelectItem key={hw.id} value={hw.id}>
                          {hw.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <FormField
              control={form.control}
              name="studentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Select a student</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {students.map((student: User) => (
                        <SelectItem key={student.id} value={student.id}>
                          {`${student.firstName} ${student.lastName}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button className="w-64 m-auto">Assign</Button>
      </form>
    </Form>
  );
}
