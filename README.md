# HW3
-Password-generator-ReadMe-03/05/2020

a) What ? Why? How?
used arrays for each category, then used functions and loops, there is comments in the code for my specific commands


b) What was your motivation? 
Doing this Homework was a great practice for learning JavaScript in this first introductory week. It amazed me when I searched about it and found so many ways to approach this as you improve in JS.

c) What Problem does it solve? 
user chooses between 4 categories for their passwords and chooses a length for password, and it will generate it for them

d) What did you learn? 
This code was very challenging and I had to refer back to the class notes and internet to find many answers to my questions

e) What makes your project stand out? 
I have tried to follow the prompts we set up in the class.

f) Areas of improvement? 
I couldnt make line 19 to 23 work also 69 to 86 












g)
//below this line is the pseudo code we created in office hour with Clint:
//----------------------------------------------
// TODO: [done]
//List of Alpha characters:
// alphabets lowercase[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
// alphabets uppercase[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]

// List of Numveric characters:
// numbers[0 1 2 3 4 5 6 7 8 9]

// List of special characters:
// special characters[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

// TODO: prompt user
    // Password length
            // check the length is between 8 and 128
    // confirm if they want alpha characters
        // confirm if they want uppercase letters
        // confirm if they want lowercase letters
    // confirm if they want numeric characters
    // confirm if they want special characters
        // check that the user selected at least one option [done]
    // create choices array ******
    // create empty password string ******
    // add all characters from user selection to choices array 
    // loop over the choices array - amount of times the user specified as the password length
        // create a random number
            // between 0 and the choices array length
            // grab element from choices array using random number 
            // add random element to password string
        // return the password to the user
