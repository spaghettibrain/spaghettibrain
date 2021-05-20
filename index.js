/**************************************************************************************/
/*************************************QUESTION********************************************/
/***********************************************************************************/
/*
3. Longest Substring Without Repeating Characters
Medium
Given a string s, find the length of the longest substring without repeating characters.
Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:
Input: s = ""
Output: 0
/*************************************************************************************/
/************************************ANSWER********************************************/
/*********************************************************************************/

var lengthOfLongestSubstring = function(s) {
    let letters = new Map()
    let highestLength = 0
    let length = 0
    // loop thru s until you find a repeating character and then slide and move to the letter of the repeating charcter
    for(i = 0; i < s.length; i++) {
        // this checks if a letter is no longer need for e.i abba when you go to b a is no longer used so you increase the length since it doesn't exist anymore
        if(letters.get(s[i]) !== undefined && letters.get(s[i]) >= i - length) {
       
     console.log('letters.get(s[i]) : ' + letters.get(s[i]) + ' > i-length : ' + (i-length) );

          console.log(letters)

        } else {
            length++
        }
        letters.set(s[i], i)
        highestLength = Math.max(highestLength, length)
    }
    
    return highestLength
};


lengthOfLongestSubstring(s = "pwwkew");

/*
var lengthOfLongestSubstring = function(s) {
    let inst = new Map(), len=s.length, ln=0;

   if(len===0 || len===1) return len;
    for(i = len-1; i >= 0; i--) {

      if(inst.get(s[i]) && ln>i ) return inst;
      if(inst.get(s[i])===undefined) ln++;
       inst.set(s[i],i)
    }
  //  console.log()
    return inst.size
};
lengthOfLongestSubstring(s = "pwwkew");
*/
/*
var lengthOfLongestSubstring = function(s) {
    let inst = new Map(), len=s.length;
    for(i = len+1; i > 0; i--) {
      if(inst.get(s[i]) && i ) return ln;
      if(inst.get(s[i])) len--;
       inst.set(s[i],i)
    }
    return len
};
lengthOfLongestSubstring(s = "aaaaabbbbbbbbbccccc");
*/