package com.skilldistillery.spending.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Spend {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private double bills;

	private double groceries;

	private double gas;

	public Spend() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getBills() {
		return bills;
	}

	public void setBills(double bills) {
		this.bills = bills;
	}

	public double getGroceries() {
		return groceries;
	}

	public void setGroceries(double groceries) {
		this.groceries = groceries;
	}

	public double getGas() {
		return gas;
	}

	public void setGas(double gas) {
		this.gas = gas;
	}

	@Override
	public String toString() {
		return "Spend [id=" + id + ", name=" + name + ", bills=" + bills + ", groceries=" + groceries + ", gas=" + gas
				+ "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Spend other = (Spend) obj;
		return id == other.id;
	}

}
