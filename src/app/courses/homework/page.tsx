import BackButton from "@/components/common/BackButton";
import HomeworkCard from "@/components/course/homework/HomeworkCard";
import { getCourseHomework } from "@/queries/homework";

export default async function HomeworkListPage() {
  const homeworks = await getCourseHomework();
  return (
    <>
      <BackButton toPath="/courses/dashboard" />
      <ul className="grid grid-cols-2 gap-4">
        {!!homeworks.length &&
          homeworks.map((hw) => (
            <li key={hw.id}>
              <HomeworkCard homework={hw} />
            </li>
          ))}
      </ul>
    </>
  );
}
