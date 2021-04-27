
import React, { useState,useRef,useEffect, lazy } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, ModalFooter
  } from 'reactstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowFormTest } from "../../redux/actions/openForm";
import { useLocation } from 'react-router';

const removeClassName = (index) =>{
    document.getElementsByClassName('answer-question-item-0')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-1')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-2')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-3')[index].classList.remove('answer-chose-item');
}

function Dialog_test() {
    const openForm = useSelector(state => state.openForm.openDialogTest);
    const dispatch = useDispatch();
    const location = useLocation();
    const [_questionList,_setQuestionList] = useState(undefined);
    const [_listAnswer,_setListAnswer] = useState([]);
    console.log(_listAnswer);
    //------------------ take question data --------------------------//
    const takeDataQues = () => {
        axios({
            method: "get",
            url: "https://opentdb.com/api.php?amount=25&difficulty=medium&type=multiple",
            headers: { "Content-Type": "application/json" },
        })
            .then(function (response) {
              //handle success
                _setQuestionList(response.data.results);
                console.log(response);
            })
            .catch(function (error) {
              //handle error
              console.log("Failed to call API question", error);
            });    
    }
    useEffect(()=>{
        takeDataQues();
    },[])
    //------------------ handle open form test -------------------------//
    const handleOpenFormTest = (e) =>{
        const action = setShowFormTest(e);
        dispatch(action);
    }
    //------------------ handle select answer -------------------------//
    const handleSelectAnswer = (e,name,index) => {
        let css = document.getElementsByClassName('answer-question-item-'+e);
        removeClassName(index);
        css[index].classList.add('answer-chose-item');
        // let str = "question-"+index;
        // const item = [];
        // item[str]=name;
        // _setListAnswer(item);
    }
    const renderQuestion =() => {
        if(typeof _questionList!=='undefined')
            return _questionList.map((e,index) => {
                const item = [
                    ...e.incorrect_answers,
                    e.correct_answer
                ]
                item.sort(function(){return 0.5 - Math.random()});
                return(
                    <div className="question-item" key={index}>
                        <div className="header-question-item">
                            <span>Question&ensp;{index+1}:</span>&ensp;{e.question}
                        </div>
                        <div className="answer-question-item">
                            <div className="row-answer-question-item">
                                <div className="item-answer-question-item">
                                    <span className="answer-question-item-0" onClick={()=>handleSelectAnswer(0,item[0],index)}>
                                        A.&ensp;{item[0]}
                                    </span>
                                </div>
                                <div className="item-answer-question-item">
                                    <span className="answer-question-item-1" onClick={()=>handleSelectAnswer(1,item[1],index)}>
                                        B.&ensp;{item[1]}
                                    </span>
                                </div>
                            </div>
                            <div className="row-answer-question-item">
                                <div className="item-answer-question-item">
                                    <span className="answer-question-item-2" onClick={()=>handleSelectAnswer(2,item[2],index)}>
                                        C.&ensp;{item[2]}
                                    </span>
                                </div>
                                <div className="item-answer-question-item">
                                    <span className="answer-question-item-3" onClick={()=>handleSelectAnswer(3,item[3],index)}>
                                        D.&ensp;{item[3]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
                BÀI KIỂM TRA ĐẦU VÀO
                <div className="ReactCountdownClock">
                    <ReactCountdownClock 
                    seconds={60}
                        color="rgb(23, 47, 72)"
                        alpha={0.9}
                        size={40}
                        onComplete={()=>handleOpenFormTest(false)}
                    />
                </div>
            </ModalHeader>
            <ModalBody>
                {renderQuestion()}
            </ModalBody>
            <ModalFooter>
                <Button>Hoàn thành</Button>
            </ModalFooter>
        </Modal> 
    )
}

export default Dialog_test;
