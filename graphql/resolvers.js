import {getMovies} from "../db/db.js"

const resolvers = {
    Query: {
        movies: (_,{rating,limit}) => getMovies(limit, rating),
    },
}

export default resolvers