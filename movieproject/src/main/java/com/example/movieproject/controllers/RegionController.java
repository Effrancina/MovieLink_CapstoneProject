package com.example.movieproject.controllers;

import com.example.movieproject.models.Movie;
import com.example.movieproject.models.Region;
import com.example.movieproject.repositories.MovieRepository;
import com.example.movieproject.repositories.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RegionController {

    @Autowired
    RegionRepository regionRepository;
    MovieRepository movieRepository;

    @GetMapping(value="/regions")
    public ResponseEntity<List<Region>> getAllRegions(){
        return new ResponseEntity<>(regionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/regions/{id}")
    public ResponseEntity getRegion(@PathVariable Long id){
        return new ResponseEntity<>(regionRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value="/regions/{id}")
    public ResponseEntity<List<Movie>> getMoviesForRegion(@PathVariable Long id){
        return new ResponseEntity<>(movieRepository.findAllByRegions(id), HttpStatus.OK);
    }

}
