package com.example.movieproject.components;

import com.example.movieproject.models.Movie;
import com.example.movieproject.models.Region;
import com.example.movieproject.repositories.MovieRepository;
import com.example.movieproject.repositories.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test") //Run every time EXCEPT Tests
@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    MovieRepository movieRepository;

    @Autowired
    RegionRepository regionRepository;
    public DataLoader() {}
    public void run(ApplicationArguments args) {

        Region region1 = new Region("Great Britain", "Amazon Prime");
        Region region2 = new Region("Great Britain", "Disney Plus");
        Region region3 = new Region("Great Britain", "Netflix");
        Region region4 = new Region("United States", "Amazon Prime");
        Region region5 = new Region("United States", "Disney Plus");
        Region region6 = new Region("United States", "Netflix");
        Region region7 = new Region("Australia", "Amazon Prime");
        Region region8 = new Region("Australia", "Disney Plus");
        Region region9 = new Region("Australia", "Netflix");


        regionRepository.save(region1);
        regionRepository.save(region2);
        regionRepository.save(region3);
        regionRepository.save(region4);
        regionRepository.save(region5);
        regionRepository.save(region6);
        regionRepository.save(region7);
        regionRepository.save(region8);
        regionRepository.save(region9);












    }
}
