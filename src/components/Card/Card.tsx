import "./Card.scss";

import location from "../../assets/images/icon-location.svg";
import x from "../../assets/images/icon-twitter.svg";
import website from "../../assets/images/icon-website.svg";
import company from "../../assets/images/icon-company.svg";

import type { User } from "../../App";

type Props = {
  user: User;
  isLightMode: boolean;
};

export const Card = ({ user, isLightMode }: Props) => {
  return (
    <div className={isLightMode ? "Card" : "Card-dark"}>
      <div className="Card-hero">
        <img
          className="Card-hero-image"
          src={user.avatar_url}
          alt="user avatar"
        />
        <div className="Card-hero-info">
          <div>
            <span className="Card-hero-info_name">{user.name}</span>
            <span className="Card-hero-info_tag">{`@${user.login}`}</span>
          </div>
          <span className="Card-hero-info_joined">
            {new Date(user.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="Card-bio">
        {user.bio !== null ? user.bio : "This profile has no bio"}
      </div>
      <div className="Card-stat">
        <div className="Card-stat-repo">
          <div className="Card-stat-repo_title">Repos</div>
          <div className="Card-stat-repo_repos">{user.public_repos}</div>
        </div>

        <div className="Card-stat-follower">
          <div className="Card-stat-follower_title">Followers</div>
          <div className="Card-stat-follower_followers">{user.followers}</div>
        </div>

        <div className="Card-stat-following">
          <div className="Card-stat-following_title">Following</div>
          <div className="Card-stat-following_followings">{user.following}</div>
        </div>
      </div>

      <div className="Card-social">
        <div className="Card-social-location">
          <img
            className="Card-social-location_icon"
            src={location}
            alt="location icon"
          />
          <div className="Card-social-location_info">{user.location}</div>
        </div>

        <div className="Card-social-x">
          <img className="Card-social-x_icon" src={x} alt="x official logo" />
          <a
            className="Card-social-x_info"
            href={
              user.twitter_username
                ? `https://x.com/${user.twitter_username}`
                : ""
            }
          >
            {user.twitter_username !== null
              ? user.twitter_username
              : "Not Available"}
          </a>
        </div>

        <div className="Card-social-blog">
          <img
            className="Card-social-blog_icon"
            src={website}
            alt="engaged chains represents communication"
          />
          <a
            className="Card-social-blog_info"
            href={user.blog ? `${user.blog}` : ""}
          >
            {user.blog ? user.blog : "Not Available"}
          </a>
        </div>

        <div className="Card-social-company">
          <img
            className="Card-social-company_icon"
            src={company}
            alt="building icon represents workplace"
          />
          <a
            className="Card-social-company_info"
            href={user.company ? `${user.company}` : ""}
          >
            {user.company ? user.company : "Not Available"}
          </a>
        </div>
      </div>
    </div>
  );
};
