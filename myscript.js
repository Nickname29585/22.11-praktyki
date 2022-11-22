const books = [
    { title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5 },
    { title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2 },
    { title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7 },
    { title: '10th Joy', pages: 32, genre: 'action', rating: 8 },
    { title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1 },
    { title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3 },
    { title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9 },
    { title: '300', pages: 600, genre: 'criminology', rating: 10 },
    { title: 'Renewer', pages: 472, genre: 'biology', rating: 2 },
    { title: '2012', pages: 313, genre: 'thriller', rating: 7 }
];
//PRZYKŁADY:
//tworzymy funkcje
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({ pages }) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage);
//zad 6
const ifPagesEven = (book) => book.filter((bok) => bok.pages % 2 == 0);
const endsOnY = (book) => book.filter((bok) => bok.genre.endsWith("y"));
const countTitle = (book) => book.map((bok) => bok.title.split(" ").join("").length);

//zad 7 
const titleWithNumber = (book) => book.filter((bok) => /[0-9]/.test(bok.title));
const ifPagesOdd = (book) => book.filter((bok) => bok.pages % 2 == 1);
const ifRatingHigherThan5 = (book) => book.filter((bok) => bok.rating > 5).length;

//zad 8
const title = (book) => book.map((book) => book.title);
const longestTitle = (title) => title.sort((a,b) =>  b.length - a.length)[1];

//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);


//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);

const zad6 = compose(countTitle, endsOnY, ifPagesEven);
const zad7 = compose(ifRatingHigherThan5, ifPagesOdd, titleWithNumber);
const zad8 = compose(longestTitle, title);

//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));

console.log(zad6(books));
console.log(zad7(books));
console.log(zad8(books));

