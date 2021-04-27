
import React, { useState,useRef,useEffect } from 'react';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col
  } from 'reactstrap';

import DetaiContact from "./detail-contact/detail-contact";
function ContactAccount(props) {
    const [_remember,_setRemember] = useState(true);
    const [_email, _setEmail] = useState('');
    const [_password, _setPassword] = useState('');
    const [_name,_setName] = useState('');
    const [_phone,_setPhone] = useState('');
    const [_birth,_setBirth] = useState();
    return (
        <div className="contact-account">
            <div className="header-contact-account">
                <h4>Sổ liên lạc học viên</h4>
            </div>
            <DetaiContact/>
        </div>
    )
}

export default ContactAccount;
