const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
function collectStrings(obj) {
    var result = []
    const collect = (obj) => {
        if (typeof obj == 'string')
            result.push(obj)
        else if (typeof obj == 'object')
            
            Object.values(obj).forEach(val => {
                collect(val)
            });
    }
    collect (obj)

    return result

}

collectStrings(obj)