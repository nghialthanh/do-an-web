
import React, { useState,useRef,useEffect } from 'react';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col, Table
  } from 'reactstrap';

function RollCall(props) {
    const [_remember,_setRemember] = useState(true);
    const [_email, _setEmail] = useState('');
    const [_password, _setPassword] = useState('');
    const [_name,_setName] = useState('');
    const [_phone,_setPhone] = useState('');
    const [_birth,_setBirth] = useState();
    return (
        <div className="rollcall">
            <div className="header-rollcall">
                <h4>Điểm danh học viên</h4>
            </div>
            <div className="detail-rollcall">
                <div className="header-detail-rollcall">
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Ontario 01-05</option>
                        <option>Ontario 01</option>
                        <option>Ontario 02</option>
                    </Input>
                    <Input type="select" name="select1" id="exampleSelect1">
                        <option>Tuần</option>
                        <option>Tuần 1</option>
                        <option>Tuần 2</option>
                        <option>Tuần 3</option>
                    </Input>
                </div>
                <div className="body-detail-rollcall">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Họ và tên đệm</th>
                                <th className="text-center">Điểm</th>
                                <th className="text-center">Buổi 1</th>
                                <th className="text-center">Buổi 2</th>
                                <th className="text-center">Buổi 3</th>
                                <th className="text-center">Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-center">1</th>
                                <td>Đinh Thành nghĩa</td>
                                <td className="text-center">10</td>
                                <td className="text-center"><span className="span-V-rollcall">Vắng</span></td>
                                <td className="text-center"><span className="span-V-rollcall">Vắng</span></td>
                                <td className="text-center"><Input type="checkbox" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">2</th>
                                <td>Hoàng Văn Tâm</td>
                                <td className="text-center">7</td>
                                <td className="text-center"><span className="span-CM-rollcall">Có mặt</span></td>
                                <td className="text-center"><span className="span-CM-rollcall">Có mặt</span></td>
                                <td className="text-center"><Input type="checkbox" /></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="footer-detail-rollcall d-flex">
                    <Button color="info">Điểm danh</Button>
                </div>
            </div>
        </div>
    )
}

export default RollCall;
