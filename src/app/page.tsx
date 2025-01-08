import { TypographyH1 } from "@/components/ui/typography";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <TypographyH1 className="font-[family-name:var(--font-kanit-sans)]">
        Artichoke School
      </TypographyH1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
