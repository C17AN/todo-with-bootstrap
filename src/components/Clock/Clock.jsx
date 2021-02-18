import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleAddMode } from "../../redux/actions";

const Clock = ({ toggleAddMode }) => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <Card className="text-center mb-5">
      <Card.Body className="text-center d-flex justify-content-between">
        <h3>{time}</h3>
        <Button onClick={toggleAddMode}>새로운 일정 추가</Button>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { toggleAddMode })(Clock);
