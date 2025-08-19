import { Link } from 'react-router-dom'

function Header() {
    return (
        <header class="flex justify-center bg-blue-300">
            <nav class="space-x-4">
                <Link to="/todo-add">
                    <button class="bg-blue-500">Add</button>
                </Link>

                <Link to="/todo-show">
                    <button class="bg-blue-500">Show</button>
                </Link>

                <Link to="/todo-done">
                    <button class="bg-blue-500">Done</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;