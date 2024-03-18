import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <p className="flex flex-col gap-y-4">This is a screen for authenticated users only.</p>
    <div>
      <UserButton />
    </div>
    </>
  );
}
 