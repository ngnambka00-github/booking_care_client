import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';
import Section from './Section';

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
            <Section
                title={"Chuyên khoa phổ biến"}
                buttonTitle={"Xem thêm"}
                backgroundColor={"#ffffff"}>
                <Slider {...settings}>
                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viêm gan</span>
                        </div>
                    </div>
                </Slider>
            </Section>
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
