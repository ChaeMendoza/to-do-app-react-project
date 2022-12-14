import React, {Fragment} from "react";

const CheckBox = (props) => {
    const {
        onChange,
        data: {id, description, done}
    } = props;

    return (
        <Fragment>
            <label className="todo new-item">
                <div className="content">
                    <input
                        className="todo_state"
                        name={id}
                        type="checkbox"
                        defaultChecked={done}
                        onChange={onChange}
                    />
                    <div className="todo__text">{description}</div>
                </div>
            </label>
        </Fragment>
    )
}

export default CheckBox