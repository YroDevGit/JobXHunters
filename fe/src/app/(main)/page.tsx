
import Carousel from "@/components/ui/user/Carousel";
import Hero from "@/components/ui/user/Hero";
import JobSearch from "@/components/ui/user/JobSearch";

export default function Home() {

    const cards = [
  {
    id: 1,
    title: 'International Mining Services Inc.',
    jobsCount: 10,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/015/259/493/original/business-consulting-services-logo-design-vector.jpg',
    link : "/#"
  },
  {
    id: 2,
    title: 'BL Groups of Companies',
    jobsCount: 5,
    imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-a060e2010073e5134f364b81b6e542ef_screen.jpg?ts=1694889054',
     link : "/#"
  },
  {
    id: 3,
    title: 'Washington Industrial Technology',
    jobsCount: 6,
    imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/a-logo-design%7C-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b_screen.jpg?ts=1665828706',
    link : "/#"
  },
  {
    id: 4,
    title: 'Jirayah High Tech Innov.',
    jobsCount: 3,
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg',
    link : "/#"
  },
];


  return (
    <>
      <JobSearch/>

      {/* this where the jobSearch result where display
      use if and else for this */}

      <main className="flex flex-col items-center justify-center px-6">
          <Hero />
          <Carousel cards={cards} />
      </main>
      
    </>
  );
}
