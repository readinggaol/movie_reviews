import Header from "./Header"

const ReviewForm = (props) => {

    let fileSubmitted = false;

    const setFileSubmitted = () => {
        fileSubmitted = true;
    }

    const formSubmit = (e) => {
        e.preventDefault()
        let my_data = new FormData(e.target)
        my_data = Object.fromEntries(my_data.entries())
        my_data.actors = my_data.actors.split("\n")
        my_data.poster = URL.createObjectURL(my_data.poster)
        my_data.release_date = parseInt(my_data.release_date)

        let thing = props.movies.filter(movie => movie.name === my_data.name);

        //validate that all fields have been filled
        //then check to see if that movie already exists before adding it
        if(my_data.name === "" || my_data.release_date === "" || my_data.actors === "" || fileSubmitted === false){
            alert("You must complete the form before submitting!")
        }else if(thing.length != []){
            alert("This movie already exists!")
        }else{
            const postMovie = async () => {
                const post = await fetch("/api/addMovie", 
                { method: "post", 
                body: JSON.stringify(my_data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
                const result = await post.json();
                console.log(result);
            }
            postMovie();
            alert("Movie successfully added!")
            e.currentTarget.reset()
        }
    }

    return (
        <div className="form">
            <Header title="Submit Review" />
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <p>Name of Movie</p>
                    <input className="form-control" type="text" name="name" />
                </div>
                <div className="form-group">
                    <p>Year Released</p>
                    <input className="form-control" type="text" name="release_date" />
                </div>
                <div className="form-group">
                    <p>Lead Actors (Each name on a new line)</p>
                    <textarea className="form-control" name="actors"></textarea>
                </div>
                <div className="form-group">
                    <p>Star Rating (1-5) </p>
                    <select className="form-control" name="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                <input type="file" name="poster" onChange={setFileSubmitted}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm
