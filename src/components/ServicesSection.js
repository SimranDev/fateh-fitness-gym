import "./services_section.css";
import { Grid } from "@material-ui/core";

import BodyBuildingImg from "../images/bg-Images/body-building-back.png";
import CardioImg from "../images/bg-Images/cardio.jpg";
import AerobicsImg from "../images/bg-Images/aerobics.jpg";
import ZumbaImg from "../images/bg-Images/zumba.jpg";
import CrossFitImg from "../images/bg-Images/cross-fit.jpg";
import NutritionistImg from "../images/bg-Images/nutritionist.jpg";
import TableTennisImg from "../images/bg-Images/table-tennis.jpg";
import YogaImg from "../images/bg-Images/yoga.jpg";
import SteamBathImg from "../images/bg-Images/steam-bath.jpg";
import PoolTableImg from "../images/bg-Images/pool-table.jpg";

const ServicesSection = () => {
  return (
    <div>
      <div className="service-parent-container" id="services">
        <h1 className="heading">SERVICES WE OFFER</h1>
        <Grid container justify="center" >
          <Grid item xs={12} sm={6} md={3}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + BodyBuildingImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>BODY BUILDING TRAINING</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + AerobicsImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>AEROBICS</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + NutritionistImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>NUTRITIONIST</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + CardioImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>CARDIO CLASSES</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + ZumbaImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>ZUMBA</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + CrossFitImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>CROSS-FIT</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + YogaImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>YOGA CLASSES</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + SteamBathImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>STEAM BATH</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + TableTennisImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>TABLE TENNIS</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <div className="service-container">
              <div
                className="size3-container-back"
                style={{ backgroundImage: "url(" + PoolTableImg + ")" }}
              ></div>
              <div className="fg-text">
                <p>POOL TABLE</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServicesSection;
