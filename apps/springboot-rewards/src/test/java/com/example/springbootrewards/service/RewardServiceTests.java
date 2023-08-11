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

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
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
        var customer1 = createCustomer(1L, "customer1@example.com");
        var customer2 = createCustomer(2L, "customer2@example.com");
        var customer3 = createCustomer(3L, "customer3@example.com");

        mockCustomers(List.of(customer1, customer2, customer3));

        var transaction1 = createTransaction(customer1, 150.0);
        var transaction2 = createTransaction(customer1, 52.0);
        var transaction3 = createTransaction(customer2, 120.0);
        var transaction4 = createTransaction(customer3, 57.0);

        mockTransactions(List.of(transaction1, transaction2), customer1);
        mockTransactions(List.of(transaction3), customer2);
        mockTransactions(List.of(transaction4), customer3);

        var totals = rewardService.getTotalSpentByCustomerInLastThreeMonths();

        assertEquals(152, totals.get("customer1@example.com").intValue());
        assertEquals(90, totals.get("customer2@example.com").intValue());
        assertEquals(7, totals.get("customer3@example.com").intValue());
    }

    @Test
    void testGetTotalSpentByCustomerInLastThreeMonths_NoCustomers() {
        when(customerRepository.findAll()).thenReturn(Collections.emptyList());

        Map<String, Integer> totalSpentMap = rewardService.getTotalSpentByCustomerInLastThreeMonths();

        assertTrue(totalSpentMap.isEmpty());
    }

    @Test
    void testGetTotalSpentByCustomerInLastThreeMonths_CustomersExistButNoTransactions() {
        var customer = createCustomer(1L, "test@example.com");

        mockCustomers(List.of(customer));
        mockTransactions(Collections.emptyList(), customer);

        var totalSpentMap = rewardService.getTotalSpentByCustomerInLastThreeMonths();

        assertEquals(1, totalSpentMap.size());
        assertTrue(totalSpentMap.containsKey("test@example.com"));
        assertEquals(0, totalSpentMap.get("test@example.com"));
    }

    @Test
    void testGetTotalSpentByCustomerInLastThreeMonths_ExceptionThrown() {
        when(customerRepository.findAll()).thenThrow(new RuntimeException("Database Error"));

        var exception = assertThrows(RuntimeException.class, () ->
                rewardService.getTotalSpentByCustomerInLastThreeMonths()
        );

        assertEquals("Database Error", exception.getMessage());
    }

    private Customer createCustomer(Long id, String email) {
        Customer customer = new Customer();
        customer.setId(id);
        customer.setEmail(email);
        return customer;
    }

    private Transaction createTransaction(Customer customer, double amount) {
        Transaction transaction = new Transaction();
        transaction.setCustomer(customer);
        transaction.setPurchaseAmount(amount);
        transaction.setCreatedAt(new Date());
        return transaction;
    }

    private void mockCustomers(List<Customer> customers) {
        when(customerRepository.findAll()).thenReturn(customers);
    }

    private void mockTransactions(List<Transaction> transactions, Customer customer) {
        when(transactionRepository.findAllByCustomer_IdAndCreatedAtAfter(
                eq(customer.getId()),
                any(Date.class))
        ).thenReturn(transactions);
    }
}
