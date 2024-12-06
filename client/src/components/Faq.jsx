import { useState } from "react";
import FAQIMg from "../assets/FAQ.png";
import Circle from "../assets/Right circle.png";
import Question from "../assets/Frame 35.png";

const Faq = () => {
  // States to manage the visibility of each answer
  const [isAnswer1Visible, setIsAnswer1Visible] = useState(false);
  const [isAnswer2Visible, setIsAnswer2Visible] = useState(false);
  const [isAnswer3Visible, setIsAnswer3Visible] = useState(false);

  // States to manage the rotation of the arrows
  const [isArrow1Rotated, setIsArrow1Rotated] = useState(false);
  const [isArrow2Rotated, setIsArrow2Rotated] = useState(false);
  const [isArrow3Rotated, setIsArrow3Rotated] = useState(false);

  const toggleAnswer1 = () => {
    setIsAnswer1Visible(!isAnswer1Visible);
    setIsArrow1Rotated(!isArrow1Rotated); 
  };

  const toggleAnswer2 = () => {
    setIsAnswer2Visible(!isAnswer2Visible);
    setIsArrow2Rotated(!isArrow2Rotated); 
  };

  const toggleAnswer3 = () => {
    setIsAnswer3Visible(!isAnswer3Visible);
    setIsArrow3Rotated(!isArrow3Rotated); 
  };

  return (
    <section id="FAQ" className="FAQ">
      <img src={FAQIMg} alt="FAQ" />
      <img src={Question} className="Question" alt="404" />
      <div className="THE-Questions">
        <div className="Question1">Qui peut participer à Hack & Scape ?</div>
        <img
          src={Circle}
          className="arrow1"
          style={{
            width: "auto",
            height: "40px",
            transform: isArrow1Rotated ? "rotate(90deg)" : "rotate(0deg)", 
            transition: "transform 0.3s ease", 
          }}
          onClick={toggleAnswer1} 
          alt=""
        />
        <p className={isAnswer1Visible ? "answer1" : "hidden"}>
          Tout le monde ayant des connaissances de base en design, développement mobile ou web peut participer. Aucune expertise avancée n&apos;est requise, mais la motivation et la créativité sont essentielles.
        </p>

        <div className="Question2">Comment les équipes sont-elles formées ?</div>
        <img
          src={Circle}
          className="arrow2"
          style={{
            width: "auto",
            height: "40px",
            transform: isArrow2Rotated ? "rotate(90deg)" : "rotate(0deg)", 
            transition: "transform 0.3s ease", 
          }}
          onClick={toggleAnswer2} 
          alt=""
        />
        <p className={isAnswer2Visible ? "answer2" : "hidden"}>
          Les équipes seront formées lors de l&apos;accueil le premier jour de l&apos;événement. Vous pouvez venir avec votre propre équipe ou être regroupé avec d&apos;autres participants sur place en fonction des compétences complémentaires.
        </p>

        <div className="Question3">Quels types de défis seront proposés ?</div>
        <img
          src={Circle}
          className="arrow3"
          style={{
            width: "auto",
            height: "40px",
            transform: isArrow3Rotated ? "rotate(90deg)" : "rotate(0deg)", 
            transition: "transform 0.3s ease", 
          }}
          onClick={toggleAnswer3} 
          alt=""
        />
        <p className={isAnswer3Visible ? "answer3" : "hidden"}>
          Les défis incluent la résolution de problèmes techniques, le design, le développement de solutions (sites web ou applications mobiles), et une escape room immersive. Chaque défi est conçu pour tester la créativité, les compétences techniques, et la capacité de travail en équipe.
        </p>
      </div>
    </section>
  );
};

export default Faq;
