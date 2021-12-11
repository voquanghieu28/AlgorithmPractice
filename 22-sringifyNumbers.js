
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj) {
    var result = Object.assign({}, obj)
    const collect = (obj) => {
        
       if (typeof obj == 'object')
            
            Object.keys(obj).forEach(key => {
                if (typeof obj[key] == 'number')
                    obj[key] = obj[key].toString()
                collect(obj[key])
                
            });
    }
    collect (result)

    return result 
}
stringifyNumbers(obj)