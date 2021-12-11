function isPalindrome(str){
    const check = (left, right) => {
        if(left>right) return true
        
        if(str[left]==str[right]) 
            return check(left+1, right-1)
        
        return false
    }
    return check(0, str.length-1)
}