//____________________________Logger_______________________________
package edu.baylor.ecs.csi5354.creational.singleton;

/**
 * Student: Valeria M Villarino
 * Assignment: Singleton for ECE 696B, summer 2026
 * Professor: Tomas Cerny
 * 
 * Basic logger simulation
 * 
 */
public interface Logger {

	void log(String s);

    // Nested holder class to ensure initialization
    class InstanceHolder {
        private static final Logger INSTANCE = new LoggerImpl();
    }

    // The global access point used by the rest of the application
    static Logger getInstance() {
        return LoggerImpl.getInstance();
        }
}