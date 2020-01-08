import React, {Component} from 'react';

class DashboardCardComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"column is-" + this.props.size + " is-12-mobile animated fadeInUp"} style={{animationDelay: this.props.delay + "ms"}}>
        <h5 className="title is-5" style={{marginBottom: '0.7rem', color: '#9a9a9a', fontSize: 12}}>{this.props.title.toUpperCase()}</h5>
        <div className="card" style={{minHeight: this.props.height ? this.props.height : 100}}>
          <div className="card-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardCardComponent;
