package com.example.movieproject.repositories;

import com.example.movieproject.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findAllByRegionsId(Long id);
    List<Movie> findMovieByTitle(String title);

    @Query(value="(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?1)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?2)", nativeQuery = true)
    List<Movie> findAllByRegionsIdOrRegionsId(Long id, Long id2);

    @Query( value= "SELECT * FROM movies ORDER BY random() limit 1", nativeQuery = true)
    Movie findRandomMovie();

    @Query(value="WITH movies1 AS (SELECT movies.id AS mid\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?2)\n" +
            "SELECT movies.id, movies.poster, movies.score, movies.title FROM movies1\n" +
            "INNER JOIN movies\n" +
            "ON movies1.mid = movies.id\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?1", nativeQuery = true)
    List<Movie> findAllByRegionsIdAndRegionsId(Long id, Long id2);

    



}
