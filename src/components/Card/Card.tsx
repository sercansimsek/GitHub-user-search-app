import "./Card.scss";

import location from "../../assets/images/icon-location.svg";
import x from "../../assets/images/icon-twitter.svg";
import website from "../../assets/images/icon-website.svg";
import company from "../../assets/images/icon-company.svg";

export const Card = () => {
  return (
    <div className="Card">
      <div className="Card-hero">
        <img className="Card-hero-image" src="" alt="" />
        <div className="Card-hero-info">
          <div>
            <span className="Card-hero-info_name">The Octocat</span>
            <span className="Card-hero-info_tag">@octotat</span>
          </div>
          <span className="Card-hero-info_joined">Joined 25 Jan 2011</span>
        </div>
      </div>
      <div className="Card-bio">This profile has no bio</div>
      <div className="Card-stat">
        <div className="Card-stat-repo">
          <div className="Card-stat-repo_title">Repos</div>
          <div className="Card-stat-repo_repos">8</div>
        </div>

        <div className="Card-stat-follower">
          <div className="Card-stat-follower_title">Followers</div>
          <div className="Card-stat-follower_followers">3938</div>
        </div>

        <div className="Card-stat-following">
          <div className="Card-stat-following_title">Following</div>
          <div className="Card-stat-following_followings">9</div>
        </div>
      </div>

      <div className="Card-social">
        <div className="Card-social-location">
          <img
            className="Card-social-location_icon"
            src={location}
            alt="location icon"
          />
          <div className="Card-social-location_info">San Francisco</div>
        </div>

        <div className="Card-social-x">
          <img className="Card-social-x_icon" src={x} alt="x official logo" />
          <a className="Card-social-x_info" href="/">
            Not Available
          </a>
        </div>

        <div className="Card-social-blog">
          <img
            className="Card-social-blog_icon"
            src={website}
            alt="engaged chains represents communication"
          />
          <a className="Card-social-blog_info" href="/">
            https://github.blog
          </a>
        </div>

        <div className="Card-social-company">
          <img
            className="Card-social-company_icon"
            src={company}
            alt="building icon represents workplace"
          />
          <a className="Card-social-company_info" href="/">
            @github
          </a>
        </div>
      </div>
    </div>
  );
};
