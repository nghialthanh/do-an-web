
import React, { useState,useRef,useEffect } from 'react';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col
  } from 'reactstrap';
import Schedule from "./schedule/schedule";

function InfoAccount(props) {
    const [_remember,_setRemember] = useState(true);
    const [_email, _setEmail] = useState('');
    const [_password, _setPassword] = useState('');
    const [_name,_setName] = useState('');
    const [_phone,_setPhone] = useState('');
    const [_birth,_setBirth] = useState();
    return (
        <div className="info-account">
            <div className="header-info-account">
                <h4>Thông tin tài khoản</h4>
            </div>
            <div className="body-info-account">
                <div className="info-member">
                    <div className="header-infor-member">
                        Thông tin thẻ thành viên
                    </div>
                    <div className="body-infor-member">
                        <span>Bạn chưa kích hoạt tài khoản</span>
                        <Button>Kích hoạt ngay</Button>
                    </div>
                </div>
                <div className="info-private">
                    <div className="header-info-private">
                        Thông tin cá nhân
                    </div>
                    <Form role="form">
                        <FormGroup row>
                            <Label>Họ và tên</Label>
                            <Col>
                                <Input
                                    placeholder="Họ và tên"
                                    type="text"
                                    value={_name}
                                    onChange={(event) => _setName(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label>Số điện thoại</Label>
                            <Col>
                                <Input
                                    placeholder="Email"
                                    type="text"
                                    value={_phone}
                                    onChange={(event) => _setPhone(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label>Ngày sinh</Label>
                            <Col>
                            <Input 
                                type="date"
                                name="date"
                                id="exampleDate"
                                value={_birth}
                                onChange={(event) => _setBirth(event.target.value)}
                            />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label>Địa chỉ email</Label>
                            <Col>
                                <Input
                                    placeholder="Email"
                                    type="text"
                                    value={_email}
                                    onChange={(event) => _setEmail(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label>Mật khẩu</Label>
                            <Col>
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    value={_password}
                                    onChange={(event) => _setPassword(event.target.value)}
                                />
                            </Col>
                        </FormGroup>
                            {/* <FormGroup>
                                <Label>Bạn là</Label>
                                <div className="d-flex flex-row justify-content-around">
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Phụ huynh" />
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Học viên" />
                                </div>
                            </FormGroup> */}
                    </Form>
                </div>
            </div>
            <Schedule/>
        </div>
    )
}

export default InfoAccount;
