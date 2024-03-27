import { Button, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react"
import { listOfMovies, MoviesId } from './fakeMovieService'


const Movies = () => {
    const [movies, setMovies] = useState(listOfMovies)

    const handleDelete = (movie: MoviesId) => {
        const newMovieList = movies.filter(el => movie.id !== el.id)
        setMovies(newMovieList)
        return movies
    }

    const movieContents =
        movies.map(movie =>
            <Tbody key={movie.id}>
                <Td>{movie.title}</Td>
                <Td>{movie.genre.name}</Td>
                <Td isNumeric>{movie.numberInStock}</Td>
                <Td>{movie.dailyRentalRate}</Td>
                <Td><Button onClick={() => handleDelete(movie)} colorScheme='red'>Button</Button></Td>
            </Tbody>)

    function countLength() {
        if (movies.length === 0) {
            return `There are no movies in the list.`
        } else {
            return `Showing ${movies.length} movies in the list.`
        }
    }

    return (
        <>
            <Heading mb='7' as='h3' size='lg'>
                {countLength()}
            </Heading>
            <TableContainer>
                <Table variant='simple'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Genre</Th>
                            <Th>Stock</Th>
                            <Th>Rate</Th>
                        </Tr>
                    </Thead>
                    {movieContents}
                </Table>
            </TableContainer>
        </>
    )
}

export default Movies