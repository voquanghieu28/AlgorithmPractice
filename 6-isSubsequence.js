function isSubsequence(s1, s2) {
    s1 = s1.split('')

    for (var i=0; i<s2.length; i++) {
        
        if(s1[0]==s2[i]) {
            s1.shift()
            console.log(s1)
        }
    }

    if(s1.length!=0)
        return false

    return true
  
}
