import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import ReactPlayer from "react-player";

export function MovieDetailsPage() {
  const { id } = useParams(); // Extract the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]); // Fetch the movie details whenever the ID changes

  if (loading) {
    return <CircularProgress />;
  }

  if (!movie) {
    return <div>Movie details not found.</div>;
  }

  return (
    <div className="movie-details">
      <Card>
        <CardContent>
          <Typography variant="h4">{movie.name}</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: movie.summary }}
          />
          <img src={movie.image.original} alt={movie.name} />
          <Typography variant="body2">
            Genres: {movie.genres.join(", ")}
          </Typography>
          <Typography variant="body2">Language: {movie.language}</Typography>
          <Typography variant="body2">
            Rating: {movie.rating.average}
          </Typography>
          {/* Video player for the movie trailer */}
          <div className="video-player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
