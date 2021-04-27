
import React, { useState,useRef,useEffect } from 'react';
import {
    Modal, ModalBody, ModalHeader,Form,FormGroup,InputGroup,Input,InputGroupAddon,
    InputGroupText,Label,Button, CustomInput, Col
  } from 'reactstrap';
import {format, subHours, startOfMonth} from 'date-fns';
import {
  MonthlyBody,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';

import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
function DetailContact() {
    let [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
    return (
        <div className="detail-contact">
            <div className="header-detail-contact">
                <h5>Điểm danh</h5>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>Ontario 01-05</option>
                    <option>Ontario 01</option>
                    <option>Ontario 02</option>
                    </Input>
            </div>
            <div className="body-detail-contact">
                <MonthlyCalendar
                    currentMonth={currentMonth}
                    onCurrentMonthChange={date => setCurrentMonth(date)}
                    >
                    <MonthlyNav />
                    <MonthlyBody
                        events={[
                        { title: 'Có mặt', date: new Date('2021-04-07T15:00:00') },
                        { title: 'Có mặt', date: new Date('2021-04-09T15:00:00') },
                        { title: 'Có mặt', date: new Date('2021-04-12T15:00:00') },
                        { title: 'Vắng', date: new Date('2021-04-14T15:00:00') },
                        { title: 'Có mặt', date: new Date('2021-04-16T15:00:00') },
                        { title: 'Có mặt', date: new Date('2021-04-19T15:00:00') },
                        { title: 'Có mặt', date: new Date('2021-04-21T15:00:00') },
                        { title: 'Có mặt', date: new Date('2021-04-23T15:00:00') },
                        { title: 'Vắng', date: new Date('2021-04-05T15:00:00') },
                        ]}
                        renderDay={data =>
                        data.map((item, index) => (
                            <DefaultMonthlyEventItem
                            key={index}
                            title={item.title}
                            // Format the date here to be in the format you prefer
                            date={format(item.date, 'k:mm')}
                            />
                        ))
                        }
                    />
                </MonthlyCalendar>
            </div>
        </div>
    )
}

export default DetailContact;
