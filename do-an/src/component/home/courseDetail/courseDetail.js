import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Button, Container, Form,FormGroup,Input, Row } from 'reactstrap';
import { ImBooks } from "react-icons/im";
import { GiBrain,GiTeamIdea } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import { useSelector } from 'react-redux';
function CourseDetail() {
    const location= useLocation();
    const course = useSelector(state=> state.Course.course);
    return (
        <div className="CourseDetail">
            <div className="CourseDetail-1">
                <div className="CourseDetail-content">
                    <h2>{course.title}</h2>
                    <p>{course.content1}</p><br/>
                    <p>{course. content2}.</p><br/>
                    <div className="ads-CourseDetail">
                        <div><FcIdea/><p>Phương pháp giảng dạy</p></div>
                        <div><ImBooks/><p>Nội dung giảng dạy</p></div>
                        <div><GiTeamIdea/><p>Đội ngũ giáo viên</p></div>
                        <div><GiBrain/><p>Con đường đi du học</p></div>
                    </div>
                </div>
                <div className="img-intro">
                    <img src={require('../../../assets/img/chtrinh-daotao.png').default} alt='...'></img>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;