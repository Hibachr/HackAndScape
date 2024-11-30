// eslint-disable-next-line no-unused-vars
import {useState,useEffect} from "react"
import time from "../assets/time2.svg"

const agenda = [
    {
        day: "DAY 1",
        events : [
            {time:"17:30 - 18:00 :",activity:"Check-in"},
            {time:"18:00 - 19:00 :",activity:"opening ceremony & icebraker act"},
            {time:"19:00 - 21:00 :",activity:"1st challenge: PROBLEM SOLVING"},
            {time:"21:00 - 22:00 :",activity:"dinner break"},
            {time:"00:00 :",activity:"submission of deliverables for the first challenge"},
        ]
    },
    {
        day: "DAY 2",
        events : [
            {time:"9:00 - 9:30 :",activity:"morning breaakfast & recap"},
            {time:"9:30 - 11:30 :",activity:"2nd challenge: DESIGN"},
            {time:"11:30 - 12:00 :",activity:"lunch break"},
            {time:"12:00 - 18:00 :",activity:"3rd challenge: SOLUTION REALIZATION"},
            {time:"18:00 - 20:00 :",activity:"day2 wrap-up"},
        ]
    },
    {
        day: "DAY 3",
        events : [
            {time:"9:00 - 9:30 :",activity:"morning breakfast & recap"},
            {time:"9:30 - 11:30 :",activity:"last challenge: THE ESCAPE ROOM"},
            {time:"11:30 - 12:00 :",activity:"lunch break"},
            {time:"12:00 - 18:00 :",activity:"purusing the escape room challenge"},
            {time:"18:00 - 20:00 :",activity:"closing ceremony & announcement of winners"},
        ]
    },
]

const blue = "#016bba"

function Agenda() {

  const [currentDay, setCurrentDay] = useState(0)

//automatic switch between days every 7 seconds

//   useEffect(() => {
//     const interval = setInterval(() => {
//         setCurrentDay((prevDay) => (prevDay + 1) % agenda.length)
//     },7000)
//     return () => clearInterval(interval);
//   }, [])

  const handleClick = (current) => {
    setCurrentDay(current)
  }

  return (
    <>
        <section id="agenda">
            <h2>AGENDA</h2>
            <div id="times" className="fade-in" key={currentDay}>
                <p className="p" id="day">{agenda[currentDay].day}</p>
                <ul>
                    {agenda[currentDay].events.map((event,index) => (
                        <li key={index}>
                            <img src={time} alt="time" />
                            <p className="p">{event.time}</p>
                            <p className="p">{event.activity}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="dots">
                <div className="dot" style={{background:currentDay==0 && blue}} onClick={() => handleClick(0)}></div>
                <div className="dot"  style={{background:currentDay==1 && blue}}onClick={() => handleClick(1)}></div>
                <div className="dot"  style={{background:currentDay==2 && blue}}onClick={() => handleClick(2)}></div>
            </div>
        </section>
    </>
  )
}

export default Agenda
