class Movie {
    constructor(title = 'Leo', studio = 'Lyca Production Studio', rating='PG'){
        this.title = title
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(Movie) {
        let res = [];
        for (let movie of Movie){
            if (movie.rating === 'PG'){
                res.push(movie.title);
            }
        }
        return res;
    }

}

let movie1 = new Movie('Leo', 'Lyca Production Studio', 'PG');
let movie2 = new Movie('mickey', 'XYZ studio', 'PG12');
let movie3 = new Movie('Ironman', 'Marvel studio', 'PG');
let movie4 = new Movie('Casino Royale', 'Eon Productions', 'PG13');

console.log(Movie.getPG([movie1, movie2, movie3]));