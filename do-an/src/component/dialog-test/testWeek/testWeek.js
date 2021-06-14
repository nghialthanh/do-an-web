
import React, { useState,useEffect} from 'react';
import ReactCountdownClock from "react-countdown-clock";
import { useSelector,useDispatch} from 'react-redux';

import { setArrayQues } from "../../../redux/actions/account";
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import userApi from '../../../api/userAPI';

const removeClassName = (index) =>{
    document.getElementsByClassName('answer-question-item-0')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-1')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-2')[index].classList.remove('answer-chose-item');
    document.getElementsByClassName('answer-question-item-3')[index].classList.remove('answer-chose-item');
}

function TestWeek() {
    const dispatch = useDispatch();
    const History = useHistory();
    const [_questionList,_setQuestionList] = useState(undefined);
    const [_step,_setStep] = useState(1);
    const [_arrayQues,_setArrayQues] = useState([]);
    const testID = useSelector(state => state.Login.testID);
    //------------------ take question data --------------------------//
    const takeDataQues = async() => {
        try{
            const response = await userApi.getQuestion(testID.week);
            console.log(response);
                const item = [];
                for (let index = 0; index < response.results.length; index++) {
                    item[index] = {
                        answer: '',
                        correct_answer: response.results[index].correct_answer,
                        question: `Question ${index+1}: ${response.results[index].question}`
                    }
                }
            console.log(item);
            _setArrayQues(item);
            _setQuestionList(response.results);
        }catch(error){
            console.log("Failed to call API data detail contact", error);
        }   
    }
    useEffect(()=>{
        takeDataQues();
    },[])
    //------------------ handle select answer -------------------------//
    const handleSelectAnswer = (e,name,index) => {
        let css = document.getElementsByClassName('answer-question-item-'+e);
        removeClassName(index);
        css[index].classList.add('answer-chose-item');
        let item = _arrayQues;
        item[index].answer = name;
        _setArrayQues(item);
    }
    //------------------- commit handle --------------------------//
    const handleCommit = async() => {
        console.log(_arrayQues);
        let score = 0.0;
        for (let index = 0; index < _arrayQues.length; index++) {
            if(_arrayQues[index].answer === _arrayQues[index].correct_answer)
                score = score+0.2;
            
        }
        const params = {
            testId: testID.testId,
            score: score.toFixed(1)
        };
        try{
            const response1 = await userApi.posttest(params);
            const action = setArrayQues(_arrayQues);
            dispatch(action);
            Swal.fire({
                text: "Nộp bài thành công",
                showConfirmButton: false,
                icon: 'success',
                timer: 3000,
                timerProgressBar: true,
                toast: true,
                position: 'bottom-left'
            });
            History.push('/sua-bai-tap-ve-nha');
        }catch(error){
            console.log("Failed to call API data detail contact", error);
        }
    }
    //---------------------------- render sure for test ---------------------//
    const renderCheck = () => {
        if(_step===1)
            return(
                <div className="sure-for-test">
                    <h3>Bắt đầu làm bài tập hằng tuần</h3>
                    <button onClick={() =>_setStep(2)}>Bắt đầu</button>
                </div>
            )
        else 
            return(
                <div className="test-week-content">
                    
                    <div className="ReactCountdownClock">
                        <h3>BÀI TẬP HẰNG TUẦN</h3>
                        <ReactCountdownClock 
                            seconds={2700}
                            color="rgb(23, 47, 72)"
                            alpha={0.9}
                            size="55"
                            onComplete={()=> handleCommit()}
                        />
                    </div>
                    {renderQuestion()}
                    <div className="button-commit">
                        <button onClick={()=>handleCommit()}>Nộp Bài</button>
                    </div>
                </div>
            )
    }
    //-------------------------------- rendertest ----------------------------//
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
        <div className="test-week">
            {renderCheck()}
        </div>
    )
}

export default TestWeek;
