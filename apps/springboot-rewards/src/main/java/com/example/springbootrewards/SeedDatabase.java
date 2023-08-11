package com.example.springbootrewards;

import com.example.springbootrewards.entity.Customer;
import com.example.springbootrewards.entity.Transaction;
import com.example.springbootrewards.repository.ICustomerRepository;
import com.example.springbootrewards.repository.ITransactionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Configuration
public class SeedDatabase {
    private static final Random random = new Random();

    @Bean
    public CommandLineRunner initDatabase(ICustomerRepository customerRepository, ITransactionRepository transactionRepository) {
        var now = LocalDate.now();

        return (args -> {
            for (int i = 0; i < 10; i++) {
                var customer = new Customer();
                String firstName = "FirstName" + i;
                String lastName = "LastName" + i;
                String email = "Email" + i + "@domain.com";

                customer.setFirstName(firstName);
                customer.setLastName(lastName);
                customer.setEmail(email);
                customer = customerRepository.save(customer);

                for (int j = 0; j < 100; j++) {
                    Transaction transaction = new Transaction();
                    transaction.setCustomer(customer);

                    var purchaseAmount = 100 * (random.nextDouble() + 1);
                    var randomDate = getRandomDate(now.minusDays(120), now);

                    transaction.setPurchaseAmount(purchaseAmount);
                    transaction.setCreatedAt(java.sql.Date.valueOf(randomDate));
                    transaction.setUpdatedAt(java.sql.Date.valueOf(randomDate));

                    transactionRepository.save(transaction);
                }
            }
        });
    }

    private LocalDate getRandomDate(LocalDate startDate, LocalDate endDate) {
        var startEpochDay = startDate.toEpochDay();
        var endEpochDay = endDate.toEpochDay();
        var randomDay = ThreadLocalRandom.current().longs(startEpochDay, endEpochDay).findAny().getAsLong();

        return LocalDate.ofEpochDay(randomDay);
    }
}
