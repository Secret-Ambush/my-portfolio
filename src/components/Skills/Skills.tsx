import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Skills() {
  return (
    <Container id="skills">
      <div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2>Technical Skills</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={10} animateOnce={true}>
          <p><strong>Languages:</strong> C/C++, C#, Python, Java, HTML/CSS</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={20} animateOnce={true}>
          <p><strong>Frameworks & Libraries:</strong> .NET 8.0, React, Django, Flask, PyShiny, Dash, Streamlit</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={30} animateOnce={true}>
          <p><strong>Data & Databases:</strong> Pandas, Polars, MySQL, SnowflakeSQL, Excel</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={40} animateOnce={true}>
          <p><strong>AI/ML Tooling:</strong> Scikit-learn, OpenCV, TensorFlow, Keras, Spacy, NLTK, LLMs</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
          <p><strong>Dev Tools:</strong> Git, Azure DevOps, Power BI, Arduino, ROS/ROS2</p>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
