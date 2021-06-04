
/**************************************************************************************/
/*************************************QUESTION********************************************/
/***********************************************************************************/
/*
111. Minimum Depth of Binary Tree
Easy

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: tree = [3,9,20,null,null,15,7]
minDepth(tree = 
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
Output: 2

Example 2:
Input: tree = [2,null,3,null,4,null,5,null,6]
minDepth( tree =
{
  val: 2,
  left: null, 
  right: { val: 3, 
                  left: null, 
                  right: { val: 4,
                                 left: null, 
                                     right: { val: 5,        
                                                    left: null,
                                                    right: { val: 6, left: null, right: null }
                                             },  
                         },
         },  
  
}
         )

Output: 5

//shortest past to the nearest leaf  so if tree left and tree right do not exist then it 
it is not a leaf so we want to find the max depth of either tree 
/*************************************************************************************/
/************************************ANSWER********************************************/
/***********************************************************************************/ 

var minDepth = function(tree) {
    if (!tree) return 0;
    let leftDepth = minDepth(tree.left), rightDepth = minDepth(tree.right);
    return (tree.left && tree.right ? Math.min(leftDepth, rightDepth) : Math.max(leftDepth, rightDepth)) + 1;
};
minDepth( tree =
{
  val: 2,
  left: null, 
  right: { val: 3, 
                  left: null, 
                  right: { val: 4,
                                 left: null, 
                                     right: { val: 5,        
                                                    left: null,
                                                    right: { val: 6, left: null, right: null }
                                             },  
                         },
         },  
  
}
         )


