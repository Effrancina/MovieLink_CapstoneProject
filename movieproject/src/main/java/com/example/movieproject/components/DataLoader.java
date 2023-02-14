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




        Movie movie = new Movie("All Quiet on the Western Front", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 8.4);
        movieRepository.save(movie);
        region1.addMovie(movie);
        region2.addMovie(movie);
        region3.addMovie(movie);
        region4.addMovie(movie);
        region5.addMovie(movie);
        region6.addMovie(movie);
        region7.addMovie(movie);
        region8.addMovie(movie);
        region9.addMovie(movie);




        Movie shrek = new Movie("Shrek", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 7.2);
        movieRepository.save(shrek);
        region1.addMovie(shrek);
        region2.addMovie(shrek);
        region3.addMovie(shrek);
        region4.addMovie(shrek);
        region5.addMovie(shrek);
        region6.addMovie(shrek);
        region7.addMovie(shrek);



        Movie batman = new Movie("Batman", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 2.4);
        movieRepository.save(batman);
        region1.addMovie(batman);
        region2.addMovie(batman);
        region4.addMovie(batman);
        region8.addMovie(batman);
        region9.addMovie(batman);



        Movie lordOfTheRings = new Movie("Lord of the Rings", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 6.2);
        movieRepository.save(lordOfTheRings);
        region1.addMovie(lordOfTheRings);
        region2.addMovie(lordOfTheRings);
        region5.addMovie(lordOfTheRings);
        region6.addMovie(lordOfTheRings);
        region3.addMovie(lordOfTheRings);


        Movie harryPotter = new Movie("Harry Potter", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 2.1);
        movieRepository.save(harryPotter);
        region1.addMovie(harryPotter);
        region4.addMovie(harryPotter);
        region8.addMovie(harryPotter);


        Movie psycho = new Movie("Psycho", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 4.7);
        movieRepository.save(psycho);
        region1.addMovie(psycho);
        region2.addMovie(psycho);
        region6.addMovie(psycho);
        region7.addMovie(psycho);
        region8.addMovie(psycho);
        region9.addMovie(psycho);

        Movie pulpFiction = new Movie("Pulp Fiction", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 6);
        movieRepository.save(pulpFiction);
        region3.addMovie(pulpFiction);
        region4.addMovie(pulpFiction);
        region5.addMovie(pulpFiction);
        region6.addMovie(pulpFiction);
        region7.addMovie(pulpFiction);
        region8.addMovie(pulpFiction);

        Movie fightClub = new Movie("Fight Club", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 5);
        movieRepository.save(fightClub);
        region3.addMovie(fightClub);
        region4.addMovie(fightClub);
        region5.addMovie(fightClub);
        region6.addMovie(fightClub);
        region7.addMovie(fightClub);
        

        Movie pokemon = new Movie("Pokemon", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 5);
        movieRepository.save(pokemon);
        region1.addMovie(pokemon);
        region2.addMovie(pokemon);
        region3.addMovie(pokemon);
        region4.addMovie(pokemon);
        region5.addMovie(pokemon);
        region6.addMovie(pokemon);
        region7.addMovie(pokemon);
        region8.addMovie(pokemon);

        Movie forrestGump = new Movie("Forrest Gump", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 7);
        movieRepository.save(forrestGump);
        region7.addMovie(forrestGump);
        region6.addMovie(forrestGump);
        region2.addMovie(forrestGump);
        region3.addMovie(forrestGump);

        Movie spiritedAway = new Movie("Spirited Away", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 9.6);
        movieRepository.save(spiritedAway);
        region1.addMovie(spiritedAway);
        region2.addMovie(spiritedAway);
        region4.addMovie(spiritedAway);
        region5.addMovie(spiritedAway);
        region6.addMovie(spiritedAway);

        Movie starWars = new Movie("Star Wars", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 3.2);
        movieRepository.save(starWars);
        region1.addMovie(starWars);
        region5.addMovie(starWars);
        region6.addMovie(starWars);
        region3.addMovie(starWars);

        Movie americanHistoryX = new Movie("American History X", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 5.6);
        movieRepository.save(americanHistoryX);
        region1.addMovie(americanHistoryX);
        region2.addMovie(americanHistoryX);
        region3.addMovie(americanHistoryX);

        Movie casablanca = new Movie("Casablanca", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 8.1);
        movieRepository.save(casablanca);
        region6.addMovie(casablanca);
        region3.addMovie(casablanca);
        region7.addMovie(casablanca);
        region8.addMovie(casablanca);
        region2.addMovie(casablanca);

        Movie theDeparted = new Movie("The Departed", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 4.7);
        movieRepository.save(theDeparted);
        region9.addMovie(theDeparted);
        region7.addMovie(theDeparted);
        region5.addMovie(theDeparted);
        region3.addMovie(theDeparted);
        region2.addMovie(theDeparted);

        Movie theLionKing = new Movie("The Lion King", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 6);
        movieRepository.save(theLionKing);
        region8.addMovie(theLionKing);
        region6.addMovie(theLionKing);
        region5.addMovie(theLionKing);
        region4.addMovie(theLionKing);

        Movie gladiator = new Movie("Gladiator", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 5);
        movieRepository.save(gladiator);
        region9.addMovie(gladiator);
        region8.addMovie(gladiator);
        region7.addMovie(gladiator);
        region6.addMovie(gladiator);
        region5.addMovie(gladiator);

        Movie oneFlewOverThe = new Movie("One Flew over the Cuckoos Nest", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 5);
        movieRepository.save(oneFlewOverThe);
        region1.addMovie(oneFlewOverThe);
        region6.addMovie(oneFlewOverThe);
        region7.addMovie(oneFlewOverThe);
        region8.addMovie(oneFlewOverThe);

        Movie prideAndPrejudice = new Movie("Pride and Prejudice", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 6.4);
        movieRepository.save(prideAndPrejudice);
        region4.addMovie(prideAndPrejudice);
        region2.addMovie(prideAndPrejudice);
        region5.addMovie(prideAndPrejudice);
        region8.addMovie(prideAndPrejudice);
        region9.addMovie(prideAndPrejudice);
        region6.addMovie(prideAndPrejudice);

        Movie buenaVistaSocialClub = new Movie("Buena Vista Social Club", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 8);
        movieRepository.save(buenaVistaSocialClub);
        region6.addMovie(buenaVistaSocialClub);
        region2.addMovie(buenaVistaSocialClub);
        region8.addMovie(buenaVistaSocialClub);
        region9.addMovie(buenaVistaSocialClub);
        region1.addMovie(buenaVistaSocialClub);
        region7.addMovie(buenaVistaSocialClub);

        Movie untouchable = new Movie("Untouchable", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 7.3);
        movieRepository.save(untouchable);
        region7.addMovie(untouchable);
        region2.addMovie(untouchable);
        region5.addMovie(untouchable);
        region9.addMovie(untouchable);
        region4.addMovie(untouchable);

        Movie cinemaParadiso = new Movie("Cinema Paradiso", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 5.8);
        movieRepository.save(cinemaParadiso);
        region2.addMovie(cinemaParadiso);
        region9.addMovie(cinemaParadiso);
        region8.addMovie(cinemaParadiso);
        region4.addMovie(cinemaParadiso);
        region6.addMovie(cinemaParadiso);
        region1.addMovie(cinemaParadiso);

        Movie memento = new Movie("Memento", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 6.2);
        movieRepository.save(memento);
        region2.addMovie(memento);
        region3.addMovie(memento);
        region1.addMovie(memento);
        region7.addMovie(memento);

        Movie wallE = new Movie("WALL·E ", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 7.2);
        movieRepository.save(wallE);
        region1.addMovie(wallE);
        region3.addMovie(wallE);
        region2.addMovie(wallE);
        region6.addMovie(wallE);
        region9.addMovie(wallE);
        region7.addMovie(wallE);

        Movie pathsOfGlory = new Movie("Paths of Glory", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 5.9);
        movieRepository.save(pathsOfGlory);
        region5.addMovie(pathsOfGlory);
        region6.addMovie(pathsOfGlory);
        region7.addMovie(pathsOfGlory);
        region8.addMovie(pathsOfGlory);
        region9.addMovie(pathsOfGlory);

        Movie theGreatDictator = new Movie("The Great Dictator", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 9.2);
        movieRepository.save(theGreatDictator);
        region2.addMovie(theGreatDictator);
        region7.addMovie(theGreatDictator);
        region9.addMovie(theGreatDictator);
        region1.addMovie(theGreatDictator);
        region3.addMovie(theGreatDictator);

        Movie aliens = new Movie("aliens", "/poster/8731868/s592/the-lord-of-the-rings-the-fellowship-of-the-ring.webp", 4.5);
        movieRepository.save(aliens);
        region1.addMovie(aliens);
        region3.addMovie(aliens);
        region4.addMovie(aliens);
        region6.addMovie(aliens);
        region8.addMovie(aliens);
        region9.addMovie(aliens);


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
