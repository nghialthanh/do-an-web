import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import classnames from "classnames";
import { Label,FormGroup,Input,CustomInput,Button} from 'reactstrap';
import { ReCaptcha } from 'react-recaptcha-google';
import Swal from 'sweetalert2';
import userApi from '../../api/userAPI';

function Advisory() {
    const [_name,_setName] = useState('');
    const [_address,_setAdress] = useState('');
    const [_email,_setEmail] = useState('');
    const [_phone,_setPhone] = useState('');
    const [_captchaDemo,_setCaptchaDemo] = useState(null);
    const [_test,_setTest]= useState(false);
    const onLoadRecaptcha=()=> {
        if (_captchaDemo) {
            _captchaDemo.reset();
        }
    }  
    const verifyCallback=(recaptchaToken)=> {  
      if(recaptchaToken){
          _setTest(true);
      }
    }  
    const handle = async() =>{
        let string = "Nhân viên tư vấn sẽ liên lạc với bạn trong giây lát";
        if(_name.trim()==='')
            string="Họ và tên không được để trống";
        else if (_email.trim()==='')
            string="email không được để trống";
        else if (_phone.trim()==='')
            string="Số điện thoại không được để trống"
        else if (_address.trim()==='')
            string="Địa chỉ không được để trống"
        else if (!_test)
            string="Bạn chưa xác thực captcha"
        else{
            try{
                const params = {
                    phoneNumber: _phone,
                    name: _name,
                    email: _email,
                    address: _address,
                    status: "tư vấn",
                    note: ""
                }
                console.log(params);
                const response = await userApi.postAD(params);
                console.log(response);
              }catch(error) {
                  console.log("Failed to call API Login remember ", error);
              }; 
        }
        Swal.fire({
            text: string,
            showConfirmButton: false,
            icon: 'warning',
            timer: 2500,
            timerProgressBar: true,
            toast: true,
            position: 'bottom-left'
        });
    }
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div className="advisory">
            <img src={require("../../assets/img/21banner-1.png").default} alt='...'></img>
            <h2>ĐĂNG KÝ TƯ VẤN</h2>  
            <div className="form-advisory">
                <div className="left-form-advisory">
                    <FormGroup>
                        <Label>Họ và tên</Label>
                            <Input
                                placeholder="Họ và tên"
                                type="text"
                                value={_name}
                                onChange={(event) => _setName(event.target.value)}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label>Số điện thoại</Label>
                            <Input
                                placeholder="Số điện thoại"
                                type="text"
                                value={_phone}
                                onChange={(event) => _setPhone(event.target.value)}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label>Địa chỉ email</Label>
                            <Input
                                placeholder="Email"
                                type="text"
                                value={_email}
                                onChange={(event) => _setEmail(event.target.value)}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label>Địa chỉ nhà</Label>
                            <Input
                                placeholder="Dịa chỉ..."
                                type="text"
                                value={_address}
                                onChange={(event) => _setAdress(event.target.value)}
                            />
                    </FormGroup>
                    <div className="footer-left-form-advisory">
                        <ReCaptcha
                            ref={(el) => {_setCaptchaDemo(el)}}
                            size="normal"
                            data-theme="light"            
                            render="explicit"
                            sitekey="6LcaOqEaAAAAAASrkFU6aJSl-9qPkKdp4xIZs1eo"
                            onloadCallback={onLoadRecaptcha}
                            verifyCallback={verifyCallback}
                        />
                        <Button color="info" onClick={()=>handle()}>Gửi</Button>
                    </div>
                </div>
                <div className="right-form-advisory">
                    <img src={require("../../assets/img/dktv-1.png").default} alt='...'></img>
                </div>
            </div>          
        </div>
    );
}

export default Advisory;
