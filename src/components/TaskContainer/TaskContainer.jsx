import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import styled from "styled-components";
import { HIGH } from "../../constants";
import { connect } from "react-redux";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

const TaskContainer = ({ taskList }) => {
  const [taskListFull, setTaskListFull] = useState(taskList);
  const [taskListImportant, setTaskListImportant] = useState(
    taskList.filter((task) => task.importance === 2)
  );

  // 마감일 1일 아래일경우 임박일정으로 간주
  const [taskListUpcoming, setTaskListUpcoming] = useState(
    taskList.filter(
      (task) =>
        Math.floor(
          (new Date(task.deadLine) - new Date()) / (1000 * 60 * 60 * 24)
        ) <= 1
    )
  );

  useEffect(() => {
    setTaskListFull(taskList);
  }, [taskList]);

  return (
    <WrapperContainer>
      <AddTask></AddTask>
      <TaskList
        title="전체 일정"
        amount={taskListFull.length}
        tasks={taskListFull}
      ></TaskList>
      <TaskList
        title="중요 일정"
        amount={taskListImportant.length}
        tasks={taskListImportant}
      ></TaskList>
      <TaskList
        title="마감 임박 일정"
        amount={taskListUpcoming.length}
        tasks={taskListUpcoming}
      ></TaskList>
    </WrapperContainer>
  );
};

const mapStateToProps = (state) => {
  const { taskList } = state.taskReducer;
  console.log(taskList);
  return { taskList };
};

export default connect(mapStateToProps)(TaskContainer);
