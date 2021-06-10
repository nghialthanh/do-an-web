import React, { useState,useEffect } from 'react';
import {MdLocationOn,MdPlaylistAddCheck} from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu-mini">
            <Link exact to="/tu-van">
                <div><BsPencilSquare/></div>
                <span>Đăng ký tư vấn</span>
            </Link>
            <Link exact to="/pages/khoa-hoc">
                <div><MdPlaylistAddCheck/></div>
                <span>Tìm khóa học</span>
            </Link>
            <Link exact to="/he-thong-trung-tam">
                <div><MdLocationOn/></div>
                <span>Hệ thống trung tâm</span>
            </Link>
        </div>
    );
}

export default Menu;
