import cse_logo from "../assets/cse_logo.svg"

function Footer() {
  return (
    <div id="footer">
        <div id="cse">
            <p className="p">MADE BY</p>
            <a href="https://cse.club/en" target="_blank"><img src={cse_logo} alt="CSE logo" /></a>
        </div>
        <p className="p" id="copyright">copyright 2024</p>
    </div>
  )
}

export default Footer