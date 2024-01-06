import classes from './Button.module.css';
const Button = (props) => {
    return <div className={classes.div}>
       <br /><br /> <button className={classes.button} onClick={props.onGo} disabled={props.disabledd}> {props.children} </button>
    </div>
};
export default Button;