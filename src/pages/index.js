import Link from "next/link";
import Nav from "./Navigation";
import Display from "./Display";

function Next() {
    return(
    <>
    <Nav />
    <Display />
    <h1>ADD NEW BOOK</h1>
    <form>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </>
    ) 
}

export default Next;
