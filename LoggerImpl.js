//_________________________________LoggerImpl__________________________
package edu.baylor.ecs.csi5354.creational.singleton.impl;
import java.util.ArrayList;
import java.util.List;

import edu.baylor.ecs.csi5354.creational.singleton.Logger;

/**
 * Student: Valeria M Villarino
 * Assignment: Singleton for ECE 696B, summer 2026
 * Professor: Tomas Cerny
 * 
 */

public class LoggerImpl implements Logger {

	private static LoggerImpl instance;
	private static int counter = 1;
	private int id;
	//private Class<?> c;
	private List<String> files = new ArrayList<>();

	/** public LoggerImpl(Class<?> c) {
		this.c = c;
		id = counter++;
		log("Made logger "+id );
	} */

    private LoggerImpl() {
        this.id = counter++;
        log("Made logger " + id);
        //System.out.printIn("Made logger" + id);
    }
    
    
    public static synchronized LoggerImpl getInstance() {
        if (instance == null) {
            instance = new LoggerImpl();
        }
        return instance;
    } 

	/* (non-Javadoc)
	 * @see cz.cvut.fel.cs.ass.Logger#log(java.lang.String)
	 */
	@Override
	public void log(String s) {
		files.add(s);
		System.out.println("Logging [SingletonLogger#" + id + "]: " + s);
	}
}