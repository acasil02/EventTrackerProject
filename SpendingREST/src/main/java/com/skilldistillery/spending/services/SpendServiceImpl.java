package com.skilldistillery.spending.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.spending.entities.Spend;
import com.skilldistillery.spending.repositories.SpendRepository;

@Service
public class SpendServiceImpl implements SpendService {

	@Autowired
	private SpendRepository spendRepo;

	@Override
	public List<Spend> index() {
		return spendRepo.findAll();
	}

}
