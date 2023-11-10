import React from 'react';
import { TodoIcon } from './TodoIcon'

function DeleteIcon({onClick}) {
    return (
        <TodoIcon 
            type="delete"
            color= 'red'
            onClick={onClick}
        />
    );
}

export { DeleteIcon };