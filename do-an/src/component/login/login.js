
import React, { useState,useRef,useEffect, lazy } from 'react';
import classnames from "classnames";
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button
  } from 'reactstrap';
import Swal from 'sweetalert2';

import { setLogin } from "../../redux/actions/account";
import { useDispatch, useSelector } from 'react-redux';

function Login(props) {
    const [_remember,_setRemember] = useState(true);
    const [_emailFocus, _setEmailFocus] = useState('');
    const [_passwordFocus, _setPasswordFocus] = useState('');
    const acc = useSelector(state => state.Login.acc);
    const dispatch = useDispatch();
    const handleOpenRegister = () => {
        props.setOpenFormRegister(true);
        props.setOpenLogin(false);
    }
    //------------------ handle login ---------------------//
    const handleLogin = () => {
        if(_emailFocus==='nghia' && _passwordFocus==='123456'){
            const params = {
                ...acc,
                userName: "nghia",
                password: '123456'
            }
            const action = setLogin(params);
            dispatch(action);
            localStorage.setItem('avatar',acc.avatar);
            localStorage.setItem('acc','nghia');
            props.setOpenLogin(false);
            Swal.fire({
                text: "Đăng nhập thành công",
                showConfirmButton: false,
                icon: 'success',
                timer: 1500,
                timerProgressBar: true,
                toast: true,
                position: 'top'
            });
        }
        else
        Swal.fire({
            text: "Thông tin sai",
            showConfirmButton: false,
            icon: 'error',
            timer: 1500,
            timerProgressBar: true,
            toast: true,
            position: 'top'
        });
            
    }
    return (
        <Modal
            modalClassName="modal-black login-form"
            isOpen={props.openLogin}
            toggle={() => props.setOpenLogin(false)}
        >
            <ModalHeader>
                <div className="avatar-icon">
                    <img alt="avatar" src={require("../../assets/img/avatar.png").default}/>
                </div>
                <span>Đăng Nhập</span>
            </ModalHeader>
            <ModalBody>
            <Form role="form">
                    <FormGroup className="mb-3">
                        <InputGroup
                            className={classnames("input-group-alternative", {
                            "input-group-focus": _emailFocus,
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-at"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Email / Số điện thoại"
                                type="text"
                                value={_emailFocus}
                                onChange={(event) => _setEmailFocus(event.target.value)}
                                onKeyPress={(event)=> (event.code === "Enter" || event.code === "NumpadEnter") && handleLogin()}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup
                            className={classnames("input-group-alternative", {
                            "input-group-focus": _passwordFocus,
                            })}
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-key"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Password"
                                type="password"
                                value={_passwordFocus}
                                onChange={(event) => _setPasswordFocus(event.target.value)}
                                onKeyPress={(event)=> (event.code === "Enter" || event.code === "NumpadEnter") && handleLogin()}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup check className="mt-3">
                        <Label check>
                            <Input defaultChecked type="checkbox" value={_remember} onChange={(event)=>_setRemember(event.target.checked)}/>
                            <span className="form-check-sign" />
                                Nhớ tài khoản!
                        </Label>
                    </FormGroup>
                    <div className="text-center">
                        <Button className="my-4" type="button" onClick={() => handleLogin()}>
                            Đăng Nhập
                        </Button>
                        <div className="text-center">
                            <small>Bạn chưa có tài khoản ? </small><span className="registerButton" onClick={() =>  handleOpenRegister()}>Đăng kí</span><br/>
                            {/* <span className="registerButton" >Quên mật khẩu</span> */}
                        </div>
                    </div>
                </Form>
            </ModalBody>
            
        </Modal> 
    )
}

export default Login;
