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
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping(value="/movies")
    public ResponseEntity<List<Movie>> getAllMovies(
            @RequestParam(name ="region", required = false) Long id,
            @RequestParam(name="title",required=false) String title,
            @RequestParam(name ="region2", required = false) Long id2,
            @RequestParam(name ="region3", required = false) Long id3) {
        if(id != null && id2 != null && id3 !=null){
            return new ResponseEntity<>(movieRepository.findAllBy3RegionsId(id, id2, id3), HttpStatus.OK);
        }
        if(id != null && id2 != null){
            return new ResponseEntity<>(movieRepository.findAllBy2RegionsId(id, id2), HttpStatus.OK);
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
    public ResponseEntity<List<Movie>> getMovieInTwoRegions(
            @PathVariable("id1") Long id1,
            @PathVariable("id2") Long id2){
        return new ResponseEntity<>(movieRepository.findAllByRegionsIdAndRegionsId(id1, id2), HttpStatus.OK);
    }

    @PostMapping(value="/movies/search")
    public ResponseEntity<List<Movie>> getMoviesComplexQuery(@RequestBody HashMap<String, ArrayList<HashMap<String, Long>>> json){
        int user1Len = 0;
        int user2Len = 0;
        if (json.containsKey("user1") && json.containsKey("user2")){
            user1Len = json.get("user1").size();
            user2Len = json.get("user2").size();
        }
        List<Long> user1Ids = new ArrayList<Long>();
        List<Long> user2Ids = new ArrayList<Long>();
        List<Movie> user1List = new ArrayList<Movie>();
        List<Movie> user2List = new ArrayList<Movie>();
        if(user1Len == 0 || user2Len == 0){
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.I_AM_A_TEAPOT);
        }
        else if(user1Len == 1 && user2Len == 1){
            return new ResponseEntity<>(movieRepository.findAllByRegionsIdAndRegionsId(
                    json.get("user1").get(0).get("region"),
                    json.get("user2").get(0).get("region")), HttpStatus.OK);
        } else {
            for (int index=0; index<3; index++) {
                if (index<user1Len){
                    user1Ids.add((Long) json.get("user1").get(index).get("region"));
                }
                if (index<user2Len){
                    user2Ids.add((Long) json.get("user2").get(index).get("region"));
                }
            }
            switch (user1Len) {
                case 1:
                    user1List = movieRepository.findAllByRegionsId((Long) user1Ids.get(0));
                    break;
                case 2:
                    user1List = movieRepository.findAllBy2RegionsId(
                            (Long) user1Ids.get(0),
                            (Long) user1Ids.get(1));
                    break;
                case 3:
                    user1List = movieRepository.findAllBy3RegionsId(
                            (Long) user1Ids.get(0),
                            (Long) user1Ids.get(1),
                            (Long) user1Ids.get(2));
                    break;
            }
            switch (user2Len) {
                case 1:
                    user2List = movieRepository.findAllByRegionsId((Long) user2Ids.get(0));
                    break;
                case 2:
                    user2List = movieRepository.findAllBy2RegionsId(
                            (Long) user2Ids.get(0),
                            (Long) user2Ids.get(1));
                    break;
                case 3:
                    user2List = movieRepository.findAllBy3RegionsId(
                            (Long) user2Ids.get(0),
                            (Long) user2Ids.get(1),
                            (Long) user2Ids.get(2));
                    break;
            }
            for (Movie movie:user1List) {
                System.out.println(movie.getTitle());
            }
            System.out.println("break");
            for (Movie movie:user2List) {
                System.out.println(movie.getTitle());
            }

            List<Movie> finalList = user2List.stream()
                    .filter(user1List::contains)
                    .collect(Collectors.<Movie>toList());

            return new ResponseEntity<>(finalList, HttpStatus.OK);
        }
    }


}



















