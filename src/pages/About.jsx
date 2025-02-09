import { team } from "../assets1"
import { Experience, Offer, Team, TitleCmp, Tools } from "../components1"

const About = () => {
  return (
    <div>
      <TitleCmp titleAr="من نحن " titleEn="Who We Are"/>
      <Team />
      <Experience />
      <Tools />
      <Offer />

    </div>
  )
}

export default About