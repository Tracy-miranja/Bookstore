function Books(){
    return( 
        <div>
    <h1>books pageProps</h1>
    <form>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
      </div>
    )
}

export default Books;