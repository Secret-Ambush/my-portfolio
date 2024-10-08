import { Container } from "./styles";
import RiddhiGoswami from "../../assets/RiddhiGoswami.jpeg";
import ScrollAnimation from "react-animate-on-scroll"; // Make sure the package is installed

export function About() {
  return (
    <Container id="about">
      <div>
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={10}>
          <p>
            Hi there! My name is Riddhi, a 4th year Computer Science student at BPDC. 
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={20}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I am a Computer Science Engineering graduate with a passion for harnessing the power of Data Science, AI, and IoT to solve real-world problems. With a strong academic foundation, including a CGPA of 9.974 and recognition through the UAE Golden Visa for Distinguished Students, I thrive in both academic and professional environments. My expertise spans machine learning, data analysis, and software development, where I’ve led individual and collaborative projects to develop innovative solutions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={20}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            With a keen eye for problem-solving and a drive to simplify complex concepts, I've led workshops and served as a leader in Google Developer Student Club and IEEE. I enjoy pushing boundaries to deliver impactful results.
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={20}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I am always excited about new challenges and ready to contribute my expertise to innovative projects.
          </p>
        </ScrollAnimation>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={100}>
          <img src={RiddhiGoswami} alt="Riddhi Goswami" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
