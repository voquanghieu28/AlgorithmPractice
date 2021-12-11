function minSubArrayLength(arr, target) {

    var currentMin      = 0
    var left            = 0
    var right           = 0

    for(let i=0; i<arr.length; i++) {
        right=i
        currentMin+=arr[i]  
        if(currentMin >= target) break
    }

    if(currentMin<target) return 0

    for(let j=0; j<arr.length-1; j++) {
        left++; right++

            currentMin = currentMin - arr[left-1] + (arr[right] || 0)
        
        while(currentMin>=target) {
            if(currentMin-(arr[right]||0)>=target && right>left) {
                currentMin-=arr[right]
                right--
            } else break            
        }
        
    } 
    return right-left+1
}