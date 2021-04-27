import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Card, CardImg,CardBody,CardFooter,CardTitle,CardText, Container} from 'reactstrap';
import dataCard from '../../../assets/data/data';


function Education() {
    const renderCard = () => {
        return dataCard.map((e,index) => {
            if(index<=3)
                return(
                    <Card key={e.id}>  
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
        <div className="education" data-aos="fade-up"><div className="education-1">
            <h3>Chương trình đào tạo</h3>
            <div className="education-list-card">
                {renderCard()}
            </div>
        </div></div>
    );
}

export default Education;
