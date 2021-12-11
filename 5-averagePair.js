function averagePair(arr, avg){
   
    var obj = {}
    
    for (var i=0; i<arr.length-1; i++) {
 
         if(arr[avg*2-arr[i]] != undefined)
             return true
         else
             arr[avg*2-arr[i]] = true   
    }
 
    return false
 }
 