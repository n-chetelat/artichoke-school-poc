import BackButton from "@/components/common/BackButton";
import HomeworkForm from "@/components/course/homework/HomeworkForm";
import { TypographyH1 } from "@/components/ui/typography";
import { getHomework } from "@/queries/homework";

export default async function HomeworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const homework = await getHomework(id);
  return (
    <>
      <BackButton toPath="/courses/homework" />
      <TypographyH1 className="lg:text-3xl">Edit homework</TypographyH1>
      <HomeworkForm homework={homework} />
    </>
  );
}
