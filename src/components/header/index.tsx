import Link from "next/link"

const links = [
    { name: "Blog", to: '/blog'},
    { name: "Courses", to: '/courses'},
    { name: "Discord", to: '/discord'},
    { name: "Chats", to: '/chats'},
    { name: "Calls", to: '/calls'},
    { name: "Workshops", to: '/workshops'},
    { name: "About", to: '/about'} 
]

function Header() {
    return (
        <nav className="flex justify-between items-center text-gray p-10 text-2xl bg-transparent">
            <div className="text-white bg-gradient-to-r from-[#77C167] to-[#1A88F9] bg-clip-text font-semibold text-transparent">
                kent C.Dodds
            </div>

            <ul className="flex gap-4 bg-transparent">
                {links.map(link => (
                    <li className="hover:underline" key={link.to}>
                        <Link href={link.to}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div>
                <Link href="/signin">
                    <p className="bg-gradient-to-r from-[#2D79FF] to-[#22B4FD] text-white p-2 rounded-md">
                        Sign In
                    </p>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
