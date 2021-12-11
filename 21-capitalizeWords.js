function capitalizeWords (arr, i=0) {
    
    if(i==arr.length) return arr
    
    if(arr[i])
    arr[i] = arr[i].toUpperCase()
    return capitalizeWords(arr, i+1)
}