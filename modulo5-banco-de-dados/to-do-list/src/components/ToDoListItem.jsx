import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ToDoListItem.module.css'

function ToDoListItem({ text, id, checked, changeCheckedState }) {

    const [checkedState, setCheckedState] = useState(checked)

    function changeCheckboxValue() {
        setCheckedState(!checkedState)
        changeCheckedState(id, !checkedState)
    }

    return (
        <div>
            <input className={styles.input} checked={checkedState} onChange={changeCheckboxValue} type="checkbox"/>
            <label htmlFor="">{text}</label>
        </div>
    )
}

ToDoListItem.propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool
}

export default ToDoListItem
