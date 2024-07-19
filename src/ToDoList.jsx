import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleChange(event) {
        setNewTask(event.target.value);
        
    };

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t =>[...t,newTask]);
            setNewTask("");
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }
       

    function moveUpTask(index) {
       if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
       }
    }

    function moveDownTask(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
           }
    }

    return (
        <div className='main-container'>
            <h1>To-do-List</h1>
            <input className='input' type='text' placeholder='Enter a task' onChange={handleChange} value={newTask}/>
            <button className='addTask' onClick={addTask}>Add</button><br/>

            <div className='div-list'>
                <ol>
                    {tasks.map((task, index) =>
                       <li key={index}>
                            <span className='text'>{task}</span>
                       <button className='deleteButton' onClick={() => removeTask(index)}>Delete</button>
                       <button className='moveButton' onClick={() => moveUpTask(index)}>⬆️</button>
                       <button className='moveButton' onClick={() => moveDownTask(index)}>⬇️</button>
                       </li>
                    )}
                    
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
