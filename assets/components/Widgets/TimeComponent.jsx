import React from "react";
import Time from "react-time";

export default class TimeComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }
  }


  componentDidMount() {
    setInterval(() => this.setState({time: new Date()}), 10000)
  }

  render(){
    return (
      <h5 className="title is-5 has-text-grey-light" style={{fontSize: 14}}><Time value={this.state.time} format="HH:mm, D MMM YYYY" /></h5>
    );
  }

}
