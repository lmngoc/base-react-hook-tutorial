import React, { useState } from "react";
import _ from "lodash";
import DisplayTodo from "./DisplayTodo";
import AddTodo from "./AddTodo";
const ToDoList = () => {
    //init state
    const [todo, setTodo] = useState('');
    const [listTodo, setListTodo] = useState([
        { id: "todo1", name: "watching youtube" },
        { id: "todo2", name: "using facebook" },
        { id: "todo3", name: "Reading book" }
    ])
    //why const?
    //
    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    const handleClickbt = () => {
        if (!todo) {
            alert("todo is not empty");
            return;
        }
        let todoId = randomIntFromInterval(4, 999999)
        let todoItem = {
            id: `todo${todoId}`,
            name: todo
        }
        setListTodo([...listTodo, todoItem]);
        setTodo("");
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        setListTodo(currentTodoList);
    }
    return (
        <div >


            <AddTodo todo={todo} setTodo={setTodo} handleClickbt={handleClickbt} />
            <DisplayTodo childData={listTodo} deleteTodoInParent={handleDeleteTodo} />

        </div>
    )

}
// class ToDoList extends React.Component {
//     state = {
//         name: ''
//     }
//     render() {
//         return (
//             <div style={{ color: "red", background: 'grey' }}>
//                 Name <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
//                 Hello To do list, name = {this.state.name}
//             </div>
//         )
//     }
// }
export default ToDoList;