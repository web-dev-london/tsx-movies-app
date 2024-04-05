import { Button, Grid, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react"
import { listOfMovies } from '../DummyData'
import SelectGroup from "../SelectGroup"
import MoviesCount from "../MoviesCount"
import { paginate } from "../Utils/Paginate"
import Like from "../common/Like"
import Pagination from "../common/Pagination"


const Movies = () => {
    const [movies, setMovies] = useState(listOfMovies);
    const [currPage, setCurrPage] = useState(1)
    const pageSize = 3;



    const handlePageChange = (page: number) => {
        console.log('Clicked Page', page);
        setCurrPage(page)
    }

    function handleDelete({ ...movie }) {
        const newMovieList = movies.filter(el => movie.id !== el.id)
        setMovies(newMovieList)
        return movies
    }

    function handleClicked({ ...movie }) {
        const newMovies = movies.map(currentMovie => {
            if (currentMovie.id === movie.id) {
                const redColored = movie.color === ''
                const newColor = redColored ? '#ff0900' : ''
                const newMovie = { ...currentMovie, color: newColor }
                return newMovie
            }
            return currentMovie
        })
        setMovies(newMovies)
    }

    const paginatedMovies = paginate(movies, currPage, pageSize);



    const movieContents =
        paginatedMovies.map(movie =>
            <Tr key={movie.id}>
                <Td>{movie.title}</Td>
                <Td>{movie.genre.name}</Td>
                <Td isNumeric>{movie.numberInStock}</Td>
                <Td isNumeric>{movie.dailyRentalRate}</Td>
                <Td>
                    <Like
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

            <Grid templateColumns='200px 1fr' gap={10}>
                <SelectGroup />

                <TableContainer >
                    <Table variant='simple' className="my-4">
                        <Thead>
                            <Tr>
                                <Th fontSize={13} fontWeight={'900'} color={'black'}>Title</Th>
                                <Th fontSize={13} fontWeight={'900'} color={'black'}>Genre</Th>
                                <Th fontSize={13} fontWeight={'900'} color={'black'}>Stock</Th>
                                <Th fontSize={13} fontWeight={'900'} color={'black'}>Rate</Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {movieContents}
                        </Tbody>
                    </Table>
                    <Pagination
                        itemsCount={movies}
                        currPage={currPage}
                        pageSize={pageSize}
                        onPageChange={handlePageChange} />
                </TableContainer>
            </Grid>


        </>
    )
}

export default Movies