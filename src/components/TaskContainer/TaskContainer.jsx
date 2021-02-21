import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import ModTask from "../ModTask/ModTask";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

const TaskContainer = ({ taskList }) => {
  const [taskListFull, setTaskListFull] = useState(taskList);
  // 난이도 '높음' 일 경우 중요 일정으로 간주
  const [taskListImportant, setTaskListImportant] = useState(
    taskList?.filter((task) => task.importance === "2")
  );

  // 마감일 1일 아래일경우 임박일정으로 간주
  const [taskListUpcoming, setTaskListUpcoming] = useState(
    taskList?.filter(
      (task) =>
        Math.floor(
          (new Date(task.deadLine) - new Date()) / (1000 * 60 * 60 * 24)
        ) <= 1
    )
  );

  // 리덕스의 태스크 목록이 바뀌면 서버에서 데이터 연동
  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((data) => {
      const taskList = data.data;
      setTaskListFull(taskList);
      setTaskListImportant(taskList?.filter((task) => task.importance === "2"));
      setTaskListUpcoming(
        taskList?.filter(
          (task) =>
            Math.floor(
              (new Date(task.deadLine) - new Date()) / (1000 * 60 * 60 * 24)
            ) <= 1
        )
      );
    });
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
  return { taskList };
};

export default connect(mapStateToProps)(TaskContainer);
