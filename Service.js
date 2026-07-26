//_______________________Service.java______________________
package edu.baylor.ecs.csi5354.creational.singleton;

import java.util.Date;

/**
 * Student: Valeria M Villarino
 * Assignment: Singleton for ECE 696B, summer 2026
 * Professor: Tomas Cerny
 * 
 */

/**
 * Interface for the services
 *
 */
public interface Service {
	
	/**
	 * Calculates taxes
	 * 
	 * @param amount
	 * @return taxed amount
	 */
	public double taxCalculation(double amount);
	
	/**
	 * Tracking the totals
	 * 
	 * @param id
	 * @param amount
	 */
	public void registerSale(int id, double amount);
	
	/**
	 * reporting of given day
	 * 
	 * @param day
	 * @return the total sale sum
	 */
	public double dailyReport(Date day);
	
	/**
	 * Time stamp
	 * 
	 * @return now
	 */
	public Date now();
}
