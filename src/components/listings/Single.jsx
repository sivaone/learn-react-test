import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Single extends Component {
  render() {
    return (
      <li className="col l6 s12">
        <div className="card">
          <div className="card-image">
            <img src={this.props.item.image} alt={this.props.item.title} />
          </div>
          <div className="card-content">
            <span className="card-title">{this.props.item.title}</span>
            <p>{this.props.item.description}</p>
            <div className="row">
              <div className="col l6 center">
                <blockquote>
                  <h5>Released: {this.props.item.release_date}</h5>
                </blockquote>
              </div>
              <div className="col l6 center">
                <blockquote>
                  <h5>Views: {this.props.item.views}</h5>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="card-action">
            <a href={this.props.item.link} target="noopener _blank">
              Link to course
            </a>
          </div>
        </div>
        <br />
      </li>
    );
  }
}

Single.propTypes = {
  item: PropTypes.object.isRequired,
};
