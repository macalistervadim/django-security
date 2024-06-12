import React, { useState } from 'react';
import { ListGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ToDo.css';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2 className="text-center">ToDo List</h2>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <InputGroup.Append>
          <Button onClick={handleAddTask} variant="primary">Add Task</Button>
        </InputGroup.Append>
      </InputGroup>
      <ListGroup>
        <TransitionGroup className="todo-list">
          {tasks.map((task, index) => (
            <CSSTransition key={index} timeout={500} classNames="task">
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleToggleComplete(index)}
                >
                  {task.text}
                </span>
                <Button onClick={() => handleDeleteTask(index)} variant="danger" size="sm">Delete</Button>
              </ListGroup.Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </div>
  );
};

export default ToDo;
