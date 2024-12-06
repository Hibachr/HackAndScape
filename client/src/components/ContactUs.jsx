import logos from "../assets/contact.svg"
const Contact = () => {
    return ( 
        <section id="contact" className="contact-section">
            <h2>CONTACT <span className="blue-text">US</span></h2>
          <input type="email" id="email"  placeholder="your email..." name="email"></input>
          <img src={logos} style={{cursor:"pointer"}} alt="404" />
        </section>
    

        ); 
  };
  export default Contact