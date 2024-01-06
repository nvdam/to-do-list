import ToDoInput from "./ToDoInput"
const NewToDo = (props) => {
    const saveTaskDataHandler = (enteredToDodata) => {
        const expenseData = {
            ...enteredToDodata,
           
        };
        props.onAddToDo(expenseData);
    };
    return (<div >
        <ToDoInput onSaveTaskData={saveTaskDataHandler}/>
    </div>);
};
export default NewToDo;