/**************************************************************************************/
/*************************************QUESTION********************************************/
/***************************************************************************************
/*
941. Valid Mountain Array
Easy
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true
/*
Test Cases: 
[2,0,2] -> 28. false
[3,5,5] ->50. false 
[0,1,2,4,2,1] --> 35. true
[3,7,6,4,3,0,1,0] --> 33. false
[0,1,2,3,4,5,6,7,8,9] --> 30. false
[4,4,3,2,1] --> 52. false
[9,8,7,6,5,4,3,2,1,0] —> 54. false
*/

/*************************************************************************************/
/************************************ANSWER********************************************/
/*********************************************************************************/
//my answer works 
/*
var validMountainArray = function(arr) {
  let ln = arr.length, peak=0;
  if(!(arr.length >=3)) return false
  for(let i=0; i<ln; i++){
    let cur=arr[i], nex=arr[i+1];
     if (cur===nex) return false
     else if(cur> nex) peak+=1;
     else if (peak>0 && ( i<1 || (!(cur>nex)&& i!=ln-1))) return false
     else if (peak<1 && (!(cur<nex) || i===ln-1)) return false
  }
return true   
};
validMountainArray([4,4,3,2,1]

// a leetcode answer 
var validMountainArray = function(arr) {
    if(arr.length <3) return false;
    var max = -Infinity;
    var flag = true;
    if(arr[0]>arr[1]) return false
    for(let i=0; i<arr.length; i++){
      let cur=arr[i], nex=arr[i+1];
        if(flag && max < cur) max = cur
        else flag = false; if(cur >= next)return false
        
      
    }
    if(flag) return false
    return true
};
*/
