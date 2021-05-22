import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Button, Form,FormGroup,Input, Row } from 'reactstrap';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
function FormAdmission() {
    const location= useLocation();
    const [_firstName,_setFirstName] = useState('');
    const [_lastName,_setLastName] = useState('');
    const [_mail,_setEmail] = useState('');
    const [_phone,_setPhone] = useState('');
    const { t} = useTranslation('home');
    return (
        <div className="form-admission" data-aos="fade-up" id="form-adimission">
            <div className="img-form"></div>
            <div className="input-form"><div className="input-form-1">
                <Form>
                    <span>{t('admission')}</span>
                    <Row>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder={t('firstname')} 
                                    value={_firstName}
                                    onChange={(event) => _setFirstName(event.target.value)}
                                />
                        </FormGroup>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder={t('lastname')} 
                                    value={_lastName}
                                    onChange={(event) => _setLastName(event.target.value)}
                                />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder={t('phone')} 
                                    value={_phone}
                                    onChange={(event) => _setPhone(event.target.value)}
                                />
                        </FormGroup>
                        <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder={t('email')} 
                                    value={_mail}
                                    onChange={(event) => _setEmail(event.target.value)}
                                />
                        </FormGroup>
                    </Row>
                    <Button>{t('apply')}</Button>
                </Form>
            </div></div>
        </div>
    );
}

export default withTranslation('home')(FormAdmission);
