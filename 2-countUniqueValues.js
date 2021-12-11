function countUniqueValues(arr){
    if(arr.length == 0)
        return 0
        
    var j = 1
    for (var i=1; i<arr.length; i++) {
          if(arr[i]>arr[i-1])
          j++
    }
    
    return j
}