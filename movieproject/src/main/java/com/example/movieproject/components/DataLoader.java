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

        Region region1 = new Region("GB", "Netflix");


        Region region2 = new Region("AU", "Netflix");


        Region region3 = new Region("US", "Netflix");
        Region region4 = new Region("GB", "Amazon Prime");




        Movie movie = new Movie("All Quiet on the Western Front");
        movieRepository.save(movie);
        region1.addMovie(movie);
        region2.addMovie(movie);
        region3.addMovie(movie);
        region4.addMovie(movie);



//
        Movie shrek = new Movie("Shrek");
        movieRepository.save(shrek);
        region1.addMovie(shrek);
        region2.addMovie(shrek);
        region3.addMovie(shrek);



        Movie batman = new Movie("Batman");
        movieRepository.save(batman);
        region1.addMovie(batman);
        region2.addMovie(batman);
        region3.addMovie(batman);


        Movie lordOfTheRings = new Movie("Lord of the Rings");
        movieRepository.save(lordOfTheRings);
        region1.addMovie(lordOfTheRings);
        region2.addMovie(lordOfTheRings);
        region3.addMovie(lordOfTheRings);


        Movie harryPotter = new Movie("Harry Potter");
        movieRepository.save(harryPotter);
        region1.addMovie(harryPotter);
        region2.addMovie(harryPotter);
        region3.addMovie(harryPotter);


        Movie psycho = new Movie("Psycho");
        movieRepository.save(psycho);
        region1.addMovie(psycho);
        region2.addMovie(psycho);
        region3.addMovie(psycho);

        Movie pulpFiction = new Movie("Pulp Fiction");
        movieRepository.save(pulpFiction);
        region1.addMovie(pulpFiction);
        region2.addMovie(pulpFiction);
        region3.addMovie(pulpFiction);

        Movie fightClub = new Movie("Fight Club");
        movieRepository.save(fightClub);
        region1.addMovie(fightClub);
        region2.addMovie(fightClub);
        region3.addMovie(fightClub);

        Movie forrestGump = new Movie("Forrest Gump");
        movieRepository.save(forrestGump);
        region1.addMovie(forrestGump);
        region2.addMovie(forrestGump);

        Movie spiritedAway = new Movie("Spirited Away");
        movieRepository.save(spiritedAway);
        region1.addMovie(spiritedAway);
        region2.addMovie(spiritedAway);

        Movie starWars = new Movie("Star Wars");
        movieRepository.save(starWars);
        region1.addMovie(starWars);
        region2.addMovie(starWars);

        Movie americanHistoryX = new Movie("American History X ");
        movieRepository.save(americanHistoryX);
        region1.addMovie(americanHistoryX);
        region2.addMovie(americanHistoryX);

        Movie casablanca = new Movie("Casablanca");
        movieRepository.save(casablanca);
        region1.addMovie(casablanca);
        region2.addMovie(casablanca);

        Movie theDeparted = new Movie("The Departed");
        movieRepository.save(theDeparted);
        region1.addMovie(theDeparted);
        region2.addMovie(theDeparted);

        Movie theLionKing = new Movie("The Lion King");
        movieRepository.save(theLionKing);
        region1.addMovie(theLionKing);
        region3.addMovie(theLionKing);

        Movie gladiator = new Movie("Gladiator");
        movieRepository.save(gladiator);
        region1.addMovie(gladiator);
        region3.addMovie(gladiator);

        Movie oneFlewOverThe = new Movie("One Flew over the Cuckoos Nest");
        movieRepository.save(oneFlewOverThe);
        region1.addMovie(oneFlewOverThe);
        region3.addMovie(oneFlewOverThe);

        Movie prideAndPrejudice = new Movie("Pride and Prejudice ");
        movieRepository.save(prideAndPrejudice);
        region1.addMovie(prideAndPrejudice);
        region3.addMovie(prideAndPrejudice);

        Movie buenaVistaSocialClub = new Movie("Buena Vista Social Club");
        movieRepository.save(buenaVistaSocialClub);
        region1.addMovie(buenaVistaSocialClub);
        region3.addMovie(buenaVistaSocialClub);

        Movie untouchable = new Movie("Untouchable");
        movieRepository.save(untouchable);
        region1.addMovie(untouchable);
        region3.addMovie(untouchable);

        Movie cinemaParadiso = new Movie("Cinema Paradiso");
        movieRepository.save(cinemaParadiso);
        region2.addMovie(cinemaParadiso);
        region3.addMovie(cinemaParadiso);

        Movie memento = new Movie("Memento");
        movieRepository.save(memento);
        region2.addMovie(memento);
        region3.addMovie(memento);

        Movie wallE = new Movie("WALL·E ");
        movieRepository.save(wallE);
        region2.addMovie(wallE);
        region3.addMovie(wallE);

        Movie pathsOfGlory = new Movie("Paths of Glory");
        movieRepository.save(pathsOfGlory);
        region2.addMovie(pathsOfGlory);
        region3.addMovie(pathsOfGlory);

        Movie theGreatDictator = new Movie("The Great Dictator ");
        movieRepository.save(theGreatDictator);
        region2.addMovie(theGreatDictator);
        region3.addMovie(theGreatDictator);

        Movie aliens = new Movie("aliens");
        movieRepository.save(aliens);
        region2.addMovie(aliens);
        region3.addMovie(aliens);

        regionRepository.save(region1);
        regionRepository.save(region2);
        regionRepository.save(region3);
        regionRepository.save(region4);












    }
}
