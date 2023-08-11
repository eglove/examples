package com.example.springbootrewards.controller;

import com.example.springbootrewards.service.RewardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class RewardController {
    RewardService rewardService;

    public RewardController(RewardService rewardService) {
        this.rewardService = rewardService;
    }

    @GetMapping("/rewards")
    public ResponseEntity<Map<String, Integer>> getCustomerTransactions() {
        var totalSpentByCustomer = rewardService.getTotalSpentByCustomerInLastThreeMonths();

        return new ResponseEntity<>(totalSpentByCustomer, HttpStatus.OK);
    }
}
