import BackButton from "@/components/common/BackButton";
import HomeworkForm from "@/components/course/homework/HomeworkForm";
import { TypographyH1 } from "@/components/ui/typography";

export default async function HomeworkNewPage() {
  return (
    <>
      <BackButton toPath="/courses/dashboard" />
      <TypographyH1 className="lg:text-3xl">
        Create a new homework assignment
      </TypographyH1>
      <HomeworkForm />
    </>
  );
}
