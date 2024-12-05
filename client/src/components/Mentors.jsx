import pic1 from "../assets/pic2.svg";
import poly from "../assets/Polygon.svg"
import { useState } from "react";

const mentors = [
    {
        name:"Imene Seddik",
        skills:["Video Editor", "Esi Student 4th Year", "Freelancer"],
    },
    {
        name:"Houdiafa Bouakhlil",
        skills:["Backend Developer", "AI Developer"],
    }
]

const number = 2;

const Montors = () => {

    const [Nb,setNb] = useState(0);

    const next = () => {
        if (Nb+1==2) {
            setNb(0);
        } else {
            setNb(Nb+1);
        }
    }

    const prev = () => {
        if (Nb-1==-1) {
            setNb(number-1);
        } else {
            setNb(Nb-1);
        }
    }

    return (



        <div className="mentors">
            <h2>MENT<span className="blue-text">OR</span>S</h2>
            <div className="inner-mentors">
                <button onClick={prev}><img src={poly} alt="previeus" className="prev"/></button>
                <div className="mentor">
                    <img src={pic1} alt="picture"/>
                    <div className="info">
                        <h2>{mentors[Nb].name}</h2>
                        {mentors[Nb].skills.map((skill,index) => {
                            return (<p key={index}>{skill}</p>)
                        })}
                    </div>
                </div>
                <button onClick={next}><img src={poly} alt="next" /></button>
            </div>
        </div>
    );
};
export default Montors;