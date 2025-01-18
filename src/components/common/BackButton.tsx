import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BackButtonProps = {
  toPath: string;
};

export default function BackButton({ toPath }: BackButtonProps) {
  return (
    <Button variant="link" asChild className="p-0">
      <Link className="flex flex-row items-center" href={toPath}>
        <ArrowLeft />
        Back
      </Link>
    </Button>
  );
}
