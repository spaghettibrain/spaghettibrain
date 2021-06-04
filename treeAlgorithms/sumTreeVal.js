/**************************************************************************************/
/*************************************QUESTION********************************************/
/***********************************************************************************/
/*
112. Path Sum
Easy
Given the tree of a binary tree and an integer targetSum, return true if the tree has a tree-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:
Input: tree = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

hasPathSum( tree =
(
{
val: 5,
    left: { val: 4, 
                  left:  { val: 11,
                                 left: { val: 7,        
                                                 left: null,
                                                 right: null
                                        }, 
                                 right: null,
                         },
                  right: { val: 2,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right: { val: 8, 
                  left: { val: 13,        
                                left: null,
                                right: null
                        }, 
                  right: { val: 4,
                                 left: null, 
                                 right: { val: 1,        
                                                    left: null,
                                                    right: null
                                        },  
                         },
        },  

}
), targetSum= 22)
Output: true

Example 2:
Input: tree = [1,2,3], targetSum = 5
hasPathSum( tree =
{
  val: 1,      
       left: { val: 2,
                    left: null, 
                    right: null 
              },                
       right: { val: 3, 
                    left: null, 
                    right: null 
             },        
}
, targetSum= 5) 
Output: false

Example 3:
Input: tree = [1,2], targetSum = 0
Output: false

/*************************************************************************************/
/************************************ANSWER********************************************/
/***********************************************************************************/ 


var hasPathSum = function(tree, targetSum) {
    if(!tree) return false;
    if(!tree.left && !tree.right) return targetSum === tree.val; //hits leaf sum check if sum 0
    return (!!tree.left && hasPathSum(tree.left, targetSum - tree.val)) ||
        (!!tree.right && hasPathSum(tree.right, targetSum - tree.val));
};

hasPathSum( tree =
{
val: 5,
    left: { val: 4, 
                  left:  { val: 11,
                                 left: { val: 7,        
                                                 left: null,
                                                 right: null
                                        }, 
                                 right: null,
                         },
                  right: { val: 2,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right: { val: 8, 
                  left: { val: 13,        
                                left: null,
                                right: null
                        }, 
                  right: { val: 4,
                                 left: null, 
                                 right: { val: 1,        
                                                    left: null,
                                                    right: null
                                        },  
                         },
        },  

}
, targetSum= 22) 