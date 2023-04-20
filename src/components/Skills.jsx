import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import CircularProgress from "./CircularProgress";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills=[
    {
      name:"Django",
      percentage:75
    },
    {
      name:"React JS",
      percentage:70
    },
    {
      name:"MySQL",
      percentage:70
    },
    {
      name:"Git",
      percentage:65
    },
    {
      name:"React Native Expo",
      percentage:50
    },
    {
      name:"MongoDB",
      percentage:75
    },
    {
      name:"GraphQL",
      percentage:55
    },
    {
      name:"Solidity SmartContract",
      percentage:77
    },
  ]

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {
                              skills.map((i,k)=>
                                <div className="item" key={k}>
                                  <CircularProgress percentage={i.percentage}/>
                                  <h5>{i.name}</h5>
                                </div>
                              )
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
