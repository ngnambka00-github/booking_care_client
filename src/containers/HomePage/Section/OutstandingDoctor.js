import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Chèn format chuyển đổi ngôn ngữ
import { FormattedMessage } from 'react-intl';
import Section from './Section';

class OutstandingDoctor extends Component {

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
                title={"Bác sĩ nổi bật tuần qua"}
                buttonTitle={"Tìm kiếm"}
                backgroundColor={"#ffffff"}
            >
                <Slider {...settings}>
                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-outstanding-doctor">
                        <div className="doctor-details">
                            <div className="image-doctor">
                                <img src="https://cdn.bookingcare.vn/fr/w200/2019/11/14/103848anh-dai-dien-bs.jpg" />
                            </div>

                            <div className="content">
                                <div className="information">
                                    <span>Bác sĩ Chuyên khoa II Đoàn Tiến Thành</span>
                                </div>
                                <div className="specialty">
                                    Tai mũi họng
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
