import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import Calendar from "react-calendar";
import Timeline from 'react-calendar-timeline';
import moment from 'moment';

function DisplayModal(props) {
const [state, setState] = useState(false);
function handleModal(){
  setState(!state)
}
function displayRow(activity_period) {
  return (
    <tr>
      <td>{activity_period.start_time}</td>
      <td>{activity_period.end_time}</td>
    </tr>
  );
}
  return(
    <div>
    <h4 onClick={handleModal} style={{cursor: 'pointer'}}>{props.name}</h4>
    <Modal show={state} onHide={handleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Activity Periods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">From</th>
            <th scope="col">To</th>
          </tr>
        </thead>
        <tbody>
        {props.activity_periods.map(displayRow)}
        </tbody>
      </table>
      <Calendar />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
export default DisplayModal;
