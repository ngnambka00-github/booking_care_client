import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';
import Section from './Section';

class OutstandingFacility extends Component {

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
                title={"Cơ sở y tế nổi bật"}
                buttonTitle={"Tìm kiếm"}
                backgroundColor={"#f5f5f5"}>
                <Slider {...settings}>
                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                    </div>

                    <div className="item-specialty">
                        <div className="item-image">
                            <img src="https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg" />
                        </div>
                        <div className="item-description">
                            <span>Bệnh viện Hữu nghị Việt Đức</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingFacility);
