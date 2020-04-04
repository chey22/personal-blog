import * as React from "react";
import { IBlog } from "../utils/types";
import { useHistory } from "react-router-dom"; // replaces Link to so that the card is clickable instead of a link

const HomeCard: React.FC<HomeCardProps> = (props) => {
  
  const history = useHistory(); // gives access to the history prop from BrowserRouter

  return (
    <React.Fragment>
      <div className="col-md-5 mx-1">
        <div
          onClick={() => history.push(`/details/${props.blog.id}`)}
          className="card my-2 shadow"
        >
          <div className="card-body text-center">
            <h4 className="card-title">@{props.blog.name}</h4>
            <p className="card-text">{props.blog.title}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface HomeCardProps {
  blog: IBlog;
}

export default HomeCard;