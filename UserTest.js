package edu.baylor.ecs.csi5354.creational.singleton.test;


import org.junit.jupiter.api.Test;

import edu.baylor.ecs.csi5354.creational.singleton.SaleCounter;
import edu.baylor.ecs.csi5354.creational.singleton.Service;
import edu.baylor.ecs.csi5354.creational.singleton.impl.ServiceImpl;

/**
 * Student: Valeria M Villarino
 * Assignment: Singleton for ECE 696B, summer 2026
 * Professor: Tomas Cerny
 * 
 */

public class UserTest {

	private static final int USERS = 10;

	public static class User implements Runnable {

		@Override
		public void run() {
			Service service = ServiceImpl.getInstance();
           		Double amount = 100.0;
            		amount = service.taxCalculation(amount);
            		service.registerSale(SaleCounter.getInstance().getNextId(), amount);
		}

	}

	@Test
	public void testOne() throws InterruptedException {
		User u = new User();
		u.run();

		Service service = ServiceImpl.getInstance();
		System.out.println("Test One Report Total: " + service.dailyReport(service.now()));

	}
    // fix me..
	@Test 
	public void testMany() throws InterruptedException {
		for (int i = 1; i < USERS + 1; i++) {
			Thread t = new Thread(new User());
			t.start();
		}

		//Thread.sleep(USERS * 1000);
		Thread.sleep(1000);

		Service service = ServiceImpl.getInstance(); // this is so ugly, ugly is funny
		System.out.println("Test Many Report Total: " + service.dailyReport(service.now()));

	}

}
