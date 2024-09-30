import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Secret-Ambush/Identifying-Anchor-Residues-in-TFBS" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Anchor Residue Identification</h3>
              <p> This project focuses on analyzing human transcription factors GATA4 and ETV5 by collecting data from UniProbe, preprocessing it, and using the MEME Suite to identify key motifs through Probability Weight Matrices (PWM) and consensus approaches. A novel alignment algorithm is then applied to align sequences with the top seed motif, helping identify anchor residues crucial for gene regulation. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Computational Biology</li> <li>Python</li> <li>MEME Suite</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Secret-Ambush/Voice-Controlled-RosbotXL" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Voice Controlled ROSbot XL</h3>
              <p>
              Novel voice-controlled system for navigating ROSbot XL, using NLP techniques integrated with ROS and Python-based speech recognition frameworks. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ROS2</li>
                <li>GPT-4o</li>
                <li>Whisper API</li>
                <li>Elevenlabs TTS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Secret-Ambush/Timetable-generator" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CSP problem based Timetable Generator</h3>
              <p>Exclusively for BITS students, this application offers a dynamic and interactive tool to create personalized timetables based on your discipline and year. Helps in planning semester coursework efficiently with section constraints in mind.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Constraints</li>
                <li>Streamlit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Secret-Ambush/DelayPredictor" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Flight Delay Predictor</h3>
              <p>This project focuses on implementing machine learning models to optimize flight delay prediction, enhancing customer satisfaction. By leveraging these models, the aviation industry can increase revenue and improve the overall passenger experience.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://riddhi-goswami.shinyapps.io/etabsvisualisation/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ETABS workbook visualiser</h3>
              <p>An interactive dashboard for complex visualizations based on data derived from an Excel workbook produced by ETABS software. The dashboard provided section-wise and story-wise mass contributions across different material types and featured tools for workbook comparison, graph merging, and scale normalization to handle disparities between workbooks.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PyShiny</li>
                <li>Plotly</li>
                <li>Matplotlib</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}