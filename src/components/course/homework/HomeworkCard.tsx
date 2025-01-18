import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Homework } from "@/lib/types";
import { Pencil } from "lucide-react";
import Link from "next/link";

type HomeworkCardProps = {
  homework: Homework;
};

export default function HomeworkCard({ homework }: HomeworkCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{homework.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-1">{homework.content}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/courses/homework/${homework.id}`}>
            Edit <Pencil />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
