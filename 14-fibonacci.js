function fib(position){
    if (position==1||position==2)
      return 1
    return fib(position-1)+fib(position-2)
}