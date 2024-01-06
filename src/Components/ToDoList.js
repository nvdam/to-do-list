import './ToDoInput.css';
const ToDoList = (props) => {

    return (  
      
    <div className='centered' id={props.ide}>
        <div className="task-content">
           
        <h2>{props.titl} <label className='todolist-view'> Due Date : {props.date}</label></h2>
        <div className='place-buttons'>
            <button type='button'className='cancel-button'  >DELETE</button>
            <label>--</label><button type='button'className='edit-button' >EDIT</button>
    
            </div>
        </div>
    </div>
    );

}
export default ToDoList;