package com.skilldistillery.spending.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.spending.entities.Spend;
import com.skilldistillery.spending.repositories.SpendRepository;

@Service
public class SpendServiceImpl implements SpendService {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private SpendRepository spendRepo;

	@Override
	public List<Spend> index() {
		return spendRepo.findAll();
	}

	@Override
	public Spend show(int spendId) {
		Optional<Spend> op = spendRepo.findById(spendId);
		if (op.isPresent()) {
			Spend spend = op.get();
			return spend;
		} else {
			return null;
		}
	}

	@Override
	public Spend createSpend(Spend spend) {
		return spendRepo.saveAndFlush(spend);
	}

	@Override
	public Spend update(int spendId, Spend spend) {
		Optional<Spend> op = spendRepo.findById(spendId);
		if (op.isPresent()) {
			Spend spend1 = op.get();
			spend1.setName(spend.getName());
			spend1.setBills(spend.getBills());
			spend1.setGroceries(spend.getGroceries());
			spend1.setGas(spend.getGas());
			spendRepo.save(spend1);
			return spend1;
		}
		return null;
	}

	@Override
	public boolean deleteSpend(int spendId) {
		spendRepo.deleteById(spendId);
		return !spendRepo.existsById(spendId);
	}

}
