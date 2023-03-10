package com.example.movieproject.repositories;

import com.example.movieproject.models.Movie;
import com.example.movieproject.models.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {

}
