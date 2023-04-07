import { useRouter } from "next/router";

function Bookcollection() {
    const router = useRouter('henry');
    const booklistId = router.query.booklistId
    return <p>books author {booklistId} </p>
}

export default Bookcollection;