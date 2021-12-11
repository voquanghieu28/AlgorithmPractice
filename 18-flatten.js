function flatten(arr){
    var result = []
    const flat = (element) => {
        if(typeof element != 'object') 
            result.push(element)
        else 
            for (var i=0; i<element.length; i++)
            flat(element[i])
    }
    flat(arr)
    return result
}