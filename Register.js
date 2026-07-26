//____________________________Register___________________________
package edu.baylor.ecs.csi5354.creational.singleton.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

class Register {

	private Map<Date, Double> register = new HashMap<>();
	private Map<Date, Map<Integer, Double>> registerDetails = new HashMap<>();

	//public static Register instance = new Register();
	private static final Register instance = new Register();

	private Register() {}
	
	public static Register getInstance() {
        	return instance;
    	}


	public synchronized void add(Date date, int id, Double amount) {

		if (!register.containsKey(date)) {
			register.put(date, amount);
		} else {
			register.put(date, register.get(date) + amount);
		}

		if (!registerDetails.containsKey(date)) {
			Map<Integer, Double> registration = new HashMap<>();
			registerDetails.put(date, registration);
		}
		registerDetails.get(date).put(id, amount);

	}

	public synchronized Double total(Date date) {
		return register.get(date);
	}
}