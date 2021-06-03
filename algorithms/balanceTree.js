/**************************************************************************************/
/*************************************QUESTION********************************************/
/***********************************************************************************/
/*
110. Balanced Binary Tree
Easy
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Input: tree = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: tree = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: tree = []
Output: true

/*************************************************************************************/
/************************************ANSWER********************************************/
/***********************************************************************************/ 
var isBalanced = function(tree) {
	let res = true
	function depthSearch(tree){
		if(!tree) return 0
		let leftDepth = depthSearch(tree.left), rightDepth = depthSearch(tree.right)
		if(Math.abs(leftDepth-rightDepth) > 1) res = false
    return 1 + Math.max(leftDepth, rightDepth) 
	}
	depthSearch(tree)
  return res;    
};

isBalanced(tree = 
{
  val: 3,
  left: { val: 9, 
                  left: null, 
                  right: null,
         }, 
  right: { val: 20, 
                  left: { val: 15, left: null, right: null }, 
                  right: { val: 7, left: null, right: null },
         },  
  
}
)

/*For this problem, a Height-Balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Depth first search(calculate heights) is like post order recursive  call all the way down to double null values until you reach a leaf and count back up 

Leaf nodes will always have height of 1 consider that null is a height of zero.
 LEAF NODE EXAMPLE :   A Leaf means left and right are both null  : 
 { val: 2, //height : 1 
                  left: null,  //height: 0
                  right: null,  //height : 0 
         }
*/ 
/*******************Example 1*******************************/
//Input: tree = [3,9,20,null,null,15,7]   ----> in tree form : 
isBalanced(tree1 =
{
  val: 3,   //h: 1
  left: { val: 9, 
                  left: null, //h: 0
                  right: null, //h: 0
         },   //h: 2
  right: { val: 20,           //h : 1          //h: 0           //h: 0
                  left: { val: 15, left: null, right: null }, 
                  right: { val: 7, left: null, right: null },
         },                   //h: 1          //h: 0           //h: 0
  
}
)
/*
Tree One: every node differ in height by no more than 1
 Left Depth : 1, Right Depth : 2 
       For Tree1: AbsoluteValue(1-2)= 1   A difference in one is fine: True 
*/                      //Output: TRUE
/*******************Example 2*******************************/
//Input: tree = [1,2,2,3,3,null,null,4,4] --> in tree form : 
isBalanced(tree2 = 
{
  val: 1,      //h: 3
  left: { val: 2,             //h: 2       
                  left: { val: 3,    //h: 1         //h: 0            //h: 0  
                            left: { val: 4, left: null, right: null },
                            right: { val: 4, left: null, right: null }
                         },            //h: 1         //h: 0          //h: 0  
                              //h: 1         //h: 0          //h: 0  
                  right: { val: 3, left: null, right: null },
         },    //h: 1
  right:  { val: 2, 
                  left: null,  //h: 0
                  right: null,  //h: 0
         }
}
)
/* Tree Two: every node differ in height by no more than 1
 Left Depth : 3, Right Depth : 2 
 For Tree2: AbsoluteValue(3-1)= 2   A difference of two is not ok: False  
*/.                   //Output: FALSE
/*******************Example 3*******************************/
//Input: tree = []  --> in tree form :
isBalanced(tree3 = 
{
  val: null //h: 0
}
)
/* Tree Three every node differ in height by no more than 1
            Left Depth : 0, Right Depth : 0 
  For Tree2: AbsoluteValue(0-0)= 0  A difference in one is okay: True  
               //Output: TRUE
DISCLAIMER: it's not just the total for the entire left and right subtree depth each individual subtree within each subtree must have equal left and right depths as well at each recursive call I just showed the total math for clarity on lines: 104,127
*/




