package com.example.springbootrewards.controller;

import com.example.springbootrewards.service.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class TransactionController {
    TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/transactions")
    public ResponseEntity<Map<String, Integer>> getCustomerTransactions() {
        var totalSpentByCustomer = transactionService.getTotalSpentByCustomerInLastThreeMonths();

        return new ResponseEntity<>(totalSpentByCustomer, HttpStatus.OK);
    }
}
