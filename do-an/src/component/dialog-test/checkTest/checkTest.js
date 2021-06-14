
import React, { useState,useRef,useEffect, lazy } from 'react';
import { useSelector,useDispatch} from 'react-redux';

import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function CheckTest() {
    const dispatch = useDispatch();
    const location = useLocation();
    const History = useHistory();
    const arrayQues = useSelector(state => state.Login.arrayQues);
    const testID = useSelector(state => state.Login.testID);
    const acc = useSelector(state=> state.Login.acc);
    const [_score,_setScore] = useState(0);
    //------------------ take question data --------------------------//
    const takeDataQues = () => {
        let score = 0.0;
        for (let index = 0; index < arrayQues.length; index++) {
            if(arrayQues[index].answer === arrayQues[index].correct_answer)
                score = score+0.2;
        }
        _setScore(score);
    }
    useEffect(()=>{
        window.scrollTo(0,0);
        takeDataQues();
    },[])
    //-------------------------------- rendertest ----------------------------//
    const renderQuestion =() => {
            return arrayQues.map((e,index) => {
                return(
                    <div className="question-item" key={index}>
                        <div className="header-question-item">
                            {e.question}
                            {(e.answer === e.correct_answer)
                                ?<span className="right-answer"> - True</span>
                                :<span className="wrong-answer"> - False</span>
                            }
                        </div>
                        <div className="answer-question-item">
                            <div className="row-answer-question-item">
                                <div className="item-answer-question-item">
                                    <span>
                                        Học viên trả lời: {e.answer}
                                    </span>
                                </div>
                                <div className="item-answer-question-item">
                                    <span>
                                        Đáp án đúng: {e.correct_answer}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
    }
    return (
        <div className="check-week">
            <div className="test-week-content">
                <div className="header-check-week">
                    <div className="score-check-week">
                        <div className="score-header">
                            Điểm
                        </div>
                        <span>{_score}</span>
                    </div>
                    <div className="detail-check-week">
                        <div className="header-detail-check-week">
                            BÀI TẬP HẰNG TUẦN
                        </div>
                        <div className="body-detail-check-week">
                            <span><strong>Họ và tên: </strong>{acc.firstName+" "+acc.lastName}</span>
                            <span><strong>Tuần kiểm tra: </strong>{testID.week}</span>
                            <span><strong>Lớp: </strong>{testID.nameClass}</span>
                            <span><strong>Thời gian học: </strong>{testID.startDay.slice(0,10)} đến {testID.finishDay.slice(0,10)}</span>
                        </div>
                    </div>
                </div>
                {renderQuestion()}
                <div className="out-check-test">
                    <Link to='/'>Thoát</Link>
                </div>
            </div>
        </div>
    )
}

export default CheckTest;
