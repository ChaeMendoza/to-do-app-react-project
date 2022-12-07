import React, {useState} from "react";
import TaskList from "./TaskList.jsx";
import FormTodo from "./FormTodo.jsx";

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    }

    return (
        <div className="Container">
            <FormTodo handleAddItem={handleAddItem} />
            <TaskList list={list} setList={setList} />
        </div>
    )
}

export default Container