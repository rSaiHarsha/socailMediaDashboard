package com.socialMedisDashboard.DashBoardBackend.service;

import com.socialMedisDashboard.DashBoardBackend.model.User;
import com.socialMedisDashboard.DashBoardBackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) throws Exception {
        return userRepository.findById(id).orElseThrow(() -> new Exception("User not found"));
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) throws Exception {
        User user = userRepository.findById(id).orElseThrow(() -> new Exception("User not found"));
        user.setName(userDetails.getName());
        user.setCategory(userDetails.getCategory());
        user.setBio(userDetails.getBio());
        user.setContactOptions(userDetails.getContactOptions());
        user.setLinks(userDetails.getLinks());
        user.setFollowers(userDetails.getFollowers());
        user.setFollowing(userDetails.getFollowing());
        user.setPosts(userDetails.getPosts());
        user.setAccountReached(userDetails.getAccountReached());
        user.setAccountEngaged(userDetails.getAccountEngaged());
        user.setContentShared(userDetails.getContentShared());
        user.setAdsRun(userDetails.getAdsRun());
        user.setActivePromotions(userDetails.getActivePromotions());
        user.setTotalStories(userDetails.getTotalStories());
        user.setTotalFollows(userDetails.getTotalFollows());
        user.setTotalPosts(userDetails.getTotalPosts());
        user.setTotalSaves(userDetails.getTotalSaves());
        user.setTotalComments(userDetails.getTotalComments());
        user.setTotalShares(userDetails.getTotalShares());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
