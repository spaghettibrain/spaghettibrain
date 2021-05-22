/**************************************************************************************/
/*************************************QUESTION********************************************/
/***************************************************************************************/
/*
5. Longest Palindromic Substring
Medium
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "ac"
Output: "a"
/*************************************************************************************/
/************************************ANSWER********************************************/
/*********************************************************************************/
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    let len = 0;
   
    //the helper function below finds the longest palindrome of the string
    function isPalindromeLength(s, left, right){
        if(left > right ) return 0;
        while(left >=0 && right < s.length && s[left] == s[right]){
            left --;
            right++;
        }
        return right - left - 1
    }
    
    
     for(var i = 0 ; i  < s.length; i++){
       let p1 = isPalindromeLength(s, i,i)
       let p2 = isPalindromeLength(s, i, i+1)
       len = Math.max(p1,p2)
	   //the if statement below calculates the substring using the length of the longest palindrome 
        if(len > end - start){
          start  = Math.ceil(i - ((len-1)/2))/** here we subtract the (length-1)/2 from the current index and round it up. e.g when our length is 2, (2-1)/2=>0.5 then we round up using Math.ceil to 1 **/ 
          end = i + (len/2)
        } 
        
    }
    
    return s.slice(start, end + 1) 
};
longestPalindrome(s = "cbbd");




