import NewHomeworkForm from "@/components/course/homework/NewHomeworkForm";
import { TypographyH1 } from "@/components/ui/typography";

export default async function HomeworkNewPage() {
  return (
    <div>
      <TypographyH1 className="lg:text-3xl">
        Create a new homework assignment
      </TypographyH1>
      <NewHomeworkForm />
    </div>
  );
}
