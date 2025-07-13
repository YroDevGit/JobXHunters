
import Hero from "@/components/ui/user/Hero";
import JobSearch from "@/components/ui/user/JobSearch";

export default function Home() {
  return (
    <>
      <JobSearch/>
      <main className="flex-grow flex items-center justify-center px-6">
          <Hero />
      </main>
    </>
  );
}
