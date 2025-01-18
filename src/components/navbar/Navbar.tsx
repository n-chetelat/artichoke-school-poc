import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import OrganizationSwitcher from "@/components/navbar/OrganizationSwitcher";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="bg-primary flex flex-row p-2 justify-between">
      <Link href="/">
        <div className="flex flex-row items-center">
          <Image
            src="/artichoke.png"
            height={24}
            width={24}
            className="object-cover"
            alt="artichoke logo"
          />
          <p className="font-[family-name:var(--font-kanit-sans)] text-lg">
            Artichoke School
          </p>
        </div>
      </Link>
      <div>
        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row items-start gap-4">
            <OrganizationSwitcher />
            <Button asChild variant="secondary" className="h-8">
              <SignOutButton />
            </Button>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
