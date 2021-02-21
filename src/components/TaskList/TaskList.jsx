import React, { useState } from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";

// title : 전체 일정 / 중요 일정 / 마감 임박 일정
// amount : 일정 개수
// tasks : 일정 배열

const TaskList = ({ title, amount, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ListGroup className="mt-3 w-75 d-flex justify-content-center">
      <Card className="border-0">
        <Accordion>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="d-flex justify-content-between"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
            }}
          >
            <span>
              {title} ({amount})
            </span>
            {isOpen ? (
              <i className="bi bi-chevron-double-up" />
            ) : (
              <i className="bi bi-chevron-double-down" />
            )}
          </Accordion.Toggle>
          {/* 아코디언 내용 */}
          <Accordion.Collapse eventKey="0">
            <div>
              {tasks.map((task, idx) => (
                <TaskItem key={idx} props={task}></TaskItem>
              ))}
            </div>
          </Accordion.Collapse>
        </Accordion>
      </Card>
    </ListGroup>
  );
};

const mapStateToProps = (state) => {
  const { taskList } = state.taskReducer;
  return { taskList };
};

export default connect(mapStateToProps)(TaskList);
