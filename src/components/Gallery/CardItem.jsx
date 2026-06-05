import { HeartIcon } from "../icons/HeartIcon";
import { CommentIcon } from "../icons/CommentIcon";
import "./CardItem.css";

export const CardItem = ({ card }) => (
  <article className="card-item">
    <div className="card-image-container">
      <img src={card.image} alt="Submission" />
    </div>
    <div className="card-content-area">
      <div className="card-col col-main">
        <span className="meta-title">{card.labelLeft}</span>
        <div className="meta-stats-row">
          <span className="stat-item">
            <HeartIcon color="#ef4444" />
            {card.likesLeft}
          </span>
          <span className="stat-item">
            <CommentIcon color="#718096" />
            {card.commentsLeft}
          </span>
        </div>
      </div>
      <div className="card-col col-history">
        <time className="meta-title">{card.dateRight}</time>
        <div className="meta-stats-row">
          <span className="stat-item">
            <HeartIcon color="#ef4444" />
            {card.likesRight}
          </span>
          <span className="stat-item">
            <CommentIcon color="#718096" />
            {card.commentsRight}
          </span>
        </div>
      </div>
      <div className="card-col col-type">
        <span className="meta-title">{card.typeLeft}</span>
        <time className="meta-date-muted">{card.dateBottomRight}</time>
      </div>
    </div>
  </article>
);
