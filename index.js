
let print = function (input){
 console.log(input)
}
/**************************************************************************************/
/*************************************QUESTION********************************************/
/***********************************************************************************/
/*
872. Leaf-Similar Trees
Easy
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes tree1 and tree2 are leaf-similar.


Example 1:
Input: tree1 = [3,5,1,6,2,9,8,null,null,7,4], tree2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
leafSimilar( 
tree1 =
{
val: 3,
    left: { val: 5, 
                  left: { val: 6,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 2,        
                                  left: { val: 7,        
                                                left: null,
                                                right: null
                                          }, 
                                  right: { val: 4,        
                                                left: null,
                                                right: null
                                           }, 
                          }, 
         },  
  
 right: { val: 1, 
                  left: { val: 9,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 8,        
                                 left: null,
                                 right: null
                         }, 
         }

},

tree2= 
{
val: 3,
    left: { val: 5, 
                  left: { val: 6,       
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 7,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
 right: { val: 1, 
                  left: { val: 4,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 2,        
                                  left: { val: 9,        
                                                left: null,
                                                right: null
                                          }, 
                                   right: { val: 8,        
                                                 left: null,
                                                 right: null
                                           }, 
                          }, 
         }

}


) 

Example 2:
Input: tree1 = [1], tree2 = [1]
Output: true

Example 3:
Input: tree1 = [1], tree2 = [2]
Output: false
leafSimilar( 
tree1 =
{ val: 1,        
        left: null,
        right: null
}, 

tree2 =
{ val: 2,        
        left: null,
        right: null
}

) 

Example 4:
Input: tree1 = [1,2], tree2 = [2,2]
Output: true
leafSimilar( 
tree1 =
{
val: 1,
    left: { val: 2,        
                  left: null,
                  right: null
           }, 

    right: null

},

tree2= 
{
val: 2,
    left: { val: 2,        
                  left: null,
                  right: null
           }, 

    right: null

}

) 

Example 5:
Input: tree1 = [1,2,3], tree2 = [1,3,2]
Output: false

Test Case : 
19. [1], [2] --> False
23. [1,2], [2,2] -> True
24. [1,2,null,3], [1,3] -True
25. [119,113,null,11,30,43,76,15,60,67,74] -> true
[11,69,60,115,66,15,60,67,74,null,76]
leafSimilar( 
tree1 =
{
val: 1,
    left: { val: 2, 
                  left: { val: 3,        
                                left: null,
                                right: null
                         },     
                   right: null
          },
    right: null 

},
tree2 =
{
val: 1,
    left: { val: 3, 
                    left: null,    
                    right: null     
           }, 
   right: null
}
)
/*************************************************************************************/
/************************************ANSWER********************************************/
/***********************************************************************************/ 


var leafSimilar = function(tree1, tree2) {
const start = (tree, res) => {
    if (!tree) {
        return;
    }
    if (!tree.left && !tree.right) {
        res.push(tree.val);
        return;
    }
    start(tree.left, res);
    start(tree.right, res);

  return res
}


    let arr1= start(tree1, []);
    let arr2= start(tree2, []);

  print(arr1)

      return  JSON.stringify(arr1) ===  
              JSON.stringify(arr2);

};

leafSimilar( 
tree1 =
{
val: 3,
    left: { val: 5, 
                  left: { val: 6,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 2,        
                                  left: { val: 7,        
                                                left: null,
                                                right: null
                                          }, 
                                  right: { val: 4,        
                                                left: null,
                                                right: null
                                           }, 
                          }, 
         },  
  
 right: { val: 1, 
                  left: { val: 9,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 8,        
                                 left: null,
                                 right: null
                         }, 
         }

},

tree2= 
{
val: 3,
    left: { val: 5, 
                  left: { val: 6,       
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 7,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
 right: { val: 1, 
                  left: { val: 4,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 2,        
                                  left: { val: 9,        
                                                left: null,
                                                right: null
                                          }, 
                                   right: { val: 8,        
                                                 left: null,
                                                 right: null
                                           }, 
                          }, 
         }

}
)
/*
leafSimilar( 
 tree1 =
{
val: 119,
    left: { val: 113, 
                  left: { val: 6,        
                                 left: null,
                                 right: null
                         }, 
                  right: null, 
         },  
  
 right: { val: 1, 
                  left: { val: 9,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 8,        
                                 left: null,
                                 right: null
                         }, 
         }

},

tree2= 
{
val: 3,
    left: { val: 5, 
                  left: { val: 6,       
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 7,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
 right: { val: 1, 
                  left: { val: 4,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 2,        
                                  left: { val: 9,        
                                                left: null,
                                                right: null
                                          }, 
                                   right: { val: 8,        
                                                 left: null,
                                                 right: null
                                           }, 
                          }, 
         }

}


) 
*/

