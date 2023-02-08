package com.example.movieproject;

import com.example.movieproject.models.Movie;
import com.example.movieproject.models.Region;
import com.example.movieproject.repositories.MovieRepository;
import com.example.movieproject.repositories.RegionRepository;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


@ActiveProfiles("test")
@SpringBootTest
class MovieprojectApplicationTests {
	@Autowired
	MovieRepository movieRepository;
	@Autowired
	RegionRepository regionRepository;
	@Test
	void contextLoads() {
	}

	@Test
	public void addMovie(){

		Region region = new Region("GB", "Netflix");
		Movie movie = new Movie("All Quiet on the Western Front");
		region.addMovie(movie);
		movieRepository.save(movie);
		regionRepository.save(region);
	}

	@Test
	public void canFindAllMoviesByRegion(){
		List<Movie> found = movieRepository.findAllByRegionsId(1L);
		assertTrue(found.size()>0);
		assertEquals("All Quiet on the Western Front", found.get(0).getTitle());
	}

}
