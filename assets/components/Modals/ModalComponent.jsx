import React from "react";
import {withTranslation} from "react-i18next";

class ModalComponent extends React.Component {

  state = {
    exit: false
  };

  render(){
    const {t} = this.props;

    return (
      <div className={"modal " + (this.props.isActive ? "is-active" : "")}>
        <div className={"modal-background " + (this.state.exit ? "animated fadeOut" : "animated fadeIn")}></div>
        <div className={"modal-content " + (this.state.exit ? "animated fadeOutDownBig" : "animated fadeInUpBig")}>
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
            <button className="delete" aria-label="close" onClick={() => {
              this.setState({exit: true});
              setTimeout(() => {
                this.props.onClose();
                this.setState({exit: false});
              }, 500);
            }}></button>
          </header>
          <section className="modal-card-body" style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
            {this.props.children}
          </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={() => {
          this.setState({exit: true});
          setTimeout(() => {
            this.props.onClose();
            this.setState({exit: false});
          }, 500);
        }}></button>
      </div>
    );
  }

}

export default withTranslation()(ModalComponent);
