import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import OrganizationSwitcher from "@/components/navbar/OrganizationSwitcher";
import { Button } from "@/components/ui/button";

export default async function Navbar() {
  return (
    <nav className="bg-primary flex flex-row p-2 justify-end">
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
    </nav>
  );
}
