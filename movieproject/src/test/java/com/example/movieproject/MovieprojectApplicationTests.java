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
		Region region = new Region("UK");
		Movie movie1 = new Movie("All Quiet on the Western Front");
		region.addMovie(movie1);
		Movie movie2 = new Movie("The Grinch");
		region.addMovie(movie2);
		movieRepository.save(movie1);
		movieRepository.save(movie2);
		regionRepository.save(region);
	}



}
