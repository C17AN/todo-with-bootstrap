import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { deleteTask, toggleModMode } from "../../redux/actions";
import ModTask from "../ModTask/ModTask";

const TaskItem = ({
  props: { id, title, importance, deadLine },
  deleteTask,
  toggleModMode,
}) => {
  //const [timeLeft, setTimeLeft] = useState();
  const [dayLeft, setDayLeft] = useState(
    Math.floor(
      (new Date(deadLine).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  const handleTaskDone = async () => {
    await axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((data) => console.log(data));
    deleteTask(id);
  };

  const calculateTimeLeft = () => {
    if (dayLeft >= 1) {
      return `${Math.floor(dayLeft)}일`;
    } else if (dayLeft >= 0) {
      return `${Math.floor(
        (new Date(deadLine).getTime() - new Date().getTime()) / (1000 * 60 * 60)
      )}시간`;
    } else {
      return `기한 초과`;
    }
  };

  const setAlertColor = (importance) => {
    switch (importance) {
      case "0":
        return "primary";
      case "1":
        return "warning";
      case "2":
        return "danger";
      default:
        break;
    }
  };

  const setImportanceText = (importance) => {
    switch (importance) {
      case "0":
        return "낮음";
      case "1":
        return "보통";
      case "2":
        return "높음";
      default:
        return;
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
            <Button className="mr-3" variant="danger" onClick={toggleModMode}>
              수정
            </Button>
            <ModTask id={id}></ModTask>
            <Button onClick={handleTaskDone}>완료</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default connect(null, { deleteTask, toggleModMode })(TaskItem);
