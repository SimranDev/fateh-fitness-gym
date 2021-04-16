import { withWidth } from "@material-ui/core";

const FbPage = () => {
  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/fatehfitnessgym5"
      data-tabs="timeline"
      style={{ width: "100%" }}
      data-height="400"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="true"
      data-show-facepile="false"
    >
      <blockquote
        cite="https://www.facebook.com/fatehfitnessgym5"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/fatehfitnessgym5">
          Fateh Fitness Gym
        </a>
      </blockquote>
    </div>
  );
};

export default FbPage;
