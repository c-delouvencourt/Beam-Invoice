import React, { Component } from 'react';
import "../../styles/app.scss";

export default class NotFound extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              404
            </h1>
            <h2 className="subtitle">
              Error
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
