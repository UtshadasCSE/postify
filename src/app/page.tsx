import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-3 flex gap-2">
      <SignedOut>
        <SignInButton mode="modal">
          <Button> Hello Signin Now</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button variant={"outline"}> Hello Signin Now</Button>

      <ModeToggle />
    </div>
  );
}
