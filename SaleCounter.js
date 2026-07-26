//____________________________SaleCounter___________________________

package edu.baylor.ecs.csi5354.creational.singleton;

/**
 * Student: Valeria M Villarino
 * Assignment: Singleton for ECE 696B, summer 2026
 * Professor: Tomas Cerny
 * 
 */


/**
 * Helper class - to a Thread-Safe Singleton
 */
public class SaleCounter {
    
    // The 'volatile' keyword for visibility across multiple threads instantly
    private static volatile SaleCounter instance;

    // Initialize counter here and make it private 
    private int counter = 0;

    // Private constructor prevents accidental 'new SaleCounter()' instantiation
    private SaleCounter() {}

    // Double-Checked Locking implementation recommendation
    public static SaleCounter getInstance() {
        // if initialized, bypass heavy synchronization block entirely
        if (instance == null) {
            // lock access on the class level block
            synchronized (SaleCounter.class) {
                //no other thread created it while waiting for the lock
                if (instance == null) {
                    instance = new SaleCounter();
                }
            }
        }
        return instance;
    }

    // Thread-safe increment utility method; 'synchronized' forces threads to line up and increment one by one without data loss
    public synchronized int getNextId() {
        return counter++;
    }
}