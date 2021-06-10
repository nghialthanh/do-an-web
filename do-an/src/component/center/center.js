import React, { useState,useEffect } from 'react';
import { Link,useLocation} from "react-router-dom";
import { Label,FormGroup,Input,CustomInput,Button} from 'reactstrap';
import Swal from 'sweetalert2';
import {MdLocationOn,MdLocalPhone} from "react-icons/md";
import webApi from '../../api/webAPI';
import Map from "./map/map";
function Center() { 
    const [_data,_setData] = useState([]);
    const [_select,_setSelect] = useState(0);
    const handle = async() =>{

    }
    useEffect(()=>{
        const takeData = async() => {
            try{
                const response = await webApi.getCenter();
                console.log(response);
                _setData(response);
            }catch(error){
                console.log("Failed to call API data detail contact", error);
            }
        }
        window.scrollTo(0,0);
        return takeData();
    },[])

    const renderItem = () => {
        return _data.map((e,index) => {
            return(
                <div className={"list-center"+' '+((_select===index) && "active-list")} key={e.id} onClick={()=> _setSelect(index)}>
                    <span>{e.name}</span>
                    <span><MdLocationOn/>&ensp;{e.address}</span>
                    <span><MdLocalPhone/>&ensp;1900 98 68</span>
                </div>
            )
        })
    }
    return (
        <div className="Center">
            <img className="img-banner-center" src={require("../../assets/img/center.jpg").default} alt='...'></img>
            <h2>Hệ thống trung tâm Speak English</h2>  
            {(_data.length!==0) && <div className="body-center">
                <div className="left-body-center">
                    <div className="title-body-center">
                        Danh sách trung tâm
                    </div>
                    <div className="list-body-center">
                        {renderItem()}
                    </div>
                </div>
                <div className="right-body-center">
                <div className="title-body-center">
                        Chi tiết trung tâm
                    </div>
                    <div className="up-right-body-center">
                        <span><strong>Tên:</strong>{_data[_select].name}</span>
                        <span><strong>Địa chỉ:</strong> {_data[_select].address}</span>
                        <span><strong>Thông tin:</strong> {_data[_select].detail}</span>
                    </div>
                    <div className="down-right-body-center">
                        {/* <img className="img-banner-center" src={require(`../../assets/img/map${_select}.PNG`).default} alt='...'></img> */}
                        <Map/>
                    </div>
                </div>
            </div>}          
        </div>
    );
}

export default Center;
