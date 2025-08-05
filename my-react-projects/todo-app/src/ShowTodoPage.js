function ShowTodoPage(props) {
    let todoArr = props.todo;

    function handleClick(e, todoId) {
        // delete todo from todoArr where id=todoId
        todoArr = todoArr.filter(todo => todo.id !== todoId);
        props.setTodo(todoArr);
        alert("Todo Completed");
    }

    return (
        <div class="bg-purple-200 h-[200px] flex justify-center items-center">
            <table border="1">
                <tr>
                    <th>Todo Title</th>
                    <th>Due Date</th>
                    <th>Mark Done</th>
                </tr>
                {
                    todoArr.map((value, index) => (
                        <tr>
                            <td>{value.todoTitle}</td>
                            <td>{value.dueDate}</td>
                            <td><button onClick={(e) => handleClick(e, value.id)}>✅</button></td>
                        </tr>
                    ))
                }

            </table>
        </div>
    )
}

export default ShowTodoPage;