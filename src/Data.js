const users = [
  {
    id: 1001,
    name: 'User 1',
    email: 'user1@example.com'
  },
  {
    id: 1002,
    name: 'User 1',
    email: 'user1@example.com'
  },
  {
    id: 1003,
    name: 'User 1',
    email: 'user1@example.com'
  },
  {
    id: 1004,
    name: 'User 1',
    email: 'user1@example.com'
  },
  {
    id: 1005,
    name: 'User 1',
    email: 'user1@example.com'
  }
]
const movies = [
  {
    id: 2001,
    title: 'Goldeneye',
    reviews: 3010
  },
  {
    id: 2001,
    title: 'Goldeneye',
    reviews: 3001
  },
  {
    id: 2001,
    title: 'Goldeneye',
    reviews: 3000
  },
  {
    id: 2001,
    title: 'Goldeneye',
    reviews: 3001
  },
  {
    id: 2001,
    title: 'Goldeneye',
    reviews: 3002
  },
  
]
const reviews = [
  {
    id: 3001,
    movie: 2001,
    reviewText: 'Jason Vorhees',
    rating: 4,
    user: 1002,
  },
  {
    id: 3002,
    movie: 2002,
    reviewText: 'Wreck-It Ralph review...',
    rating: 5,
    user: 1001,
  },
  {
    id: 3003,
    movie: 2001,
    reviewText: 'Goldeneye review 2...',
    rating: 4,
    user: 1002,
  },
  {
    id: 3004,
    movie: 2003,
    reviewText: 'Leggo Movie review...',
    rating: 5,
    user: 1002,
  },
  {
    id: 3005,
    movie: 2004,
    reviewText: 'Menace2Society',
    rating: 6,
    user: 1005,
  },
]


module.exports = {
  users,
  movies,
  reviews
}