import { notFound } from "next/navigation";

export default async function ClassPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const classId = (await params).classId;

  if (!classId) return notFound();

  return <div>{classId}</div>;
}
