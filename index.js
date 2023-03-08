import React, { Component } from "react";
import "./style.css";

export default class CustomModal extends Component {
  hideModal = () => {
    if (this.props.closeEffect) this.props.closeEffect();
    $(".modal").modal("hide");
  };

  render() {
    let { isOpen, headerContent, bodyContent, modalStyle, loading } =
      this.props;

    isOpen && $(".modal").modal();
    !isOpen && $(".modal").modal("hide");

    loading
      ? $(".modal-content").css("filter", "blur(3px)")
      : $(".modal-content").css("filter", "blur(0px)");

    return (
      <div className="custom-modal">
        <div className="modal">
          {loading && (
            <div className="blur-loading-text">
              İşleminiz gerçekleştiriliyor...
            </div>
          )}
          <div className="modal-position">
            <div className="modal-content modal-size" style={modalStyle}>
              <div className="content">
                <div className="header-content">
                  <span dangerouslySetInnerHTML={{ __html: headerContent }} />
                  <span onClick={this.hideModal} className="modal-close-btn">
                    <i className="fa fa-close fa-lg"></i>
                  </span>
                </div>
                <div className="body-content">{bodyContent}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
