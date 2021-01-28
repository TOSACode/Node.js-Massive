CREATE TABLE movie (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    poster TEXT,
    year VARCHAR(4)
);

INSERT INTO movie 
(title, poster, year)
VALUES
('The Irishman', 'https://upload.wikimedia.org/wikipedia/en/8/80/The_Irishman_poster.jpg', '2019'),
('Under the Skin', 'https://upload.wikimedia.org/wikipedia/en/6/64/Under_the_Skin_poster.png', '2013'),
('Parasite', 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg', '2019'),
('Blade Runner 2049', 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg', '2017'),
('Interstellar', 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg', '2014');
