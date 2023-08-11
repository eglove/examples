package com.example.springbootrewards.repository;

import com.example.springbootrewards.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface ITransactionRepository extends JpaRepository<Transaction, Long> {
    @Query("select t from Transaction t where t.customer.id = ?1 and t.createdAt >= ?2")
    List<Transaction> findAllByCustomer_IdAndCreatedAtAfter(Long customerId, Date date);
}
