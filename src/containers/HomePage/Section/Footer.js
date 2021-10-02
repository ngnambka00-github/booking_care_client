import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';
import Section from './Section';

class Footer extends Component {

    render = () => {
        return (
            <div className="footer-container">
                <div className="footer-content">
                    <div className="content-top">
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/er3ABhxsSME"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>

                    <div className="content-bottom">
                        <div className="logo">

                        </div>
                        <div className="copyright">
                            <span>Nguyễn Văn Nam - Booking care</span>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
