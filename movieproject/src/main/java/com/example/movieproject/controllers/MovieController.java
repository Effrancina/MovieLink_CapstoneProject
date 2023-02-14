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
            @RequestParam(name ="region", required = false) Long id,
            @RequestParam(name="title",required=false) String title,
            @RequestParam(name ="region2", required = false) Long id2) {
        if(id != null && id2 != null){
            return new ResponseEntity<>(movieRepository.findAllByRegionsIdOrRegionsId(id, id2), HttpStatus.OK);
        }
        if(id != null){
            return new ResponseEntity<>(movieRepository.findAllByRegionsId(id), HttpStatus.OK);
        }
        if(title != null){
            return new ResponseEntity<>(movieRepository.findMovieByTitle(title), HttpStatus.OK);
        }
        return new ResponseEntity<>(movieRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value="/movies")
    public ResponseEntity<Movie> postMovies(@RequestBody Movie movie){
        movieRepository.save(movie);
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @GetMapping(value="/movies/{id}")
    public ResponseEntity getMovie(@PathVariable Long id) {
        return new ResponseEntity<>(movieRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping(value="/movies/{id}")
    public ResponseEntity updateMovieById(@PathVariable Long id, @RequestBody Movie movieDetails){
        Movie updateMovie = movieRepository.findById(id).get();
        updateMovie.addToRegions((Region) movieDetails.getRegions().get(0));
        movieRepository.save(updateMovie);
        return new ResponseEntity<>(updateMovie, HttpStatus.OK);
    }

    @GetMapping(value="/movies/random")
    public ResponseEntity<Movie>getRandomMovie(){
        return new ResponseEntity<>(movieRepository.findRandomMovie(), HttpStatus.OK);
    }

    @GetMapping(value="/movies/regions/{id1}/{id2}")
    public ResponseEntity getMovieInTwoRegions(
            @PathVariable("id1") Long id1,
            @PathVariable("id2") Long id2){
        return new ResponseEntity<>(movieRepository.findAllByRegionsIdAndRegionsId(id1, id2), HttpStatus.OK);
    }

}



















