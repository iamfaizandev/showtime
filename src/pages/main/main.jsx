import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { SignOutHeader } from "../signoutheader/signoutHeader";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import {
  CircularProgress,
  Skeleton,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import axios from "axios";
import "./main.css";

export function MainPage() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "Email",
    "fName",
    "lName",
  ]);
  const [userDetails, setUserDetails] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      }
    }
  };

  const fetchMovies = () => {
    axios.get("https://api.tvmaze.com/shows").then((res) => {
      setMovies(res.data);
      setIsLoading(false); // Move setIsLoading to here for better timing
    });
  };

  useEffect(() => {
    fetchUserData();
    fetchMovies();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    const sortedMovies = [...movies];
    if (e.target.value === "rating-high-to-low") {
      sortedMovies.sort((a, b) => b.rating.average - a.rating.average);
    } else if (e.target.value === "rating-low-to-high") {
      sortedMovies.sort((a, b) => a.rating.average - b.rating.average);
    } else if (e.target.value === "alphabetical") {
      sortedMovies.sort((a, b) => a.name.localeCompare(b.name));
    }
    setMovies(sortedMovies);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main_page">
      <SignOutHeader />
      <div className="header">
        {userDetails && (
          <div className="user-greeting">
            Welcome, {userDetails.firstName} {userDetails.lastName}!
          </div>
        )}
        <FormControl variant="outlined" className="sort-select sortPhone">
          <InputLabel>Sort By</InputLabel>
          <Select
            fullWidth
            value={sortOption}
            onChange={handleSortChange}
            label="Sort By"
            className=""
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="rating-high-to-low">Rating High to Low</MenuItem>
            <MenuItem value="rating-low-to-high">Rating Low to High</MenuItem>
            <MenuItem value="alphabetical">Alphabetical</MenuItem>
          </Select>
        </FormControl>
      </div>
      <section className="search-section">
        <TextField
          label="Search Movies"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </section>
      <section className="movies-section">
        <Grid container spacing={3} justifyContent="center">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                {isLoading ? (
                  <Skeleton variant="rectangular" width={300} height={400} />
                ) : (
                  <Card className="movieCard">
                    <div className="imageContainer">
                      <CardMedia
                        className="cardImg"
                        component="img"
                        image={movie.image.original}
                        alt={movie.name}
                      />
                    </div>
                    <CardContent className="cardContent">
                      <Typography variant="body2" color="text.white">
                        <div className="h5 mt-4">
                          Language: {movie.language}, <br />
                          Genres: {movie.genres.join(", ")}, <br />
                          Rating: {movie.rating.average}, <br />
                          Status: {movie.status}
                        </div>
                        <Link to={`/shows/${movie.id}`}>
                          <Button
                            variant="contained"
                            className="overlayButton"
                            size="large"
                          >
                            View Details
                          </Button>
                        </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Grid>
            ))
          ) : (
            <div className="mt-4">
              <CircularProgress />
            </div>
          )}
        </Grid>
      </section>
    </div>
  );
}
