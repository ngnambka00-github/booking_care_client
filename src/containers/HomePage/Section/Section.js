import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';

class Section extends Component {

    render = () => {

        return (
            <div className="section-container" style={{ backgroundColor: this.props.backgroundColor }}>
                <div className="section-title">
                    <div className="title-left">
                        <span>{this.props.title}</span>
                    </div>
                    <div className="title-right">
                        <button className="view-more">{this.props.buttonTitle}</button>
                    </div>
                </div>
                <div className="section-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
