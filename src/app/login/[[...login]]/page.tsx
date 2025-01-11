import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center py-24">
      <SignIn
        signUpUrl="/signup"
        appearance={{
          variables: {
            colorPrimary: "hsl(89 59% 38%)",
            borderRadius: "0",
          },
        }}
      />
    </div>
  );
}
