import { useState } from 'react';
import ToDo from './Components/ToDo'
import NewToDo from './Components/NewToDo';
import Button from './Components/Button';

const DUMMY_TASKS = [
  {
      id: 1,
      title: 'Assignment1 due on 29th Sep',
      date: '12-12-2023'
  },
  {
    id: 2,
    title: 'Assignment2 due on 1st Oct',
    date: '12-12-2023'
  },
  {
    id: 3,
    title: 'Assignment3 is Due on 3rd Oct',
    date: '12-12-2023'
  },
  {
    id: 4,
    title: 'Assignment4 is due on 4th Nov',
    date: '12-12-2023'
  }
];


function App(props) {

const [task, setTasks] = useState(DUMMY_TASKS);
const [showTasks, setShowTasks] = useState(false);
const showTaskManager = () =>
{
  setShowTasks((prevShow) => !prevShow);
}

const addTaskHandler = (task) => {
  setTasks((prevTask) => {
    return [task, ...prevTask];
    
  }
  );

};
  return (
    <div>
        <NewToDo onAddToDo={addTaskHandler} /> 
        { <Button onGo= {showTaskManager} >{!showTasks ? 'Show' : 'Hide'} Tasks</Button>}
      <center><h1>{ !showTasks ? 'Click on the Show Tasks Button, "to Display all your tasks"' : 'Click on the Hide Tasks Button, "to hide all your tasks"'}</h1></center>
       {showTasks && <ToDo items={task}  />}
    </div>
  );
}

export default App;