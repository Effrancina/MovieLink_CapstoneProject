package com.example.movieproject.repositories;

import com.example.movieproject.models.Movie;
import com.example.movieproject.models.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findAllByRegionsId(Long id);

    List<Movie> findAllByTitle(String title);

    List<Movie> findMoviesByRegionsIdContains(Long regionId1, Long regionId2);

}
