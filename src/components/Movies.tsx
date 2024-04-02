
import { Button, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { listOfMovies } from './DataMovieService'
import MoviesCount from "./MoviesCount"
import Like from "./common/Like"
import { useState } from "react"


const Movies = () => {
    const [movies, setMovies] = useState(listOfMovies);

    function handleDelete({ ...movie }) {
        const newMovieList = movies.filter(el => movie.id !== el.id)
        setMovies(newMovieList)
        return movies
    }

    function handleClicked({ ...movie }) {
        const newMovies = movies.map(currentMovie => {
            if (currentMovie.id === movie.id) {
                const redColored = movie.color === ''
                const newColor = redColored ? 'red' : ''
                const newMovie = { ...currentMovie, color: newColor }
                return newMovie
            }
            return currentMovie
        })
        setMovies(newMovies)
    }



    const movieContents =
        movies.map(movie =>
            <Tr key={movie.id}>
                <Td>{movie.title}</Td>
                <Td>{movie.genre.name}</Td>
                <Td isNumeric>{movie.numberInStock}</Td>
                <Td>{movie.dailyRentalRate}</Td>
                <Td>
                    <Like liked={movie.liked}
                        color={movie.color}
                        onClick={() => handleClicked(movie)} />
                </Td>
                <Td>
                    <Button onClick={() => handleDelete(movie)}
                        colorScheme='red'>Button</Button>
                </Td>
                <Td>
                </Td>
            </Tr>)



    return (
        <>
            <Heading mb='7' as='h3' size='lg'>
                <MoviesCount movies={movies} />
            </Heading>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Genre</Th>
                            <Th>Stock</Th>
                            <Th>Rate</Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {movieContents}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Movies