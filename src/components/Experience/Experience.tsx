import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2>Experience</h2>
        </ScrollAnimation>

        {/* Esri */}
        <ScrollAnimation animateIn="fadeInLeft" delay={10} animateOnce={true}>
          <h3><strong>Esri</strong> — Software Developer Intern <span>(Jan 2025 -  Present)</span></h3>
          <ul>
            <li>Working in the Oriented Imagery division of ArcGIS Pro, debugging deep UI-event issues and Geoprocessing tool crashes.</li>
            <li>Building and enhancing new and existing features which will be part of the next ArcGIS Pro release</li>
          </ul>
        </ScrollAnimation>
        {/* Jacobs */}
        <ScrollAnimation animateIn="fadeInLeft" delay={20} animateOnce={true}>
          <h3><strong>Jacobs</strong> — Software Developer (Structure Team) <span>(Jun 2024 -  Aug 2024)</span></h3>
          <ul>
            <li>Built desktop tools using .NET 8.0 and WPF; integrated PyShiny for structural design automation.</li>
            <li>Applied NLP (BERT, fuzzy matching) to enforce consistent enterprise file naming conventions.</li>
            <li>Followed Agile delivery through Azure DevOps and implemented clean code principles.</li>
          </ul>
        </ScrollAnimation>

        {/* Emirates */}
        <ScrollAnimation animateIn="fadeInLeft" delay={30} animateOnce={true}>
          <h3><strong>Emirates Group HQ</strong> — Revenue Optimisation Intern <span>(Jun 2023 -  Aug 2023)</span></h3>
          <ul>
            <li>Built ML models to predict flight sell-out dates (MAE &lt; 2 days) using more than 500M records.</li>
            <li>Optimised big data pipelines and developed dashboards using Plotly, Dash, and Streamlit.</li>
            <li>Used Snowflake for fast analytics and distributed data querying across the airline network.</li>
          </ul>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
