import React, { useState,useEffect } from 'react';
import { Link,useLocation,useHistory} from "react-router-dom";
import { Card, CardImg,CardBody,CardFooter,CardTitle,CardText } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Aos from "aos";
import { useDispatch } from 'react-redux';
import {setcourse} from '../../../redux/actions/course';
import dataCard from '../../../assets/data/data';
import Employee from './employy/employee';

function Course() {
    const History = useHistory();
    const dispatch = useDispatch();
    const handleSelectCourse = (e) => {
        const action = setcourse(e);
        dispatch(action);
        History.push(`/pages/chi-tiet-khoa-hoc/${e.id}`);
    }
    const renderCard = () => {
        return dataCard.map((e,index) => {
                return(
                    <Card key={e.id} onClick={() => handleSelectCourse(e)}>  
                        <CardImg top width="100%" src={e.img} alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h5">{e.title}</CardTitle>
                        <CardText>{e.content1}</CardText>
                        </CardBody>
                        <CardFooter>
                            <div><span className="material-icons">schedule</span>&ensp;{e.time}</div>
                            <div>XEM THÊM</div>
                        </CardFooter>
                    </Card>
                )
        })
    }
    return (
        <>
        <div className="course">
            <div className="course-1">
                <h3>Chương trình đào tạo</h3>
                 <div className="course-list-card">
                    {renderCard()}
                </div>
            </div>
        </div>
        <Employee/>
        </>
    );
}

export default Course;
