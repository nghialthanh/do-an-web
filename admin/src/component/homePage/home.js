import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Container, ListGroup, ListGroupItem,Button, Row, Col } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Aos from "aos";
import { useDispatch } from 'react-redux';



function Home() {
    return (
        <div className="home">
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        </div>
    );
}

export default withTranslation('home')(Home);
