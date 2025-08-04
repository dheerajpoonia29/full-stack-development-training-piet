function Header() {
    return (
        <div>
            <nav className="flex bg-blue-300 p-5 justify-between">
                <div>
                    {/* left section */}
                    <button class="text-white font-bold">Home</button>
                </div>
                <div className="space-x-10">
                    {/* right section */}
                    <button class="text-white font-bold">Profile</button>
                    <button class="text-white font-bold">My Friends</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;