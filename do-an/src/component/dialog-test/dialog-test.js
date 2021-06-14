
import React, { useState,useRef,useEffect, lazy } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, ModalFooter,Table
  } from 'reactstrap';
import { useHistory,} from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setShowFormTest } from "../../redux/actions/openForm";
import { setTestID } from "../../redux/actions/account";
import userApi from '../../api/userAPI';

function Dialog_test() {
    const openForm = useSelector(state => state.openForm.openDialogTest);
    const acc = useSelector(state => state.Login.acc);
    const dispatch = useDispatch();
    const History = useHistory();
    const [_data,_setData] = useState([]);
    const [_name,_setName] = useState('');
    const [_list, _setList] = useState([]);
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = (e) =>{
        const action = setShowFormTest(e);
        dispatch(action);
    }
    //------------------ handle go test-------------------------//
    const handleGoTest = (e1) =>{
        const item = {
            ...e1,
            nameClass: _name
        }
        console.log(item);
        const action1 = setTestID(item);
        dispatch(action1);
        const action = setShowFormTest(false);
        dispatch(action);
        History.push('/bai-tap-ve-nha');
    }
    const handleChange = async(event) => {
        console.log(event.target.value);
        for (let index = 0; index < _data.length; index++) {
            if(_data[index].classes.id==event.target.value){
                _setName(_data[index].classes.name);
                break;
            }
        }
        if(event.target.value!=='0'){
            try{
                const response1 = await userApi.getAllTest(acc.studentId ,event.target.value);
                console.log(response1);
                _setList(response1);
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
    }
    useEffect(() =>{
        const takeData = async() => {
            try{
                const response = await userApi.getCourseofStudent(acc.studentId);
                console.log(response);
                _setData(response); 
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
        if(acc.studentId)
            return takeData();
    },[openForm])
    const renderCourse = () => {
        return _data.map((e) => {
            return(
                <option key={e.classes.id} value={e.classes.id}>{e.classes.name}</option>
            )
        })
    }
    const renderButtontest = (e,e1) =>{
        if(e=='Làm bài')
            return(
                <td className="joinning-test" onClick={() => handleGoTest(e1)}>Đang mở</td>
            )
        else if (e=='Chưa được làm')
            return(
                <td className="not-yet-time-test">Chưa mở</td>
            )
        else if (e=='Đã thi')
            return(
                <td className="complete-test">Đã làm</td>
            )
        else return(
            <td className="not-join-test">Không tham gia</td>
        )
    }
    const renderColum = () =>{
        return _list.map((e,index) => {
            return(
                <tr key={index}>
                    <td scope="row">Tuần {e.week}</td>
                    <td>(Từ {e.startDay.slice(0,10)} đến {e.finishDay.slice(0,10)})</td>
                    <td>{(e.score===0)?"#":e.score}</td>
                    {renderButtontest(e.status,e)}
                </tr>
            )
        })
    }
    return (
        <Modal
            modalClassName="modal-black dialog-test"
            isOpen={openForm}
            toggle={() => handleOpenFormTest(false)}
        >
            <ModalHeader>
                BÀI TẬP KIỂM TRA KIẾN THỨC
            </ModalHeader>
            <ModalBody>
                <Input type="select" name="select" id="exampleSelect" onChange={(event)=>handleChange(event)}>
                    <option value="0">Chọn khóa học</option>
                    {renderCourse()}
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
                        {renderColum()}
                    </tbody>
                </Table>
            </ModalBody>
        </Modal> 
    )
}

export default Dialog_test;
