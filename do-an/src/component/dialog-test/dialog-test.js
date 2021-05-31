
import React, { useState,useRef,useEffect, lazy } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, ModalFooter,Table
  } from 'reactstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowFormTest } from "../../redux/actions/openForm";
import { useHistory, useLocation } from 'react-router';

const removeClassName = (index) =>{
    document.getElementsByClassName('answer-question-item-0')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-1')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-2')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-3')[index].classList.remove('answer-chose-item');
}

function Dialog_test() {
    const openForm = useSelector(state => state.openForm.openDialogTest);
    const dispatch = useDispatch();
    const History = useHistory();
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = (e) =>{
        const action = setShowFormTest(e);
        dispatch(action);
    }
    //------------------ handle go test-------------------------//
    const handleGoTest = () =>{
        const action = setShowFormTest(false);
        dispatch(action);
        History.push('/kiem-tra');
    }
    return (
        <Modal
            modalClassName="modal-black dialog-test"
            isOpen={openForm}
            toggle={() => handleOpenFormTest(false)}
        >
            <ModalHeader>
                KIỂM TRA KIẾN THỨC
            </ModalHeader>
            <ModalBody>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Ontario 01-05</option>
                    <option>Ontario 01</option>
                    <option>Ontario 02</option>
                </Input>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Tuần học</th>
                        <th>Từ ngày - Đến ngày</th>
                        <th>Điểm</th>
                        <th>Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="row">Tuần 1</td>
                        <td>(03/05/2021-09/05/2021)</td>
                        <td>8</td>
                        <td className="complete-test">Đã thi</td>
                    </tr>
                    <tr>
                        <td scope="row">Tuần 2</td>
                        <td>(10/05/2021-16/05/2021)</td>
                        <td>Không có</td>
                        <td className="not-join-test">Không tham gia</td>
                    </tr>
                    <tr>
                        <td scope="row">Tuần 3</td>
                        <td>(17/05/2021-23/05/2021)</td>
                        <td>9.5</td>
                        <td className="joinning-test" onClick={() => handleGoTest()}>Đang thi</td>
                    </tr>
                    <tr>
                        <td scope="row">Tuần 4</td>
                        <td>(24/05/2021-31/05/2021)</td>
                        <td>Chưa</td>
                        <td className="not-yet-time-test">Chưa thi</td>
                    </tr>
                    </tbody>
                </Table>
            </ModalBody>
        </Modal> 
    )
}

export default Dialog_test;
