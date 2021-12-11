function findLongestSubstring(str){

    var track = {}
    var notCountPoint = -1
    var longest = 0
    var temp = 0
    
    for (let i=0; i<str.length; i++) {
        
        if (track[str[i]]!=undefined && track[str[i]]>notCountPoint) {
            notCountPoint = track[str[i]]
            if(temp>longest) longest = temp
            temp =   i - track[str[i]]-1          
        }
        temp++
        track[str[i]] = i
    }
    if(temp>longest) longest = temp
    return longest
}