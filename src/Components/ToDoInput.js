import { useState } from 'react';
import Button from './Button';
const ToDoInput = (props) => {

   const [enteredTitle, setEnteredTitle] = useState('');
   const [titleTouched, setTitleTouched] = useState(false);
   const [enteredDate, setEnteredDate] = useState('');
   const [dateTouched, setDateTouched] = useState(false);


    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
    };
    const titleBlurHandler = () => {
        setTitleTouched(true);
    }
    const dateBlurHandler = () => {
        setDateTouched(true);
    }
    const validTitle = enteredTitle.trim().length > 2;
  
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const validDate = enteredDate > '2023-01-01';
    const submitHandler = (event) => {
        event.preventDefault();
        if(formValid){
            const enteredTask = {
            title: enteredTitle,
            date: enteredDate
        };
        props.onSaveTaskData(enteredTask);
        }
        
        
        setEnteredTitle('');
        setEnteredDate('');
        setDateTouched(false);
        setTitleTouched(false);
    };
const inputStyling =  titleTouched && !validTitle ? 'inputbox invalid' : 'inputbox' ;
const dateStyling = dateTouched && !validDate ? 'datepicker invalid' : 'datepicker';
const formValid = validDate && validTitle;
return ( <form onSubmit={submitHandler}>
    <div className='centering'>

        <div>

        <h1 className={!formValid && dateTouched && titleTouched ? 'h1 invalid-header' : 'h1'}> To-Do List</h1>

    {titleTouched && !validTitle ? <label className='error-message'> Enter Task:</label> : <label> Enter Task: </label>}
    <input type="text"
  className={inputStyling} 
  placeholder="Enter Task"
  onChange={TitleChangeHandler}
  onBlur={titleBlurHandler}
  value={enteredTitle}
  required
  /> 
  {titleTouched && !validTitle && <p className='error-message'> Enter Valid Task </p>}
  <br /><br />
  <div> <label className={dateTouched && !validDate ? 'error-message' : ''}> Enter Date:</label>
  <input type="date" 
  className={dateStyling}
  onChange={DateChangeHandler}
  onBlur={dateBlurHandler}
  value={enteredDate}
  min="2023-01-01" 
  max="2023-12-31"
  required
  />
    {dateTouched && !validDate && <p className='error-message'> Enter Valid DATE (date must start from today) </p>}
  <br /><br />

 <Button type='submit' 
 className='submissionbox'
 disabledd={!formValid}
  >Enter</Button><br /><br />
  {!formValid &&<p className='error-message'> Enter Button Enable when inputs filled </p>}
</div>
</div></div>
</form>
);}
export default ToDoInput;