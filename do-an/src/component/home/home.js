import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Container, ListGroup, ListGroupItem,Button, Row, Col } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Aos from "aos";
import { useDispatch } from 'react-redux';
import { setShowFormTest } from "../../redux/actions/openForm";

import FormAdmission from "./home-child/form-Admission";
import Introduce from "./introdu/introduct";
import Education from "./educate/education";



function Home() {
    const location= useLocation();
    const { t} = useTranslation('home');
    const dispatch = useDispatch();
    useEffect(()=>{
        Aos.init({duration: 1000});
        window.scrollTo(0,0);
    },[location]);
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = () =>{
        const action = setShowFormTest(true);
        dispatch(action);
    }
    return (
        <div className="home">
            <div className="brandcam">
                <Container>
                    <h3>{t('title1')}<br/>{t('title2')}<br/>{t('title3')}</h3>
                    <Button onClick={() => handleOpenFormTest()}>{t('title-button1')}</Button>
                    <Button>{t('title-button2')}</Button>
                </Container>
            </div>
            <Container className="ads-quality">
                <Row>
                    <div><span className="material-icons">psychology</span><p>{t('main-2-title1')}</p></div>
                    <div><span className="material-icons">local_library</span><p>{t('main-2-title2')}</p></div>
                    <div><span className="material-icons">school</span><p>{t('main-2-title3')}</p></div>
                    <div><span className="material-icons">flight_takeoff</span><p>{t('main-2-title4')}</p></div>
                </Row>
            </Container>
            <Introduce/>
            <Education/>
            <FormAdmission/>
        </div>
    );
}

export default withTranslation('home')(Home);
