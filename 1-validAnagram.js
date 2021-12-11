function validAnagram(s1, s2){
    if (s1.length!=s2.length)
           return false  
       
       var obj1 = {}
       var obj2 = {}
          
       for (var e of s1) {
           obj1[e] = (obj1[e] || 0)+1
       }
       
       for (var e of s2) {
           obj2[e] = (obj2[e] || 0)+1
       }
       
       for (var [key, value] of Object.entries(obj1)) {
           if(obj2[key]!=value)
               return false
       }
       
       return true
}