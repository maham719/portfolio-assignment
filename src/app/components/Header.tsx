import Link from "next/link"
export default function Header(){
    return (
        <div className="header " >
            <h1 className="text-2xl font-bold">Welcome!</h1>
            <ul className="flex justify-evenly items-center gap-6">
               <Link href={"/"}> <li>Portfolio</li></Link>
                <Link href={"/about"}><li>About</li></Link>
                <Link href={"/contact"}><li>Contact</li></Link>
            </ul>
        </div>
    )
}