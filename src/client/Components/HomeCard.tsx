import * as React from "react";
import { useHistory, Link } from "react-router-dom"; // replaces Link to so that the card is clickable instead of a link

const HomeCard: React.FC<IHomeCardProps> = (props) => {
  // a React functional component that will receive HomeCard props

  const history = useHistory(); // gives access to the history prop from BrowserRouter

  return (
    <div className="col-md-6 mx-1">
      <div
        onClick={() => history.push(`/details/${props.details.id}`)}
        className="card my-2 shadow">
        <div className="card-body text-center">
          <h4 className="card-title">@{props.details.username}</h4>
          <p className="card-text">{props.details.message}</p>
          {/* <Link to={`/details/${props.details.id}`}>Get Details</Link> */}
        </div>
      </div>
    </div>
  );
};

interface IHomeCardProps {
    blog: {
        id: number,
        title: string,
        body: string,
        authorid: number,
        _created: Date,
        firstname: string,
        lastname: string
    };
    tags: {
        id: number,
        name: string
    }[];
}

export default HomeCard;