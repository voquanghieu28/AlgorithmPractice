function binarySearch(arr, target){
    var left = 0
    var right = arr.length-1
    
    while (left <= right) {
        var middle = left + Math.floor((right-left+1)/2)
        
        if (arr[middle]==target)
            return middle
        else if (arr[middle]>target) {
            
            if (right==middle)
                right = middle-1
            else 
                right = middle
        } else
            if (left==middle)
                left = middle+1
            else 
                left = middle
    }

    return -1
}