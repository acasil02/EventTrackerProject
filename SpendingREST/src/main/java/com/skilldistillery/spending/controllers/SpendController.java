package com.skilldistillery.spending.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.spending.entities.Spend;
import com.skilldistillery.spending.services.SpendService;

@RequestMapping("api")
@RestController
public class SpendController {

	@Autowired
	private SpendService spendServ;

	@GetMapping("spending")
	public List<Spend> index() {
		return spendServ.index();
	}

}
