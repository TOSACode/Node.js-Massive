INSERT INTO movie 
(title, poster, year)
VALUES
($1,$2,$3)
--this will return the full piece of data that we just created
returning * ;