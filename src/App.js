import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarouselSlider from "./components/CarouselSlider";
import ServicesSection from "./components/ServicesSection";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/pages/sign_up/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <CarouselSlider />
          <ServicesSection  />
          <Pricing  />
          <Footer id="footer" />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
