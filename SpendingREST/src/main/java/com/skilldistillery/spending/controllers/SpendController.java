package com.skilldistillery.spending.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.spending.entities.Spend;
import com.skilldistillery.spending.services.SpendService;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost:4203" })
public class SpendController {

	@Autowired
	private SpendService spendSvc;

	@GetMapping("spending")
	public List<Spend> showAllExpenses() {
		return spendSvc.getAllExpenses();
	}

	@RequestMapping(path = "spending/{id}")
	public Spend show(@PathVariable int id, HttpServletResponse res) {
		Spend spend = spendSvc.show(id);
		if (spend == null) {
			res.setStatus(404);
		}
		return spendSvc.show(id);
	}

	@PostMapping("spending")
	public Spend create(@RequestBody Spend spend, HttpServletResponse res) {
		if (spend != null) {
			spend = spendSvc.createSpend(spend);
			res.setStatus(201);
			return spend;
		} else {
			res.setStatus(404);
			return null;
		}
	}

	@PutMapping("spending/{spendId}")
	public Spend updateSpend(@RequestBody Spend spend, @PathVariable Integer spendId, HttpServletResponse res) {
		try {
			spend = spendSvc.update(spendId, spend);
			if (spend == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			spend = null;
		}
		return spend;
	}

	@DeleteMapping("spending/{spendId}")
	public Boolean deleteSpend(@PathVariable int spendId, HttpServletResponse res) {
		Boolean deleted = false;
		try {
			deleted = spendSvc.deleteSpend(spendId);
			if (deleted) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
		}
		return deleted;
	}

//	@PostMapping(path = "spending")
//	public Spend addSpend(Spend spend, HttpServletResponse res, HttpServletRequest req) {
//		try {
//			spend = spendSvc.createSpend(spend);
//			res.setStatus(201);
//			StringBuffer url = req.getRequestURL();
//		} catch (Exception e) {
//
//		}
//		return spendSvc.findAll();
//	}

//	@RequestMapping(path = "spending/{id}")
//	public List<Spend> getSpendList(@PathVariable int spendId, HttpServletResponse res) {
//		List<Spend> spending = spendSvc.getSpendList(spendId);
//		if (spending == null) {
//			res.setStatus(404);
//		}
//		return spending;
//	}

}
