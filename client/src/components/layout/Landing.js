import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>

          <p className="lead">
            <i>Join our developer's community</i>
            <br />
            And create a developer profile/portfolio, share posts and get help
            from other developers
          </p>
          <div className="contain">
            <div className="left">
              <h2>Key Features</h2>
              <ul>
                <li>Helps developing the networks</li>
                <li>Easy and faster connection</li>
                <li>Learn new things</li>
              </ul>
            </div>
            <div className="right">
              <div className="buttons">
                <Link to="/register" className="btn landing-primary">
                  Sign Up
                </Link>
                <br />
                <br />
                <Link to="/login" className="btn btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section> */
}
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
