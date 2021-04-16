import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import { ImWhatsapp, ImTwitter, ImFacebook, ImInstagram } from "react-icons/im";

const SocialLinks = () => {
  const openWhatsApp = (whatsAppURL) => {
    window.open(whatsAppURL);
  };

  return (
    <div className="social-section">
      <div className="m-top">
        <h3>Contact Us!</h3>
        <ul className="list-items">
          <li>
            <MdLocationOn className="ic" />
            Near Burj Sahib, Dhariwal, Gurdaspur
          </li>
          <li>
            <MdLocalPhone className="ic" />
            +91-9815100033
          </li>
          <li>
            <MdEmail className="ic" />
            fatehfitness@gmail.com
          </li>
        </ul>
      </div>
      <div className="social-links m-top">
        <h3>Social Links</h3>
        <div className="social-block-section">
          <div className="social-block">
            <ImWhatsapp
              className="social-ic"
              onClick={() =>
                openWhatsApp(
                  "https://wa.me/+919815100033?text=I want to join Fateh Fitness Club"
                )
              }
            />
          </div>
          <div className="social-block">
            <ImTwitter
              className="social-ic"
              onClick={() =>
                openWhatsApp("https://twitter.com/fatehfitnessgym")
              }
            />
          </div>
          <div className="social-block">
            <ImFacebook
              className="social-ic"
              onClick={() =>
                openWhatsApp("https://www.facebook.com/fatehfitnessgym5")
              }
            />
          </div>
          <div className="social-block">
            <ImInstagram
              className="social-ic"
              onClick={() =>
                openWhatsApp("https://www.instagram.com/fatehfitnessgym/")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
