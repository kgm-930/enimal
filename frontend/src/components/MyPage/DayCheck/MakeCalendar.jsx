import React from 'react';
import { transString } from "./CalcDate";

/*
 * 현재 날짜를 key값 형식으로 변환
 * key ex) 2021.10.11
 */
const returnIdx = (order, year, month, day) => {

    if (order === 'PREV') {
        if (month === 0) {
            return transString(year - 1, 12, day)
        }
        return transString(year, month, day)
    }
    else if (order === 'NEXT') {
        if (month === 11) {
            return transString(year + 1, 1, day)
        }
        return transString(year, month + 2, day)
    }

    return transString(year, month + 1, day)
}



const MakeCalendar = ({ year, month, firstDay, lastDate }) => {
    const result = []

    const makeDay = (week) => {
        result.splice(0, result.length)
        // 첫 주 
        if (week === 1) {
            const prevLastDate = parseInt(new Date(year, month, 0).getDate(), 10);
            for (let i = 1; i <= 7; i += 1) {
                // 저번 달 날짜 
                if (i <= firstDay) {
                    const now = prevLastDate - firstDay + i
                    const idx = returnIdx('PREV', year, month, now)

                    result.push(
                        <td className="diff" key={idx}>
                            {now}
                        </td>)
                }
                // 현재 달 날짜
                else {
                    const now = i - firstDay
                    const idx = returnIdx('', year, month, now)

                    result.push(
                        <td key={idx}>
                            {now}
                        </td>)
                }
            }
        }
        else {
            const startDate = ((week - 1) * 7)
            for (let i = startDate; i <= week * 7 - 1; i += 1) {
                // 현재 달 날짜
                if (i - firstDay < lastDate) {
                    const now = i - firstDay + 1
                    const idx = returnIdx('', year, month, now)

                    result.push(
                        <td key={idx} >
                            {now}
                        </td>)
                }
                // 다음 달 날짜
                else {
                    const now = i - lastDate - firstDay + 1
                    const idx = returnIdx('NEXT', year, month, now)

                    result.push(
                        <td className="diff" key={idx}>
                            {now}
                        </td>)
                }
            }
        }
        return result
    }

    // 주 계산
    const week = Math.ceil((firstDay + lastDate) / 7)
    for (let i = 1; i <= week; i += 1) {
        result.push(<tr key={week + i}>{makeDay(i)}</tr>);
    }
    return result;
};

export default MakeCalendar
