import React from 'react';
import './App.css';
import TaskHeader from './TaskHeader';
import WorldClock from './task1/WorldClock';
import Crud from './task2/Notes';

function App() {
  return (<React.Fragment>
    <div className="task-1">
      <TaskHeader title="Задача 1" />
      <WorldClock />
    </div>
    <div className="task-2">
      <TaskHeader title="Задача 2" />
      <Crud />
    </div>
  </React.Fragment>);
}

export default App;
 