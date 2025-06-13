import Link from "next/link";

export default function Aboutlayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>
        <h1>About us</h1>
        <ul>
            <li><Link href='./about/contacts/page'>Contacts</Link></li>
            <li><Link href='./about/team/page'>Team</Link></li>
        </ul>
        {children}
    </div>
}