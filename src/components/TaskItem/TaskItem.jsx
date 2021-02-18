import React, { useState } from "react";
import { Accordion, Alert, Button, Card } from "react-bootstrap";
import { HIGH, LOW, MID } from "../../constants";
import moment from "moment";

const TaskItem = ({ props: { title, importance, deadLine } }) => {
  //const [timeLeft, setTimeLeft] = useState();
  const [dayLeft, setDayLeft] = useState(
    Math.floor(
      (new Date(deadLine).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  const calculateTimeLeft = () => {
    if (dayLeft >= 1) {
      return `${Math.floor(dayLeft)}일`;
    } else {
      return `${Math.floor(
        (new Date(deadLine).getTime() - new Date().getTime()) / (1000 * 60 * 60)
      )}시간`;
    }
  };

  const setAlertColor = (importance) => {
    switch (importance) {
      case LOW:
        return "primary";
        break;
      case MID:
        return "warning";
        break;
      case HIGH:
        return "danger";
      default:
        break;
    }
  };

  const setImportanceText = (importance) => {
    switch (importance) {
      case LOW:
        return "낮음";
        break;
      case MID:
        return "보통";
        break;
      case HIGH:
        return "높음";
      default:
        break;
    }
  };

  const setDeadLineColor = (deadLine) => {
    if (dayLeft <= 1) {
      return "danger";
    } else if (dayLeft <= 3) {
      return "warning";
    } else if (dayLeft <= 5) {
      return "success";
    } else {
      return "primary";
    }
  };

  return (
    <>
      <Card>
        <Card.Body className="d-flex align-items-center justify-content-between">
          <div className="fs-5 text-muted">{title}</div>
          <div className="d-flex align-items-center">
            <Alert
              variant={setAlertColor(importance)}
              className="d-inline-block mr-4 mb-0"
            >
              중요도 : {setImportanceText(importance)}
            </Alert>
            <Alert
              variant={setDeadLineColor(deadLine)}
              className="d-inline-block mr-4 mb-0"
            >
              마감기한 : {calculateTimeLeft(dayLeft)}
            </Alert>
            <Button className="mr-3" variant="danger">
              수정
            </Button>
            <Button>완료</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TaskItem;
