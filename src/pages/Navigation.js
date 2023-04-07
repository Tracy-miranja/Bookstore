import Link from "next/link";

function Nav(){
    return(
        <>
        <div>
            BOOKSTORE CMS
        </div>
        <ul>
        <Link href='/'>BOOKS</Link>
        <Link href='./Categories'>CATEGORIES</Link>
        </ul>
        <div>
            <h1>image</h1>
        </div>
        </>
    )
}
export default Nav;