const AddTodo = (props) => {
    const { todo, setTodo, handleClickbt } = props;
    return (
        <div>
            Todo <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
            <p>Hello To do list, todo = {todo}</p>
            <button onClick={() => handleClickbt()} type="button">Submit</button>
        </div>
    )
}
export default AddTodo;