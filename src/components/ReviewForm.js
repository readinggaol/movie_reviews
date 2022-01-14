

const ReviewForm = () => {
    return (
        <div>
            <form>
                <label>Name of Movie</label>
                <input type="text" name="name" />
                <label>Year Released</label>
                <input type="text" name="year" />
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
            </form>
        </div>
    )
}

export default ReviewForm
