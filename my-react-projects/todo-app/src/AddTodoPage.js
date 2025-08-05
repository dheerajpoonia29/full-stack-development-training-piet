import { useState } from 'react'

function AddTodoPage() {
    let [formData, setFormData] = useState({
        todoTitle: '',
        dueDate: '',
        status: 'pending'
    })

    function handleChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        setFormData(prev => ({
            ...prev,
            [inputName]: [inputValue]
        }))
    }

    function handleSubmit(e) {
        // stringify is function JSON file which take parameter as object/json and return string of it
        alert("form submitted, data = " + JSON.stringify(formData))
    }


    return (
        <div class="bg-pink-200 h-[200px] flex justify-center items-center">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Todo Title</label>
                <input
                    type="text"
                    placeholder="Enter your todo title"
                    name="todoTitle"
                    value={formData.todoTitle}
                    onChange={(e) => handleChange(e)}
                />
                <br />

                <label>Due Date</label>
                <input
                    type="date"
                    placeholder="Enter due date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={(e) => handleChange(e)}
                />
                <br />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddTodoPage;