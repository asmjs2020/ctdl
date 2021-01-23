const showMessage = (message,n) => {
    for (let index = 0; index < n; index++) {
        document.write(message + "<br>");
    }
}
showMessage("Hôm nay trời đẹp quá",10);

function tinhTongTu1DenN(n){
    var tong=0;
    for (let i = 1; i <= n; i++) {
        tong = tong + i;
    }
    return tong;
}

function tinhTongTuADenB(a,b){
    var tong=0;
    for (let i = a; i <= b; i++) {
        tong = tong + i;
    }
    return tong;
}

function tinhTongCacSoLeTuADenB(a,b){
    var tong=0;
    for (let i = a; i <= b; i++) {
        if(i%2 != 0){
            tong = tong + i;
        }
    }
    return tong;
}

listOdd = (amount) =>{
    let mangLe = []
    for (let i = 1 ; true ; i++) {
        i % 2 != 0 ?  mangLe.push(`<span  style='padding-left: 5px;'>  ${i} </span> `) : i = i
        if(mangLe.length == amount) {break}
        if(mangLe.length == 100) {break}
    }
    return mangLe
}
listOddAToB = (from, amount) =>{
let mangAtoB = [];
for (from ; true ; from++) {
   from % 2 != 0 ? (  mangAtoB.push(`<span  style='padding-left: 5px;'>  ${from} </span> `)   ) : from = from
   if(mangAtoB.length == amount ) {break}
}
return mangAtoB;
}

isPrime = (n) =>{
    let kiemTraNguyenTo = false;
    if( n < 2) { return ` ${n}  <span   > Không phải số nguyên tố </span> `   } else if(n == 2 ){ return `${n}  <span   > là số nguyên tố </span> `}
    for(let i = 2 ; i < (n-1)  ; i ++){
        if(n % i == 0) {return  `${n} <span   > Không phải số nguyên tố  </span>`} 
        (n % i != 0) ? kiemTraNguyenTo = true : n=n
    }
    return `${n} <span   > Là số nguyên tố  </span>`
}
listPrime =(amount) =>{
    let mangSNT = []
   
    let dem = 0
    mangSNT.push( `2 <span   >  </span> `)
    for(let i = 3 ; true ; i++){
        for(let j = 2 ; j < (i-1) ; j++) {
            if(i % j == 0 ) {
                dem ++ ;
            }
        }
    dem == 0 ? mangSNT.push(`${i} <span   > </span>`) : dem = 0
    if(mangSNT.length == amount ){return mangSNT}}
}
listPrimeToFrom = (from, amount)=>{
    let indexSNT = 1
    let mangSNT = []
    let dem = 0
    for (from ; true ; from ++ ){
        for (let number = 2 ; number < (from-1) ; number ++ ){
            from % number == 0 ? dem ++ : number = number
          
        }
    dem == 0 ?  mangSNT.push(`${from} <span   >  </span>`) : dem = 0 
    if( mangSNT.length == amount ) {return mangSNT}
    }
}