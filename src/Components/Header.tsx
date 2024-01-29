import Link from "next/link";

function Header() {
    return (
        <header className="py-10">
            <div className="container">
                <nav>
                    <ul className="flex items-center justify-center gap-10 text-lg font-bold uppercase tracking-wider text-gray-300">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link href="/todo">Todo</Link>
                        </li>
                        <li>
                            <Link href="/photos">Photos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;