import { ProfileImage } from "./ProfileImage";
import User from "./User";

function Tweet(props) {
  console.log("props on the Tweet component", props);
  return (
    <div className="tweet">
      <ProfileImage image={props.data.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.data.user.name} handle={props.data.user.handle} />
          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">{props.data.message}</p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
