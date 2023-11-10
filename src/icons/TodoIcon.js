import './TodoIcon.css'
import {FiXCircle} from "react-icons/fi";
import {FiCheckCircle} from "react-icons/fi";

const iconTypes = {
    "check": (color) => <FiCheckCircle className={`Icon-svg Icon-delete`} fill={color}/>,
    "delete": (color) => <FiXCircle className={`Icon-svg Icon-complete`}fill={color}/>,
};

function TodoIcon({ type , onClick , completed, color}) {
    return (
        <span
            className={`Icon-container Icon-container-${type} ${completed ? `Icon-${type}--active` : ''}`}
            onClick = {onClick}
        >
            {iconTypes[type] (color)}
        </span>
    )
}

export { TodoIcon };
