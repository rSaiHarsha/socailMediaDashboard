package com.socialMedisDashboard.DashBoardBackend.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private String bio;
    private String contactOptions;
    private String links;

    private Integer followers;
    private Integer following;
    private Integer posts;
    private Integer accountReached;
    private Integer accountEngaged;
    private Integer contentShared;
    private Integer adsRun;
    private Integer activePromotions;
    private Integer totalStories;
    private Integer totalFollows;
    private Integer totalPosts;
    private Integer totalSaves;
    private Integer totalComments;
    private Integer totalShares;
}
