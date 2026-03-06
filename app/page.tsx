import { Hero } from "@/components/hero"
import { TeamPhoto } from "@/components/team-photo"
import { News } from "@/components/news"
import { Results } from "@/components/results"
import { CalendarSection } from "@/components/calendar"
import { Team } from "@/components/team"

export default function Home() {
  return (
    <>
      <Hero />
      <TeamPhoto />
      <News />
      <Results />
      <CalendarSection />
      <Team />
   
    </>
  )
}
