function fibonaci(n){
    if(n==1 || n==2){
        return 1;
        
    }
    return fibonaci(n-1) + fibonaci(n-2);
}