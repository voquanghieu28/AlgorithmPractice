function areThereDuplicates(...args){
    
    var obj = {}
    
    for (var e of args) {
        if(obj[e]==true)      
            return true 
         obj[e] = true
    }
      
    return false
}