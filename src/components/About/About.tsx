import { Container } from "./styles";
import RiddhiGoswami from "../../assets/RiddhiGoswami.jpeg";
import ScrollAnimation from "react-animate-on-scroll"; // Make sure the package is installed

export function About() {
  return (
    <Container id="about">
      <div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2>About me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={10} animateOnce={true}>
          <p>
          👋 Hi, I'm Riddhi Goswami!
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={20}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          animateOnce={true}
        >
          <p>
          I'm a Computer Science student and aspiring software engineer with a passion for building purposeful, intelligent systems. Currently interning at Esri in the Oriented Imagery division of ArcGIS Pro, I've been fortunate to work on cutting-edge geospatial tools - where every day has been a chance to push boundaries, solve real-world problems, and grow as a developer.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={20}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          animateOnce={true}>
          <p>
          My journey is defined by curiosity, ownership, and an eagerness to learn. With a CGPA of 9.98 and the UAE Golden Visa for academic excellence, I combine strong fundamentals with practical experience across ML, AI, IoT, and spatial computing.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={20}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          animateOnce={true}>
          <p>
          This is just the beginning. I'm excited to keep learning, building, and contributing!
          </p>
        </ScrollAnimation>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={100}  animateOnce={true}>
          <img src={RiddhiGoswami} alt="Riddhi Goswami" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
