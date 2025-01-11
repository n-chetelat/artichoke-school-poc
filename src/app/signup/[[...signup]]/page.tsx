import { SignUp } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center py-24">
      <SignUp
        signInUrl="/login"
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
