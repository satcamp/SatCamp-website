import { SectionTitle, LightningTalkTitle, Section, LeftColumn, RightColumn } from "./sections";
import { ReactComponent as LinkedIn } from "../assets/images/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/images/github.svg";
import { ReactComponent as BlueSky } from "../assets/images/bluesky.svg";
import { ReactComponent as Web } from "../assets/images/globe.svg";
import { ReactComponent as Medium } from "../assets/images/medium.svg";
import { ReactComponent as YouTube } from "../assets/images/youtube.svg";

export function LightningTalksSection() {
  return (
    <Section dark id="lightning">
      <LeftColumn>
        <SectionTitle>Lightning Talks</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline" href="https://docs.google.com/presentation/d/1-r-qIn7qel71nZBLu46sBg-xc7RRsLw6KindeRBG4rw/pub?start=true&loop=false&delayms=15000">
              Uncertainty in AI: Characterizing the limitations of deep learning, especially in imaging data
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Becky Nevin</p>
          <a href="https://www.linkedin.com/in/becky-nevin/"><LinkedIn/></a>
        </div>

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline" href="https://docs.google.com/presentation/d/1tZBEYlPjQxqFSFF5vEYFddE91S7VMMT8vpwAmoARw84/pub?start=true&loop=false&delayms=15000">
              Product management something something
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>   
          <p className="ml-12 text-light">Camilla Mahon</p>
          <a href="https://www.linkedin.com/in/camilla-mahon/"><LinkedIn/></a>
        </div>

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline" href="https://docs.google.com/presentation/d/1GCIsDVTUoLKQlD6w2vfyS_RfArWjiRbAw7QaP0MsG2g/pub?start=true&loop=false&delayms=15000">
            End-to-end Framework for Future Inundation Scenarios of Coastal Cities with High Resolution Digital Surface Models
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>   
          <p className="ml-12 text-light">Eduard Heijkoop</p>
          <a href="https://www.linkedin.com/in/eduardheijkoop/"><LinkedIn/></a>
        </div>

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline" href="https://docs.google.com/presentation/d/11YOIUjib1qZLwiVGqwxD2J9WufvPpyKB8qby_8laly0/pub?start=true&loop=false&delayms=15000">
            Breaking Points: The Challenge with Observational Data of Glaciers and Ice Sheets
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>   
          <p className="ml-12 text-light">Joanna Millstein</p>
          <a href="https://www.linkedin.com/in/jdmillstein17/"><LinkedIn/></a>
        </div>

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline underline-offset-2" href="https://docs.google.com/presentation/d/1AQJf8bcIRkLXQEq_5Yvb4eqjc54zFp5v0O3WKcHnhzc/pub?start=true&loop=false&delayms=15000">
              We're building some of the coolest & most impactful tech and people are terrified of it
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Maxime Lenormand</p>
          <a href="https://www.linkedin.com/in/maxime-lenormand-b94640107/"><LinkedIn/></a>
          <a href="https://www.youtube.com/watch?v=3G1kRnYxx4k/"><YouTube/></a>
        </div>

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline underline-offset-2"
              href="https://docs.google.com/presentation/d/12_QhekFCFTutf0Di4NHdQ24zauFal-N6LiwBhpOgcpU/pub?start=true&loop=false&delayms=15000">
            Let's apply dumb economics to the use of remote sensing data
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Pete Gadomski</p>
          <a href="https://www.linkedin.com/in/pgadomski/"><LinkedIn/></a>
          <a href="https://github.com/gadomski/"><GitHub/></a>
          <a href="https://bsky.app/profile/gadom.ski"><BlueSky/></a>
          <a href="https://www.gadom.ski/"><Web/></a>
        </div>
          
        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline underline-offset-2"
              href="https://docs.google.com/presentation/d/1fcfU803Uskkne7fM-5ZGEgH8My8zm497Jone7uHDglM/pub?start=true&loop=false&delayms=15000">
            Improving climate data access with Virtualizarr
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Raphael Hagen</p>
          <a href="https://www.linkedin.com/in/raphael-hagen-a9285a138/"><LinkedIn/></a>
        </div>

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline underline-offset-2" href="https://docs.google.com/presentation/d/1GwGEEmSm7ZmgK0EWRna9z6y2VWXZm0IpRmYfJEzTFhY/pub?start=true&loop=false&delayms=15000">
            Japan is having a moment
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Robert Cheetham</p>
          <a href="https://www.linkedin.com/in/rcheetham/"><LinkedIn/></a>
        </div>		

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline underline-offset-2" href="https://docs.google.com/presentation/d/1KDmLnjMZvfpl_gc4itrGezDfWnX6xXtFGtAWBVjrzKk/pub?start=true&loop=false&delayms=15000">
            18 Ways to Improve Data Access
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Robert Simmon</p>
          <a href="https://www.linkedin.com/in/robert-b-simmon/"><LinkedIn/></a>
          <a href="https://medium.com/@robsimmon/"><Medium/></a>
        </div>		
        
        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline underline-offset-2"
              href="https://docs.google.com/presentation/d/1YfURKVV8rkJbiPiHGAsAjOiYTZMIlkWsig7zpVWWFa8/pub?start=true&loop=false&delayms=15000">
            Better GPS accuracy for outdoor adventures
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Sean Gorman</p>
          <a href="https://www.linkedin.com/in/sean-gorman-93a79/"><LinkedIn/></a>
        </div>	

        <LightningTalkTitle flex/>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="text-3xl ml-12 text-light">
            <a className="underline underline-offset-2" href="https://docs.google.com/presentation/d/1Ajj6M4QvAa21xgieh_eUvQBxW92PorV85TJOT9_jlPg/pub?start=true&loop=false&delayms=15000">
              An introduction to lightning talks, geo enshitification, and biking techniques
            </a>
          </p>
        </div>
        <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <p className="ml-12 text-light">Tyler Erickson</p>
          <a href="https://www.linkedin.com/in/tylere/"><LinkedIn/></a>
          <a href="https://github.com/tylere"><GitHub/></a>
          <a href="https://www.analyze.earth/"><Web/></a>
        </div>
      </RightColumn>
    </Section>
  );
}