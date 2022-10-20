import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h2>What do you need help with?</h2>
        <p>Please choose from options below</p>
      </section>

      <Link to='/new-ticket' className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to='/ticket' className="btn btn-block">
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  )
}

export default Home;
