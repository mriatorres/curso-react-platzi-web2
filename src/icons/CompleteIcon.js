import React from 'react';
import { TodoIcon } from './TodoIcon'

function CompleteIcon({ completed, onClick}) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? 'gray' : 'green'}
            completed = {completed}
            onClick={onClick}
        />
    );
}

export { CompleteIcon };