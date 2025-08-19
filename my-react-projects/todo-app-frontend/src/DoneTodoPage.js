function DoneTodoPage(props) {
    let todoArr = props.todo;

    return (
        <div class="bg-purple-200 h-[200px] flex justify-center items-center">
            <table border="1">
                <tr>
                    <th>Todo Title</th>
                    <th>Status</th>
                    <th>Completed Date</th>
                </tr>
                {
                    todoArr.map((todo, index) => (
                        todo.status == "completed" && (
                            <tr key={todo.id}>
                                <td>{todo.todoTitle}</td>
                                <td>{todo.status}</td>
                                <td>{todo.completedDate?.toLocaleDateString()}</td>
                            </tr>
                        )
                    ))
                }

            </table>
        </div>
    )
}

export default DoneTodoPage;