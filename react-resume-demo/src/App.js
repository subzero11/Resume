import Header from './components/header'
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] =  useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: "monday",
        reminder: true
    },
    {
        id: 2,
        text: 'Middle School Appointment',
        day: "tuesday",
        reminder: false
    },
    {
        id: 3,
        text: 'Salon Appointment',
        day: "wednesday",
        reminder: true
    },
    
    ])


  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 
    1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id ===id ? 
    {...task, reminder: !task.reminder}: task))
  }
  

  return (
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} 
    showAdd={showAddTask}
    title = 'Task Tracker' />
    {showAddTask &&  <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? 
    (<Tasks tasks = {tasks} 
    onDelete={deleteTask}
    onToggle = {toggleReminder}
    />) 
    : ('No Tasks to show')}
    </div>
  );
}

export default App;
