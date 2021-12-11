function maxSubarraySum(arr, len){
  
    if (arr.length < len) return null
    var maxSum = 0
    
    for(var i=0; i<len; i++) {
        maxSum += arr[i]
    }
    
    var currenSum = maxSum
  
    for(var i=1; i<arr.length-len+1; i++) {
        
        currenSum = currenSum - arr[i-1] + arr[i+len-1]
    
        
        if (currenSum > maxSum) 
          maxSum = currenSum 
             
    }
    
    return maxSum
  }