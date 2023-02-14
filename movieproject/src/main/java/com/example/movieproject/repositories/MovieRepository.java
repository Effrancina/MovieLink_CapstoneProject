package com.example.movieproject.repositories;

import com.example.movieproject.models.Movie;
import com.example.movieproject.models.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findAllByRegionsId(Long id);
    List<Movie> findMovieByTitle(String title);


    @Query( value= "SELECT * FROM movies ORDER BY random() limit 1", nativeQuery = true)
    Movie findRandomMovie();

}
