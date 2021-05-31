
import React, { useState,useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col, Table
  } from 'reactstrap';
import { nextMonday } from 'date-fns'

import userApi from '../../api/userAPI';

function RollCall(props) {
    const acc = useSelector(state => state.Login.acc);
    const [_data,_setData] = useState([]);
    const [_list,_setList] = useState([]);
    const takeDataCourse = async() => {
        try{
            const response = await userApi.getCourseofTeacher(acc.userId);
            console.log(response);
            _setData(response);
        }catch(error){
            console.log("Failed to call API data detail contact", error);
        }
    }
    useEffect(()=>{
       takeDataCourse();
    },[acc.studentId])
    const handleRollCall =() => {

    }
    //-----------------------------------------------------------//
    const handleChange = async(event) => {
        // _setCourse(event.target.value);
        if(event.target.value!=='0'){
            let d = new Date();
            d.setDate(d.getDate() - 7);
            let result = nextMonday(d);
            let string = result.getFullYear()+"-"+(result.getMonth()+1)+"-"+result.getDate();
            const param = {
                courseId: event.target.value,
                firstDayOfWeek: string
            }
            console.log(param);
            try{
                const response1 = await userApi.getRollCallteacher(param);
                console.log(response1);
                if(response1[0].students){
                    _setList(response1)
                }
                else _setList([]);
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
    }
    const renderCourse = () => {
        return _data.map((e) => {
            return(
                <option key={e.courseId} value={e.courseId}>{e.courses.name}</option>
            )
        })
    }
    const renderattenchild = (e1) => {
        return e1.map((e) => {
            return(
                <td className="text-center">
                    {(e)
                        ?((e.absent)
                            ?<span className="span-CM-rollcall">Có mặt</span>
                            :<span className="span-V-rollcall">Vắng</span>)
                        :<Input type="checkbox" value="e"/>}
                </td>
            )
        })
    }
    const renderList = () => {
        return _list.map((e,index) => {
            return(
                <tr>
                    <th scope="row" className="text-center">{index+1}</th>
                    <td>{e.students.lastName}&ensp;{e.students.firstName}</td>
                    <td className="text-center">{(e.tests[0].score=='0.0')?e.tests[0].status:e.tests[0].score}</td>
                    <td className="text-center"><span className="span-V-rollcall">Vắng</span></td>
                    <td className="text-center"><span className="span-V-rollcall">Vắng</span></td>
                    <td className="text-center"><Input type="checkbox" value=""/></td>
                    <td></td>
                </tr>
            )
        })
    }
    return (
        <div className="rollcall">
            <div className="header-rollcall">
                <h4>Điểm danh học viên</h4>
            </div>
            <div className="detail-rollcall">
                <div className="header-detail-rollcall">
                    <Input type="select" name="select" id="exampleSelect" onChange={(event)=>handleChange(event)}>
                        <option value="0">Chọn khóa học</option>
                        {renderCourse()}
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
                            {renderList()}
                        </tbody>
                    </Table>
                </div>
                <div className="footer-detail-rollcall d-flex">
                    <Button color="info" onClick={()=>handleRollCall()}>Điểm danh</Button>
                </div>
            </div>
        </div>
    )
}

export default RollCall;
