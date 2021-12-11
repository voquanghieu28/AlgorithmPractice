function nestedEvenSum (result) {
    var total = 0
    const collect = (obj) => {
        
       if (typeof obj == 'object')
            
            Object.keys(obj).forEach(key => {
                if (typeof obj[key] == 'number' && obj[key]%2==0)
                    total+=obj[key]
                collect(obj[key])
                
            });
    }
    collect (result)
    
    return total 
}