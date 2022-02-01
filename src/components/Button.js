
const Button = (props) => {
    return (
        <button className="btn btn-danger" value={props.title} onClick={async () => {
            const post = await fetch('/api/removeMovie',
            {
                method: 'post',
                body: JSON.stringify({'name': props.movie_name}),
                headers: {
                    'Content-type': 'application/json'
                }
            })
        }}>{props.label}</button>
    )
}

export default Button
