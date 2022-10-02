import React, { useReducer } from 'react';
import calendarReducer from "./reducer/CalendarReducer";
import MakeCalendar from './MakeCalendar';

import 'react-calendar/dist/Calendar.css'; // css import



const today = new Date()

// 초기 상태
const initialState = {
     year: today.getFullYear(),
     month: today.getMonth(),
     modal: {
         visible: false,
         index: '',
     },
     schedule: []
 };


function DayCheck() {
  const [state, dispatch] = useReducer(calendarReducer, initialState)

  // 날짜 관련
  const {year} = state.year;
  const {month}  = state.month;
  const yearMonth = `${year}.(${month+1})`;
  const lastDate = parseInt(new Date(year, month+1, 0).getDate(),10);
  const firstDay = parseInt(new Date(year, month, 1).getDay(),10);

  // Month 감소
  const onDecreases = () => {
      dispatch({ type: 'DECREMENT'})
  }

  // Month 증가
  const onIncreases = () => {
      dispatch({ type: 'INCREMENT'})
  }

  return (
          <div className="Calendar">
              <div className="header">
                  <button type='button' className="move" onClick={onDecreases}>&lt;</button>
                  <p>{yearMonth}</p>
                  <button type='button' className="move" onClick={onIncreases}>&gt;</button>
              </div>
              <table>
              <thead>
                  <tr>
                      <td>Sun</td>
                      <td>Mon</td>
                      <td>Tue</td>
                      <td>Wed</td>
                      <td>Thu</td>
                      <td>Fri</td>
                      <td>Sat</td>
                  </tr>
              </thead>
                  <tbody>
                  {MakeCalendar({year, month ,firstDay, lastDate })}
                  </tbody>
              </table>
          </div>
  )
}

export default React.memo(DayCheck);