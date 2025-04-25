import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function MiscExperience() {
  return (
    <Container id="leadership">
      <div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2>Leadership & Involvement</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={10} animateOnce={true}>
          <p><strong>Management Lead</strong>  -  Google Developers Group BPDC (Sept 2024  -  Present)<br />
            Spearheaded technical event planning and team coordination, contributing to campus-wide tech awareness and collaboration.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={20} animateOnce={true}>
          <p><strong>Professional Assistant</strong>  -  Computer Architecture, BITS Dubai (Sept 2024  -  Jan 2025)<br />
            Supported lab sessions and coursework delivery, mentoring junior students in core architectural concepts.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={30} animateOnce={true}>
          <p><strong>Event Manager</strong>  -  IEEE BPDC Chapter (Sept 2023  -  Aug 2024)<br />
            Organised and executed multi-day technical conferences, coding contests, and community outreach programmes.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={40} animateOnce={true}>
          <p><strong>Software Team Member</strong>  -  IFOR Drone Research (Sept 2023  -  Aug 2024)<br />
            Collaborated in autonomous drone navigation and control system development as part of an interdisciplinary R&D group.
          </p>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
