import Header from "./Header"

const ReviewForm = (props) => {

    const formSubmit = (e) => {
        e.preventDefault()
        let my_data = new FormData(e.target)
        my_data = Object.fromEntries(my_data.entries())
        my_data.actors = my_data.actors.split("\n")
        my_data.poster = URL.createObjectURL(my_data.poster)
        let placeholder = props.movies
        placeholder.push(my_data)
        props.setMovies(placeholder)
    }

    return (
        <div>
            <Header title="Submit Review" />
            <form onSubmit ={formSubmit}>
                <label>Name of Movie</label>
                <input type="text" name="name" />
                <label>Year Released</label>
                <input type="text" name="release_date" />
                <label>Lead Actors (Each name on a new line)</label>
                <textarea name="actors"></textarea>
                <label>Star Rating (1-5) </label>
                <select name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="file" name="poster"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm
