const DisplayTodo = (props) => {
    const deleteTodoInChild = (id) => {
        props.deleteTodoInParent(id);
    }
    const listTodo = props.childData;
    return (
        <div>
            <p>List todo</p>

            {listTodo.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => deleteTodoInChild(item.id)}>{item.name}</div>
                )
            })}

        </div>
    )
}
export default DisplayTodo;