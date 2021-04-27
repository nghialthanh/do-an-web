
import React, { useState,useRef,useEffect } from 'react';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col
  } from 'reactstrap';


function Schedule(props) {
    return (
        <div className="schedule">
            <div className="header-schedule">
                <h5>Thời khóa biểu</h5>
            </div>
            <div className="body-schedule">
                <table>
                    <tr>
                        <th>Mã lớp</th>
                        <th>Số tuần</th>
                        <th>Ngày học</th>
                        <th>Thời gian</th>
                        <th>Ngày khai giảng</th>
                    </tr>
                    <tr>
                        <td>Ontario 01-05</td>
                        <td>144</td>
                        <td>Thứ 7 - CN</td>
                        <td>8:00 - 10:00<br/>10:00 - 12:00<br/>14:00 - 16:00</td>
                        <td>18/05/2020</td>
                    </tr>
                    <tr>
                        <td>Ontario 01</td>
                        <td>144</td>
                        <td>Thứ 3-5-7<br/>Thứ 2-4-6</td>
                        <td>17h45-19h15</td>
                        <td>18/05/2020</td>
                    </tr>
                    <tr>
                        <td>Ontario 02</td>
                        <td>144</td>
                        <td>Thứ 3-5-7<br/>Thứ 2-4-6</td>
                        <td>17h45-19h15</td>
                        <td>18/05/2020</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Schedule;
