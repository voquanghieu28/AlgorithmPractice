function someRecursive(arr, cb){
    if(arr.length==0) return false
    var pop = arr.pop()
    if(cb(pop)) return true
    return someRecursive(arr,cb)
    
}