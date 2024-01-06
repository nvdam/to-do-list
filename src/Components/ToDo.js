import ToDoList from "./ToDoList"
const ToDo = (props) => {
    
    const  todotasks = props.items;


    return(
    <div className="display_todo">
        {todotasks.map((tasks) => (
         
        <ToDoList
        titl={tasks.title}
        date={tasks.date}
         />
         
         ))}
         {/* </div>
         <div>
          {todotasks2.map((task) => (
        <ToDoList
        titl2={task.title}
         />
         
         ))} */}
    {/* //       <ToDoList titl={props.items[0].title}/>
    //   <ToDoList titl={props.items[1].title}/>
    //   <ToDoList titl={props.items[2].title}/>
    //   <ToDoList titl={props.items[3].title}/></div> */}

 </div>
);}
export default ToDo;


