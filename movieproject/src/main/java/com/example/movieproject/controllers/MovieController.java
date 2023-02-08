package com.example.movieproject.controllers;

import com.example.movieproject.models.Movie;
import com.example.movieproject.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping(value="/movies")
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<>(movieRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value="/movies")
    public ResponseEntity<List<Movie>> postMovies(@RequestBody ArrayList<Movie> movies){
        for (Movie movie : movies){
            movieRepository.save(movie);
        }
        return new ResponseEntity<>(movies, HttpStatus.CREATED);
    }

}



















