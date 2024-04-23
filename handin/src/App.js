import React from 'react';
import AnimatedGradient from './components/AnimatedGradient';
import './App.css';

function App() {
  return (
    <div className="App">
      <AnimatedGradient>
        <div className="transbox-with-padding">
          <div className="text-flow">
            <h1>Iterative Design</h1>
          </div>

          <section className="assignment-part">
            <h2>What is Iterative Design?</h2>
            <p>
              Iterative design is the process of designing a prototype from start to finish, including critique and iteration based on feedback. The client we worked with is <a href="https://www.partiful.com">Partiful!</a>
              {/* Explain More */}
            </p>
            <img src="./images/partiful.gif" alt="Partiful GIF" />
            <p>Partiful is a new events platform and party RSVP website. It offers tools to create, customize, and share event invitations, allowing hosts to manage RSVPS, track guest lists, and communicate with attendees without having to keep someone's number. With a user-friendly interface, Partiful aims to make organizing parties and events more straightforward and enjoyable.</p>
          </section>

          <section className="assignment-part">
            <h2>Problem Definition</h2>
            <p>
              The clients at Partiful tasked us with redesigning their homepage for a more intuitive design to attract more users and improve navigation.
            </p>
            {/* Additional content for problem definition */}
            {/* Explain understanding of the problem and talk about how we thought about the sketches going into it/inspo from other companies */}
            {/* Include Sketch Images linked in images file*/}
          </section>

          <section className="assignment-part" style={{ textAlign: 'center' }}>
            <h2>First Iteration Wireframing</h2>
            <p>
              Based on the initial sketches, we created a first wireframe iteration. Shown below is our first Lo-Fi iteration.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <iframe
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D41-1374%26viewport%3D345%252C928%252C0.05%26t%3D3NB3n3E9nnTqRzCL-1%26scaling%3Dcontain%26starting-point-node-id%3D41%253A1374%26show-proto-sidebar%3D1%26mode%3Ddesign"
                  allowFullScreen
                />
              </div>
              <p>
              To get feedback on our design, we created a Loom video to explain our understanding of the problem, walkthrough of our design choices and though process, and next steps/questions. The video was shared with the Partiful team for review as well as fellow peers for feedback.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <iframe
                src="https://www.loom.com/embed/50024ee2a4b545e3ac957c9922bcc5ce?sid=8544a987-f57d-4110-95fd-06db076f35a3"
                frameBorder="0"
                allowFullScreen
                title="Loom Video - First Iteration"
                style={{ width: '570px', height: '450px' }}
              />
            </div>
            <p>

            </p>
          </section>

          <section className="assignment-part">
            <h2>Second Iteration Wireframing</h2>
            <p>
              Based on the feedback, we refined our wireframes for the second iteration.
              {/* Embed figma for second iteration */}
              {/* Explain suggestions and why they were implemented */}
            </p>
          </section>

          <section className="assignment-part">
            <h2>Hi-Fi Prototyping</h2>
            <p>
              We created high-fidelity prototypes for final review. Below is the embedded Figma design.
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <iframe
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '570px', height: '450px' }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8QRNMO1ghxuZLzQT6Ah7s%2FPartiful%3Fpage-id%3D23%253A50%26type%3Ddesign%26node-id%3D189-3966%26viewport%3D-2239%252C249%252C0.6%26t%3DHDiGS1K7rwi0hczr-1%26scaling%3Dscale-down%26starting-point-node-id%3D189%253A3966%26show-proto-sidebar%3D1%26mode%3Ddesign"
                  allowFullScreen
                />
              </div>
              {/* Explain the design and Visual Style Guide */}
            </p>
          </section>

          <section className="assignment-part">
            <h2>Founder Feedback</h2>
            <p>
              After completing our Hi-Fi design, we sent a Loom video of our design and got to meet with the product designers of Partiful as well to show what we produced based on the feedback and multiple iterations that we thought of. 
              The following Loom is a synopsis of the information we provided to the designers during our meeting with them.
        
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <iframe
                  src="https://www.loom.com/embed/048eeedfe7a749bda9f95fb96daf6d71?sid=c842611d-594e-4643-ab60-2311e6a7c8f8"
                  frameBorder="0"
                  allowFullScreen
                  title="Loom Video - HiFi"
                  style={{ width: '570px', height: '450px' }}
                />
              </div>

              The feedback we received from the Partiful team was very positive. They liked the design we created and thought it was a significant improvement over their current homepage. They also provided us with some suggestions for further improvement, which we will incorporate into our final design.
              <br></br>
              <br></br>
              Here are some of the key points from the feedback we received:
              <ul>
                <li>They liked the Apple Wallet style of viewing the events.</li>
                <li>All of the points of feedback and criteria to hit were answered in the Hi-Fi.</li>
                <li>Interactions should be generalized where a swiping motion should signify only one of reorganization or stating "Going"</li>
                <li>The Apple Wallet should also have an interaction to open up to see all the events at once instead of it being stacked which will help accesibility.</li>
                <li>In the trends tab, the content should be geared more towards getting inspiration to help hosts.</li>
                <li>In the friends tab, more of an activity page seeing people going to parties isntead of just seeing what people there are</li>
                <li>They loved the polaroid picture UI in the friends tab as well as the highlights section.</li>
              </ul>
            </p>
            <p>All the feedback was really helpful in identifying which direction to take the design and help thorough out the next steps in making this a fully thought out design.</p>
          </section>

          <section className="assignment-part">
            <h2>Conclusions</h2>
            <p>
              Redesigning the Partiful homepage was a challenging yet rewarding experience. We learned the importance of iterative design and how it can help us create a better product. We also learned how to work with a client and incorporate their feedback into our designs. Overall, we are proud of the final design we created and hope that it will help Partiful attract more users and improve their platform.
              <br></br>
              <br></br>
              We want to give <b>many thanks</b> to the Partiful team for giving us the opportunity to work with them and for providing us with valuable feedback throughout the design process.
            </p>
          </section>
        </div>
      </AnimatedGradient>
    </div>
  );
}

export default App;

