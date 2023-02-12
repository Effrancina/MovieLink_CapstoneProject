package com.example.movieproject.controllers;

import com.example.movieproject.models.Movie;
import com.example.movieproject.models.Region;
import com.example.movieproject.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping(value="/movies")
    public ResponseEntity<List<Movie>> getAllMovies(
            @RequestParam(name ="region1", required = false) Long id1,
            @RequestParam(name ="title", required = false) String title,
            @RequestParam(name ="region2", required = false) Long id2){
        if(id1 != null && id2 != null){
            return new ResponseEntity<>(movieRepository.findMoviesByRegionsIdContains(id1, id2), HttpStatus.OK);
        } else if (id1 != null) {
            return new ResponseEntity<>(movieRepository.findAllByRegionsId(id1), HttpStatus.OK);
        } else if (title != null) {
            return new ResponseEntity<>(movieRepository.findAllByTitle(title), HttpStatus.OK);
        }
        return new ResponseEntity<>(movieRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/movies/{id}")
    public ResponseEntity getMovie(@PathVariable Long id){
        return new ResponseEntity<>(movieRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping(value="/movies/{id")
    public ResponseEntity updateMovie(@PathVariable Long id, @RequestBody Movie movieDetails){
        Movie updateMovie = movieRepository.findById(id).get();
        updateMovie.addToRegions((Region) movieDetails.getRegions());
        movieRepository.save(updateMovie);
        return new ResponseEntity<>(updateMovie, HttpStatus.OK);
    }

    @PostMapping(value="/movies")
    public ResponseEntity<Movie> postMovies(@RequestBody Movie movie){
        movieRepository.save(movie);
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }



}



















