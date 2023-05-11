/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package twittertowers;

import java.util.Scanner;

/**
 *
 * @author User
 */
public class TwitterTowers {
    static Scanner in = new Scanner(System.in);
    
    public static void mainMenu(){
        System.out.println("enter 1 for rectangle and 2 for triangle and 3 for exit:");
        int shape = in.nextInt();
        if (shape != 3){
           System.out.println("enter height:");
           int height = in.nextInt();
           System.out.println("enter width:");
           int width = in.nextInt();
           if (shape == 1){
               if (width + 5 < height || height + 5 < width)
                   System.out.println("The area is: " + (width * height));
               else
                   System.out.println("The perimeter is: " + ((width + height) *2));
           }
           else if (shape == 2){
               System.out.println("enter 1 for perimeter and 2 for printing:");
               int option = in.nextInt();
               if (option == 1)
                   System.out.println(" the perimeter is: " + (2 * Math.sqrt(Math.pow(width/2, 2) + Math.pow(height, 2)) + width));
               else {
                   if (width%2 == 0 || height*2 < width)
                       System.out.println("The triangle cannot be printed");
                   else {
                       // how many floors of different widths will be in the triangle
                       int floors = (width-2)/2;
                       // how much lines will be the same in every part
                       int lines = (height-2)/floors;
                       // how much lines will added to the firstFloor
                       int firstFloor = (height-2)%floors;
                       int asterisks = 3;
                       printLine(width, 1);
                       for (int i = 1 ; i < height-1 ; i++){
                           printLine(width, asterisks);
                           if (i >= lines + firstFloor && (i - firstFloor) % lines == 0)
                               asterisks+=2;
                       }
                       printLine(width, width);
                   }
               }
           }
           mainMenu();
        }
    }
    
    public static void printLine(int width, int asterisks){
        for (int i = 0 ; i < width - (width - asterisks)/2 ; i++){
            if (i < (width - asterisks)/2)
                System.out.print(" ");
            else
                System.out.print("*");
        }
        System.out.println("");
    }
    
    public static void main(String[] args) {
        mainMenu();
    }
}
