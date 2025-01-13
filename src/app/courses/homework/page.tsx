import { getCourseHomework } from "@/queries/homework";

export default async function HomeworkPage() {
  const homework = await getCourseHomework();
  return (
    <div>
      <ul>
        {!!homework.length &&
          homework.map((hw) => <li key={hw.id}>{hw.title}</li>)}
      </ul>
    </div>
  );
}
