import { useRouter } from "next/router";
import { use } from "react";

function Display(){
  const router = useRouter();
  const bookLists=[
    {
      id: 1,
      categories: 'Action',
      Title: 'The Hunger Games',
      Author: 'Suzanne-Collins',
    },
  ];
    return( 
        <div>
           <ul>
           {bookLists.map((bookList) =>(
            <li key={bookList.id}>
              <div>
              <h1>{bookList.categories}</h1>
              <h2>{bookList.Title}</h2>
             <h4>{bookList.Author}</h4>
             <div>
              <button>comments</button>
              <button>Remove</button>
              <button>Edit</button>
             </div>
             </div>
             </li> 
           )
           )}
        </ul>
    
      </div>
    )
}

export default Display;