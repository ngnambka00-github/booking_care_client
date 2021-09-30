import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';

class Specialty extends Component {

    render = () => {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        };
        return (
            <div className="section-specialty">
                <div className="specialty-title">
                    <div className="title-left">
                        <span>Chuyên khoa phổ biến</span>
                    </div>
                    <div className="title-right">
                        <button className="view-more">Xem thêm</button>
                    </div>
                </div>
                <div className="specialty-content">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-image">
                                <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                            </div>
                            <div className="item-description">
                                <span>Bệnh viêm gan</span>
                            </div>
                        </div>
                    </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
