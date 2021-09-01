import React , {useEffect,useState} from 'react';
import { Table } from 'react-bootstrap';
import HOS from '../HOS.json';



const Details = () => {

 

  return (
      <div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Work Date</th>
      <th>Start Time</th>
      <th>End Time</th>
              <th>Total Working Hours</th>
              <th>Daily Gross Pay</th>
    </tr>
  </thead>
  <tbody>
    {
      HOS.data.map(post => {
      let { startTime } = post;
      let startTimeDateObject = new Date(startTime);
      let _date = startTimeDateObject.toDateString();
      let _startHour = startTimeDateObject.getUTCHours();
      let AmorPm = _startHour >= 12 ? 'pm' : 'am';
      _startHour = (_startHour % 12) || 12;
      let _startMints = startTimeDateObject.getUTCMinutes();
      let _startSeconds = startTimeDateObject.getUTCSeconds();
      let { endTime } = post;
      let endTimeDateObject = new Date(endTime);
      let _endHour = endTimeDateObject.getUTCHours();
      let _endMints = endTimeDateObject.getUTCMinutes();
      let _endSeconds = endTimeDateObject.getUTCSeconds();
      let PmorAm = _endHour >= 12 ? 'pm' : 'am';
      _endHour = (_endHour % 12) || 12;
      let workingHours = _endHour - _startHour;
      let workingMints = _endMints - _startMints;
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      let _days = console.log(_date.split(" ")['0']);
      let _weekday1 = (weekdays.indexOf('Sun')) !== -1 ? weekdays.indexOf('Sun') + 6 :null;
      let dayindex = startTimeDateObject.getDay();
      let overtimeHour = workingHours > 8 ? 8 - workingHours : workingHours;
      let overtimeMints = workingHours >= 8 ? workingMints : null;
     
      return (
        <tr>
          <td>{_date}</td>
          <td>{_startHour+":"+"0"+_startMints+":"+"0"+_startSeconds+" "+AmorPm}</td>
          <td>{_endHour+":"+_endMints+":"+"0"+_endSeconds+" "+PmorAm}</td>
          <td>{workingHours + " hours" + " " + workingMints + " mints"}</td>
          <td>{"$"+(workingHours*22)+""+"."+Math.round((overtimeMints*0.367))}</td>
        </tr>
      )
    })}
    
  </tbody>
  </Table>
    </div>
    );
}

export default Details;