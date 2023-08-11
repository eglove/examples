package com.example.springbootrewards.service;

import com.example.springbootrewards.entity.Customer;
import com.example.springbootrewards.entity.Transaction;
import com.example.springbootrewards.repository.ICustomerRepository;
import com.example.springbootrewards.repository.ITransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TransactionService {
    @Autowired
    private final ICustomerRepository customerRepository;
    @Autowired
    private final ITransactionRepository transactionRepository;

    public TransactionService(ICustomerRepository customerRepository, ITransactionRepository transactionRepository) {
        this.customerRepository = customerRepository;
        this.transactionRepository = transactionRepository;
    }

    public Map<String, Integer> getTotalSpentByCustomerInLastThreeMonths() {
        var map = new HashMap<String, Integer>();
        var calendar = Calendar.getInstance();
        calendar.add(Calendar.MONTH, -3);
        var threeMonthsAgo = calendar.getTime();

        var customers = customerRepository.findAll();

        for (Customer customer : customers) {
            double totalPoints = 0.0;
            var transactions = transactionRepository.findAllByCustomer_IdAndCreatedAtAfter(customer.getId(), threeMonthsAgo);

            for (Transaction transaction : transactions) {
                var purchaseAmount = transaction.getPurchaseAmount();

                if (purchaseAmount > 100) {
                    totalPoints += 2 * (purchaseAmount - 100);
                    totalPoints += 50;
                } else if (purchaseAmount > 50) {
                    totalPoints += purchaseAmount - 50;
                }
            }

            map.put(customer.getEmail(), (int) Math.floor(totalPoints));
        }

        return map;
    }
}
