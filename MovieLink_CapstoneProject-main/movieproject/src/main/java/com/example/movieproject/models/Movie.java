package com.example.movieproject.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;

    @Column(name="poster")
    private String poster;

    @Column(name="score")
    private double score;
    @ManyToMany
    @JsonIgnoreProperties({"movies"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "regions_movies",
            joinColumns = {@JoinColumn(
                    name ="movie_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "region_id",
                    nullable = false,
                    updatable = false

            )}
    )
    private List<Region> regions;



    public Movie() {
    }

    public Movie(String title, String poster, double score) {
        this.title = title;
        this.poster = poster;
        this.score = score;
        this.regions = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public List<Region> getRegions() {
        return regions;
    }

    public void setRegions(List<Region> regions) {
        this.regions = regions;
    }

    public void addToRegions(Region region){
        this.regions.add(region);
    }

}
