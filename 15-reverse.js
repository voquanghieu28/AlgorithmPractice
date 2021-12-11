function reverse(foo){
    if (foo.length==1)
      return foo[0]
    return foo[foo.length-1] + reverse(foo.slice(0, foo.length-1))
  }