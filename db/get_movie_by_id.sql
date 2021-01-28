SELECT * FROM movie 
WHERE movie_id = $1  -- this will search for a movie where by id.  {the $1 is a dynamict variable also know as a positional agument. the one is in reference to the first position in the array that you are passing in} 
