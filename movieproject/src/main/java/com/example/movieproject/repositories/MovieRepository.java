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
    List<Movie> findAllBy2RegionsId(Long id, Long id2);

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
            "WHERE regions_movies.region_id = ?2)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?3)", nativeQuery = true)
    List<Movie> findAllBy3RegionsId(Long id, Long id2, Long id3);
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
            "WHERE regions_movies.region_id = ?2)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?3)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?4)", nativeQuery = true)
    List<Movie> findAllBy4RegionsId(Long id, Long id2, Long id3, Long id4);
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
            "WHERE regions_movies.region_id = ?2)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?3)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?4)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?5)\n", nativeQuery = true)
    List<Movie> findAllBy5RegionsId(Long id, Long id2, Long id3, Long id4, Long id5);
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
            "WHERE regions_movies.region_id = ?2)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?3)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?4)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?5)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?6)\n", nativeQuery = true)
    List<Movie> findAllBy6RegionsId(Long id, Long id2, Long id3, Long id4, Long id5, Long id6);
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
            "WHERE regions_movies.region_id = ?2)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?3)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?4)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?5)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?6)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?7)", nativeQuery = true)
    List<Movie> findAllBy7RegionsId(Long id, Long id2, Long id3, Long id4, Long id5, Long id6, Long id7);
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
            "WHERE regions_movies.region_id = ?2)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?3)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?4)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?5)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?6)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?7)\n" +
            "UNION\n" +
            "(SELECT movies.id, movies.poster, movies.score, movies.title\n" +
            "FROM movies\n" +
            "INNER JOIN regions_movies\n" +
            "ON movies.id = regions_movies.movie_id\n" +
            "WHERE regions_movies.region_id = ?8)", nativeQuery = true)
    List<Movie> findAllBy8RegionsId(Long id, Long id2, Long id3, Long id4, Long id5, Long id6, Long id7, Long id8);

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
