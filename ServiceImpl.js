//___________________________________ServiceImpl_____________________________
package edu.baylor.ecs.csi5354.creational.singleton.impl;

import java.util.Calendar;
import java.util.Date;

import edu.baylor.ecs.csi5354.creational.singleton.Logger;
import edu.baylor.ecs.csi5354.creational.singleton.Service;

/**
 * Student: Valeria M Villarino
 * Assignment: Singleton for ECE 696B, summer 2026
 * Professor: Tomas Cerny
 * 
 */

public class ServiceImpl implements Service {

    /**
	*Logger log = new LoggerImpl(ServiceImpl.class);

	public ServiceImpl() {
		sleep(2000);
		log.log("initiated");
	}*/
	 // a single private static instance tracking field
    private static ServiceImpl instance;

    // logger to use the new Singleton pattern access point
    private Logger log = Logger.getInstance();

    // change the constructor visibility to PRIVATE
    private ServiceImpl() {
        sleep(2000);
        log.log("initiated");
    }
    
    // thread-safe global access method
    public static synchronized ServiceImpl getInstance() {
        if (instance == null) {
            instance = new ServiceImpl();
        }
        return instance;
    }

	public double taxCalculation(double amount) {
		sleep(200);
		log.log("taxCalculation");
		return amount * 1.21;
	}

	public void registerSale(int id, double amount) {
		// issue registration
		sleep(50);
    	Register.getInstance().add(now(), id, amount); 
        log.log("registerSale " + id);
	}

	public double dailyReport(Date day) {
		sleep(1000);
		log.log("dailyReport");
		return Register.getInstance().total(now()); // it could be better, fixed
	}

	private void sleep(int i) {
		try {
			Thread.sleep(i);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} // simulation
	}

	public Date now() {
		Calendar cal = Calendar.getInstance(); // locale-specific
		cal.setTime(new Date());
		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MILLISECOND, 0);
		return cal.getTime();
	}
}
