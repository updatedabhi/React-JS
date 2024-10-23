const data = [
  {
    id: 1,
    title: "The Silent Forest",
    publicationDate: "2022-05-15",
    author: "John Green",
    genres: ["Mystery", "Thriller"],
    hasMovieAdaption: true,
    pages: 350,
    translations: {
      Spanish: "El Bosque Silencioso",
      French: "La Forêt Silencieuse",
    },
    reviews: {
      rating: 4.5,
      comments: ["Gripping story", "Excellent characters"],
      goodreads: {
        rating: 4.3,
        ratingCount: 2150,
        reviewCount: 350,
      },
    },
  },
  {
    id: 2,
    title: "Echoes of the Past",
    publicationDate: "2019-08-23",
    author: "Emily Brontë",
    genres: ["Historical", "Drama"],
    hasMovieAdaption: false,
    pages: 280,
    translations: {
      German: "Echos der Vergangenheit",
      Italian: "Echi del Passato",
    },
    reviews: {
      rating: 4.0,
      comments: ["Rich in history", "A bit slow in the middle"],
      goodreads: {
        rating: 3.8,
        ratingCount: 1280,
        reviewCount: 200,
      },
    },
  },
  {
    id: 3,
    title: "The Infinite Sky",
    publicationDate: "2021-11-12",
    author: "Alice Walker",
    genres: ["Science Fiction", "Adventure"],
    hasMovieAdaption: true,
    pages: 420,
    translations: {
      Japanese: "無限の空",
      Russian: "Бесконечное небо",
    },
    reviews: {
      rating: 4.7,
      comments: ["Thrilling read", "Amazing world-building"],
      goodreads: {
        rating: 4.6,
        ratingCount: 3500,
        reviewCount: 500,
      },
    },
  },
  {
    id: 4,
    title: "Whispers of the Wind",
    publicationDate: "2018-03-07",
    author: "Haruki Murakami",
    genres: ["Fantasy", "Magical Realism"],
    hasMovieAdaption: false,
    pages: 310,
    translations: {
      Korean: "바람의 속삭임",
      Portuguese: "Sussurros do Vento",
    },
    reviews: {
      rating: 4.3,
      comments: ["Beautifully written", "Hauntingly poetic"],
      goodreads: {
        rating: 4.2,
        ratingCount: 1700,
        reviewCount: 300,
      },
    },
  },
  {
    id: 5,
    title: "Beneath the Waves",
    publicationDate: "2020-07-19",
    author: "Margaret Atwood",
    genres: ["Literary Fiction", "Drama"],
    hasMovieAdaption: true,
    pages: 380,
    translations: {
      Chinese: "波浪下",
      Arabic: "تحت الأمواج",
    },
    reviews: {
      rating: 4.6,
      comments: ["Deeply moving", "Masterfully crafted"],
      goodreads: {
        rating: 4.5,
        ratingCount: 2600,
        reviewCount: 400,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((book) => book.id === id);
}

const book = getBook(2);
// const title = book.title;
// const author = book.author;

const { title, author, genres } = book;

const [primaryGenre, secondaryGenre] = genres;

// console.log(title, author, genres);

// console.log(primaryGenre, secondaryGenre);

// const updatedBook = {...book, moviePublicationDate: "2019-02-19"};
// console.log(updatedBook);

// const getYear = date => date.split("-")[0];

// console.log(getYear("2023-04-20"));

// console.log("" && "Abhishek");
// console.log('' && "Abhishek");
console.log("Sonam" && "Abhishek");
console.log(null && "Abhishek");
console.log(false && "Abhishek");
console.log(0 && "Abhishek");

console.log(false || "Sonam");
console.log("Abhishek" || "Sonam");
console.log(undefined || "Pig");
console.log('' || "some string");

console.log(0 || 0)
