import Header from "../components/Header";
import "../styles/_ContactUs.scss";

export default function ContactUs() {
  return (
    <section id="contact-us">
      <Header />
      <div className="container">
        <h1>Contact Us</h1>
        <div className="form">
          <h2>Contact the Royal Kingdom</h2>
          <form>
            <label>
              <p>Name :</p>
              <input type="text" />
            </label>
            <label>
              <p>Email :</p>
              <input type="text" />
            </label>
            <label>
              <p>Message :</p>
              <textarea />
            </label>
            <input className="input-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
