import React, { useState } from "react";
import { Button, Card, FormControl, InputGroup, Modal } from "react-bootstrap";
import { toggleShowMode } from "../../redux/actions";
import moment from "moment";
import { connect } from "react-redux";
import { modTask } from "../../redux/actions";
import axios from "axios";

const ModTask = ({ id, isModMode, toggleShowMode, modTask }) => {
  const [title, setTitle] = useState("");
  const [importance, setImportance] = useState("low");
  const [deadLine, setDeadLine] = useState(
    moment(new Date()).format("yyyy-MM-DDThh:mm")
  );

  const handleTaskSubmit = async () => {
    await axios.put(`http://localhost:5000/tasks/${id}`, {
      title,
      importance,
      deadLine,
    });
    modTask({
      title,
      importance,
      deadLine,
    });
    toggleShowMode();
  };

  return (
    <div>
      <Modal size="lg" show={isModMode} onHide={toggleShowMode} keyboard>
        <Modal.Header closeButton>
          <Modal.Title>일정 수정하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <p className="fs-5">제목</p>
              <InputGroup>
                <FormControl
                  placeholder="제목을 입력하세요"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="mb-4"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </InputGroup>
              <p className="fs-5">중요도</p>
              <InputGroup className="ml-2">
                <div className="form-check container-fluid d-flex justify-content-start mb-4">
                  <div className="mr-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="importance"
                      id="importance-low"
                      required
                      value={0}
                      onChange={(e) => setImportance(e.target.value)}
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="importance-low"
                    >
                      낮음
                    </label>
                  </div>
                  <div className="mr-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="importance"
                      id="importance-mid"
                      value={1}
                      onChange={(e) => setImportance(e.target.value)}
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="importance-mid"
                    >
                      중간
                    </label>
                  </div>
                  <div className="mr-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="importance"
                      id="importance-high"
                      value={2}
                      onChange={(e) => setImportance(e.target.value)}
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="importance-high"
                    >
                      높음
                    </label>
                  </div>
                </div>
                <p className="fs-5">마감기한</p>
                <InputGroup>
                  <FormControl
                    type="datetime-local"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    className="mb-4"
                    onChange={(e) => setDeadLine(e.target.value)}
                    value={deadLine}
                  />
                </InputGroup>
              </InputGroup>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleShowMode}>
            취소
          </Button>
          <Button variant="primary" onClick={() => handleTaskSubmit()}>
            일정 추가
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isModMode } = state.appReducer;
  return { isModMode };
};

export default connect(mapStateToProps, { modTask, toggleShowMode })(ModTask);
