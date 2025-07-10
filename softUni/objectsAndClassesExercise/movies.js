// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.


function movieInfoProcessor(commands) {
    const movies = [];

    for (let command of commands) {
        if (command.startsWith("addMovie ")) {
            const name = command.replace("addMovie ", "");
            movies.push({ name });
        } else if (command.includes(" directedBy ")) {
            const [movieName, director] = command.split(" directedBy ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(" onDate ")) {
            const [movieName, date] = command.split(" onDate ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    const completeMovies = movies.filter(
        m => m.name && m.director && m.date
    );

    completeMovies.forEach(m => console.log(JSON.stringify(m)));
}