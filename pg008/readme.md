1. Write a function findLongestWord that accepts a sentence as argument
2. Initialize 2 empty string variables "currStr" and "longestStr".
3. In a loop check for an empty space and not equal to given sentence. If not an empty space then append each letter to the currStr variable
4. When an empty space is reached, check if length of currStr is greater than the length of longestStr. If true then assign the value of currStr into longestStr.
5. Then empty the currStr variable before each iteration
6. After end of loop return longestStr