import React, { useState,useEffect, lazy } from 'react';
import { Link,Route,Switch,useLocation} from "react-router-dom";
import { Container, ListGroup, ListGroupItem,Button, Row, Col } from 'reactstrap';
import Aos from "aos";
import { useDispatch } from 'react-redux';
import { setShowFormTest } from "../../redux/actions/openForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, {
    Autoplay
} from 'swiper/core';

const IntroducCenter = lazy(() => import('./IntroducCenter/introducCenter'));
const Main = lazy(() => import('./main/main'));
const Course = lazy(() => import('./course/course'));
const NewPage = lazy(() => import('./newsPage/newPage'));
const CourseDetail = lazy(() => import('./courseDetail/courseDetail'));
const Method = lazy(() => import('./courseDetail/method/method'));



function Home() {
    const location= useLocation();
    SwiperCore.use([Autoplay]);
    useEffect(()=>{
        Aos.init({duration: 1000});
        window.scrollTo(0,0);
    },[location]);
    //-------------- render page ------------------------//
    const renderPage = () => {
        return(
            <Switch>
                    <Route path="/pages/trang-chu" component={() => 
                                                                <Main/>
                    }/>
                    <Route path="/pages/khoa-hoc" component={() => 
                                                                <Course/>
                    }/>
                    <Route path="/pages/chi-tiet-khoa-hoc/:str" component={() => 
                                                                <>
                                                                    <CourseDetail/>
                                                                    <Method/>
                                                                </>
                    }/>
                    <Route path="/pages/tin-tuc" component={() => 
                                                                <NewPage/>
                    }/>
                    <Route path="/pages/gioi-thieu" component={() => 
                                                                <IntroducCenter/>
                    }/>
            </Switch>
        )
    }
    return (
        <div className="home">
            <div className="brandcam">
                <Swiper  className="mySwiper" autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                }}>
                    <SwiperSlide><img src={require("../../assets/img/banner-main.webp").default} alt='...'></img></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/img/banner-danhsachkhoahoc.jpg").default} alt='...'></img></SwiperSlide>
                    <SwiperSlide><img src={require("../../assets/img/banner-tuyendung.jpg").default} alt='...'></img></SwiperSlide>
                </Swiper>
                <Container>
                    <h3>Nâng cao kỹ năng của bạn<br/>với 1 cách học tập<br/>hoàn toàn mới</h3>
                    <Link exact to="/tu-van"><Button>Bắt đầu</Button></Link>
                </Container>
            </div>
            <Container className="ads-quality">
                <Row>
                    <div><span className="material-icons">psychology</span><p>Phương pháp giảng dạy</p></div>
                    <div><span className="material-icons">local_library</span><p>Nội dung giảng dạy</p></div>
                    <div><span className="material-icons">school</span><p>Đội ngũ giáo viên</p></div>
                    <div><span className="material-icons">flight_takeoff</span><p>Con đường đi du học</p></div>
                </Row>
            </Container>
            {renderPage()}
        </div>
    );
}

export default Home;
