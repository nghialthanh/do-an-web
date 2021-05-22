
import React, { useState,useRef,useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownItem,UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button
  } from 'reactstrap';

import { RiAccountBoxFill,RiContactsBookFill,RiSettings3Fill} from "react-icons/ri";
import {FiLogOut} from "react-icons/fi";
import {GiOpenBook} from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";

import { useTranslation, withTranslation } from 'react-i18next';
import { Link, NavLink as RRNavLink, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setShowFormTest } from '../../redux/actions/openForm';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { t} = useTranslation('header');
    const acc = useSelector(state=> state.Login.acc);
    const dispatch = useDispatch();
    //----------------- scoll to view --------------------------//
    const handleScrollToForm = () => {
        document.getElementById("form-adimission").scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = () =>{
        const action = setShowFormTest(true);
        dispatch(action);
    }
    //------------------- handle log out -------------------//
    const handleLogOut = () => {
        localStorage.removeItem('acc');
        window.location.reload();
    }
    //------------------ render menu sort by type ---------------//
    const renderMenu = () => {
        if(acc.type==='1')
            return(
                <DropdownMenu right>
                    <DropdownItem href="/thong-tin">
                        <RiAccountBoxFill/>&emsp;<span>Thông tin</span>
                    </DropdownItem>
                    <DropdownItem href="/so-lien-lac">
                        <RiContactsBookFill/>&emsp;<span>Sổ liên lạc</span>
                    </DropdownItem>
                    <DropdownItem onClick={() => handleOpenFormTest()}>
                        <GiOpenBook/>&emsp;<span>Kiểm tra </span>
                    </DropdownItem>
                    <DropdownItem >
                        <RiSettings3Fill/>&emsp;<span>Cài đặt</span>
                    </DropdownItem>
                    <DropdownItem className="log-out-header-head" onClick={()=>handleLogOut()}>
                        <FiLogOut/>&emsp;<span>Đăng xuất</span>
                    </DropdownItem>
                </DropdownMenu>
            )
        else 
            return(
                <DropdownMenu right>
                    <DropdownItem href="/thong-tin">
                        <RiAccountBoxFill/>&emsp;<span>Thông tin</span>
                    </DropdownItem>
                    <DropdownItem>
                        <FaCalendarCheck/>&emsp;<span>Điểm danh</span>
                    </DropdownItem>
                    <DropdownItem >
                        <RiSettings3Fill/>&emsp;<span>Cài đặt</span>
                    </DropdownItem>
                    <DropdownItem className="log-out-header-head" onClick={()=>handleLogOut()}>
                        <FiLogOut/>&emsp;<span>Đăng xuất</span>
                    </DropdownItem>
                </DropdownMenu>
        )
    }
    return (
        <div className="header">
            <div className="header-head">
                <div>+880166 253 232 info@domain.com</div>
                <div className="info-acc-header-head">
                    {(acc.userName==='')
                    ?<div className="button-login" onClick={() => props.setOpenLogin(true)}>Đăng nhập</div>
                    :<UncontrolledDropdown>
                        <DropdownToggle nav caret tag="span">
                            Chào, {acc.userName}
                        </DropdownToggle>
                        {renderMenu()}
                    </UncontrolledDropdown>
                    }
                </div>
            </div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">TRUNG TÂM WECEC</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink exact to="/pages/trang-chu/" tag={RRNavLink} activeClassName="active-nav-link">
                        {t('home')}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/pages/khoa-hoc" tag={RRNavLink} activeClassName="active-nav-link"> 
                        {t('program')}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/clip/" tag={RRNavLink} activeClassName="active-nav-link">
                        {t('center')}
                        </NavLink>
                    </NavItem>
                        <Button onClick={() => handleScrollToForm()}>Liên Hệ</Button>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default withTranslation('header')(Header);
