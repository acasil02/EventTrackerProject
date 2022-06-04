package com.skilldistillery.spending.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.spending.entities.Spend;

public interface SpendRepository extends JpaRepository<Spend, Integer> {

//	List<Spend> findBySpend_Id(int spendId);

}
