package com.skilldistillery.spending.services;

import java.util.List;

import com.skilldistillery.spending.entities.Spend;

public interface SpendService {

	List<Spend> index();
	
	Spend show(int spendId);

	Spend createSpend(Spend spend);

	Spend update(int spendId, Spend spend);

	public boolean deleteSpend(int spendId);

}
