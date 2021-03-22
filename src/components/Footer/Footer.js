import { Grid } from "@material-ui/core";
import "./Footer.css";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import { ImWhatsapp, ImTwitter, ImFacebook, ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="parent-container">
      <Grid container>
        <Grid
          container
          xs={12}
          sm={4}
          direction="column"
          justify="flex-start"
          className="grids"
        >
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
          <Grid>
            <h3>Social Links</h3>
            <div className="social-block-section">
              <div className="social-block">
                <ImWhatsapp className="social-ic" />
              </div>
              <div className="social-block">
                <ImTwitter className="social-ic" />
              </div>
              <div className="social-block">
                <ImFacebook className="social-ic" />
              </div>
              <div className="social-block">
                <ImInstagram className="social-ic" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ backgroundColor: "#353535", height: "40px" }}
        justify="center"
        alignItems="center"
      >
        <p>Copyright Fateh Fitness © 2021&nbsp;&nbsp;</p>

        <h6 style={{ color: "var(--primary)" }}>V: 01.29.2021.09:53</h6>
      </Grid>
    </div>
  );
};

export default Footer;
