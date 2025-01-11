import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
        <OrganizationSwitcher />
        <UserButton />
      </SignedIn>
    </nav>
  );
}
