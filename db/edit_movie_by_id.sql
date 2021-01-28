UPDATE movie
SET title=$1, poster=$2, year=$3
WHERE movie_id = $4
returning * ;