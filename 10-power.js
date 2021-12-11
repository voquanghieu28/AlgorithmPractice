function power(base, pow){
    if(pow==0)
        return 1
    return base * power(base, pow-1)
}