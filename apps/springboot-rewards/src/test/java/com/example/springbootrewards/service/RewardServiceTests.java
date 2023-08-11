package com.example.springbootrewards.service;

import com.example.springbootrewards.entity.Customer;
import com.example.springbootrewards.entity.Transaction;
import com.example.springbootrewards.repository.ICustomerRepository;
import com.example.springbootrewards.repository.ITransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.Collections;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

class RewardServiceTests {
    @InjectMocks
    RewardService rewardService;

    @Mock
    ICustomerRepository customerRepository;

    @Mock
    ITransactionRepository transactionRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getTotalSpentByCustomerInLastThreeMonthsTest() {
        var customer1 = new Customer();
        customer1.setId(1L);
        customer1.setEmail("customer1@example.com");

        var customer2 = new Customer();
        customer2.setId(2L);
        customer2.setEmail("customer2@example.com");

        var customers = Arrays.asList(customer1, customer2);

        when(customerRepository.findAll()).thenReturn(customers);

        var transaction1 = new Transaction();
        transaction1.setCustomer(customer1);
        transaction1.setPurchaseAmount(200.0);
        transaction1.setCreatedAt(new Date());

        var transaction2 = new Transaction();
        transaction2.setCustomer(customer2);
        transaction2.setPurchaseAmount(120.0);
        transaction2.setCreatedAt(new Date());

        when(transactionRepository.findAllByCustomer_IdAndCreatedAtAfter(
                eq(customer1.getId()),
                any(Date.class))
        ).thenReturn(Collections.singletonList(transaction1));

        when(transactionRepository.findAllByCustomer_IdAndCreatedAtAfter(
                eq(customer2.getId()),
                any(Date.class))
        ).thenReturn(Collections.singletonList(transaction2));

        var totals = rewardService.getTotalSpentByCustomerInLastThreeMonths();

        assertEquals(250, totals.get("customer1@example.com").intValue());
        assertEquals(90, totals.get("customer2@example.com").intValue());
    }
}
