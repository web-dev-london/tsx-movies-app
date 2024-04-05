import { MoviesId } from "../../type";



const MoviesCount = (props: {
    movies: MoviesId[];
}) => {
    if (props.movies.length === 0) {
        return <p>There are no movies in the list</p>
    } else {
        return <p>Showing {props.movies.length} movies in the list.</p>
    }
}

export default MoviesCount