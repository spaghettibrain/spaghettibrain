
let print = function (input){
 console.log(input)
}
/**************************************************************************************/
/*************************************QUESTION********************************************/
/***********************************************************************************/
/*
543. Diameter of Binary Tree
Easy
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the tree.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: tree = [1,2,3,4,5]
diameterOfBinaryTree( tree =
{
val: 1,
    left: { val: 2, 
                  left: { val: 4,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 5,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right:  { val: 3,        
                    left: null,
                    right: null
            }, 

}
) 
Output: 3
Explanation: 3is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: tree = [1,2]

diameterOfBinaryTree( tree =
{
val: 1,
       left: { val: 2,        
                      left: null,
                      right: null
              }, 
  
    right: null

}
) 
Output: 1

/*************************************************************************************/
/************************************ANSWER********************************************/
/***********************************************************************************/ 
//call tree 
//Time : O(n)
//Space : Call stack O(n) linear 
var diameterOfBinaryTree = function (tree) {
  function search(tree) {
    if (!tree) return [0, 0]; 
    let [leftD, leftH] = search(tree.left);
    let [rightD, rightH] = search(tree.right);
    return [
      Math.max(leftD, rightD, leftH + rightH),
      Math.max(leftH, rightH) + 1,
    ];
  }
  return search(tree)[0];
};


diameterOfBinaryTree( tree =
{
val: 1,
    left: { val: 2, 
                  left: { val: 4,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 5,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right:  { val: 3,        
                    left: null,
                    right: null
            }, 

}
) 
