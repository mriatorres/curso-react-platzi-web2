import {CompleteIcon} from '../icons/CompleteIcon'
import {DeleteIcon} from '../icons/DeleteIcon'
import './TodoItem.css';

function TodoItem (props) {

  return(
    <li className="TodoItem">
               
        <p 
          className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
          <CompleteIcon
            completed={props.completed}
            onClick={props.onComplete}
        />   
          {props.text}

          <DeleteIcon 
          onClick = {props.onDelete}        
          />
        </p>
     
      
    </li>
  );
}
export { TodoItem };
