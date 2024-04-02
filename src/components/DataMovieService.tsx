
export const listOfMovies = [
    {
        id: '5b23823ca3eeb7f6fbccd89834983',
        title: 'Poirot',
        genre: {
            id: '5b21ca3eeb7f6fbccd471818',
            name: 'Detective',
        },
        numberInStock: 3,
        dailyRentalRate: 9.5,
        publishDate: '2018-01-03T19:04:28.809Z',
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd471815',
        title: 'Terminator',
        genre: {
            id: '5b21ca3eeb7f6fbccd471818',
            name: 'Action',
        },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: '2018-01-03T19:04:28.809Z',
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd471816',
        title: 'Die Hard',
        genre: {
            id: '5b21ca3eeb7f6fbccd471818',
            name: 'Action',
        },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd471817',
        title: 'Get Out',
        genre: {
            id: '5b21ca3eeb7f6fbccd471820',
            name: 'Thriller',
        },
        numberInStock: 8,
        dailyRentalRate: 3.5,
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd471819',
        title: 'Trip to Italy',
        genre: {
            id: '5b21ca3eeb7f6fbccd471814',
            name: 'Comedy',
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd47181a',
        title: 'Airplane',
        genre: {
            id: '5b21ca3eeb7f6fbccd471814',
            name: 'Comedy',
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd47181b',
        title: 'Wedding Crashers',
        genre: {
            id: '5b21ca3eeb7f6fbccd471814',
            name: 'Comedy',
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd47181e',
        title: 'Gone Girl',
        genre: {
            id: '5b21ca3eeb7f6fbccd471820',
            name: 'Thriller',
        },
        numberInStock: 7,
        dailyRentalRate: 4.5,
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd47181f',
        title: 'The Sixth Sense',
        genre: {
            id: '5b21ca3eeb7f6fbccd471820',
            name: 'Thriller',
        },
        numberInStock: 4,
        dailyRentalRate: 3.5,
        liked: true,
        color: "",
    },
    {
        id: '5b21ca3eeb7f6fbccd471821',
        title: 'The Avengers',
        genre: {
            id: '5b21ca3eeb7f6fbccd471818',
            name: 'Action',
        },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        liked: true,
        color: "",
    },
];

/* export function getMovies() {
    return listOfMovies;
}

export function getMovie(id) {
    return listOfMovies.find((m) => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb =
        listOfMovies.find((m) => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find(
        (g) => g._id === movie.genreId,
    );
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    if (!movieInDb._id) {
        movieInDb._id = Date.now();
        listOfMovies.push(movieInDb);
    }

    return movieInDb;
}

export function deleteMovie(id) {
    let movieInDb = listOfMovies.find((m) => m._id === id);
    listOfMovies.splice(listOfMovies.indexOf(movieInDb), 1);
    return movieInDb;
}
 */