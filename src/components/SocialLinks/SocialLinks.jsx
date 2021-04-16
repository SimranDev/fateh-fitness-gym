import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import { ImWhatsapp, ImTwitter, ImFacebook, ImInstagram } from "react-icons/im";
import "./social-links.css";

const SocialLinks = () => {
  const openWhatsApp = (whatsAppURL) => {
    window.open(whatsAppURL);
  };

  return (
    <div className="sm-btns-container">
      <div className="sm-social-btn">
        <ImWhatsapp
          className="sm-social-ic"
          onClick={() =>
            openWhatsApp(
              "https://wa.me/+919815100033?text=I want to join Fateh Fitness Club"
            )
          }
        />
      </div>
      <div className="sm-social-btn">
        <ImTwitter
          className="sm-social-ic"
          onClick={() => openWhatsApp("https://twitter.com/fatehfitnessgym")}
        />
      </div>
      <div className="sm-social-btn">
        <ImFacebook
          className="sm-social-ic"
          onClick={() =>
            openWhatsApp("https://www.facebook.com/fatehfitnessgym5")
          }
        />
      </div>
      <div className="sm-social-btn">
        <ImInstagram
          className="sm-social-ic"
          onClick={() =>
            openWhatsApp("https://www.instagram.com/fatehfitnessgym/")
          }
        />
      </div>
    </div>
  );
};

export default SocialLinks;
