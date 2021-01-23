

/**
 * @param  {number} a
 * @param  {number} b
 * @param  {number} r
 * @param  {string} s1
 * @param  {string} s2
 * @param  {string} s3
 * @param  {string} s4
 * @param  {string} s5
 */
// bài 1
function tinhTong(a,b) {
    return a+b;
}
// bài 2
function tinhHieu(a,b) {
    return a-b;
}
// bài 3
function tinhTich(a,b) {
    return a*b;
}
// bài 4
function tinhThuong(a,b) {
    if(b == 0 ){ 
        return "a không chia được cho 0";
    }else if(a == 0){
        return "b không chia được cho 0"; 
    }else{
        var c = a/b;
        var d = b/a;
        return "Thương của a/b là: "+ c +"<br> Thương của b/a là: "+ d +"" ; 
    }
}
// bài 5
function tinhBinhPhuong(a) {
    return a*a;
}
// bài 6
function soLonNhat(a,b) {
    var max;
    if(a=max){showLog = (message) =>{
        console.log(message);
        return document.write(message);
    }
    showLog("Hello World");
    
    /**
     * @param  {number} a
     * @param  {number} b
     * @param  {number} r
     * @param  {string} s1
     * @param  {string} s2
     * @param  {string} s3
     * @param  {string} s4
     * @param  {string} s5
     */
    // bài 1
    function tinhTong(a,b) {
        return a+b;
    }
    // bài 2
    function tinhHieu(a,b) {
        return a-b;
    }
    // bài 3
    function tinhTich(a,b) {
        return a*b;
    }
    // bài 4
    function tinhThuong(a,b) {
        if(b == 0 ){ 
            return "a không chia được cho 0";
        }else if(a == 0){
            return "b không chia được cho 0"; 
        }else{
            var c = a/b;
            var d = b/a;
            return "Thương của a/b là: "+ c +"<br> Thương của b/a là: "+ d +"" ; 
        }
    }
    // bài 5
    function tinhBinhPhuong(a) {
        return a*a;
    }
    // bài 6
    function soLonNhat(a,b) {
        var max;
        if(a=max){
            max=a;
        }else{
            max=b;
        }
        return  max;
    }
    // bài 7
    function soNhoNhat(a,b) {
        var min;
        if(a=min){
            min=a;
        }else{
            min=b;
        }
        return  min;
    }
    // bài 8
    function tinhTrungBinh(a,b) {
        var avg;
        avg = (a+b)/2;
        return avg;
    }
    function kiemTraSoChia(a,b) {
        if (a % b == 0 && a >= b) {
            return "a chia hết cho b";
    
        } else if (a <= b && b % a == 0) {
            return "b chia hết cho a";
        } else if (a % b != 0 && a >= b) {
            return "a không chia hết cho b";
        } else if (b % a != 0 && a <= b) {
            return "b không chia hết cho a";
        }
        return false;
    }
    function chuViChuNhat(a,b) {
        var chuVi = 0;
        chuVi = (a + b) * 2;
        return chuVi;
    }
    function dienTichChuNhat(a,b) {
        var dienTich = 0;
        dienTich = a * b;
        return dienTich;
    }
    function chuViHinhTron(r) {
        var banKinh = 0;
        banKinh = r * 2 * 3.14;
        return banKinh;
    }
    function dienTichHinhTron(r) {
        var dienTichHinhTron = 0;
        dienTichHinhTron = r * r * 3.14;
        return dienTichHinhTron;
    }
    
    function noiChuoi(s1,s2) {
        var chuoi = s1.concat(s2);
        return chuoi;
    }
    function noiChuoiHam2(s1,s2,s3,s4,s5) {
        var chuoi = s1.concat(s2,s3,s4,s5);
        return chuoi;
    }
    function inHoa(s1){
        var chuoiInHoa = "";
        chuoiInHoa = s1.toUpperCase();
        return chuoiInHoa;
    
    }
    function inHoaChuoi(s1,s2,s3,s4,s5) {
        var str1 = s1.toUpperCase();
        var str2 = s2.toUpperCase();
        var str3 = s3.toUpperCase();
        var str4 = s4.toUpperCase();
        var str5 = s5.toUpperCase();
        var chuoi = s1.concat(s2,s3,s4,s5).toUpperCase();
        return "s1: " + str1 + ", " + "s2: " + str2 + ", " + "s3: " + str3 + ", "
        + "s4: " + str4 + ", " + "s5: " + str5 + " In hoa chuỗi: " + chuoi;
    }
    function coTonTai(b1, b2) {
        var str = b1.indexOf(b2);
        if(str == -1){
            return "không tồn tại";
        } else{
            return "có tồn tại";
        }
    }
    function demChuoi(s1,s2,s3,s4,s5) {
        var str1 = s1.length;
        var str2 = s2.length;
        var str3 = s3.length;
        var str4 = s4.length;
        var str5 = s5.length;
        var chuoi = s1.concat(s2,s3,s4,s5).length;
        return " chuỗi s1: " + str1 + ", " + "chuỗi s2: " + str2 + ", " + "chuỗi s3: " + str3 + ", "
        + "chuỗi s4: " + str4 + ", " + "chuỗi s5: " + str5 + " Đếm Chuỗi: " + chuoi;
    }
    function catChuoiCon(s1,s2,s3,s4,s5) {
        var str1 = s1.substr(1,3);
        var str2 = s2.substr(1,3);
        var str3 = s3.substr(1,3);
        var str4 = s4.substr(1,3);
        var str5 = s5.substr(1,3);
        return " chuỗi con s1: " + str1 + ", " + "chuỗi con s2: " + str2 + ", " + "chuỗi con s3: " + str3 + ", "
        + "chuỗi con s4: " + str4 + ", " + "chuỗi con s5: " + str5 ;
    }
        max=a;
    }else{
        max=b;
    }
    return  max;
}
// bài 7
function soNhoNhat(a,b) {
    var min;
    if(a=min){
        min=a;
    }else{
        min=b;
    }
    return  min;
}
// bài 8
function tinhTrungBinh(a,b) {
    var avg;
    avg = (a+b)/2;
    return avg;
}
function kiemTraSoChia(a,b) {
    if (a % b == 0 && a >= b) {
        return "a chia hết cho b";

    } else if (a <= b && b % a == 0) {
        return "b chia hết cho a";
    } else if (a % b != 0 && a >= b) {
        return "a không chia hết cho b";
    } else if (b % a != 0 && a <= b) {
        return "b không chia hết cho a";
    }
    return false;
}
function chuViChuNhat(a,b) {
    var chuVi = 0;
    chuVi = (a + b) * 2;
    return chuVi;
}
function dienTichChuNhat(a,b) {
    var dienTich = 0;
    dienTich = a * b;
    return dienTich;
}
function chuViHinhTron(r) {
    var banKinh = 0;
    banKinh = r * 2 * 3.14;
    return banKinh;
}
function dienTichHinhTron(r) {
    var dienTichHinhTron = 0;
    dienTichHinhTron = r * r * 3.14;
    return dienTichHinhTron;
}

function noiChuoi(s1,s2) {
    var chuoi = s1.concat(s2);
    return chuoi;
}
function noiChuoiHam2(s1,s2,s3,s4,s5) {
    var chuoi = s1.concat(s2,s3,s4,s5);
    return chuoi;
}
function inHoa(s1){
    var chuoiInHoa = "";
    chuoiInHoa = s1.toUpperCase();
    return chuoiInHoa;

}
function inHoaChuoi(s1,s2,s3,s4,s5) {
    var str1 = s1.toUpperCase();
    var str2 = s2.toUpperCase();
    var str3 = s3.toUpperCase();
    var str4 = s4.toUpperCase();
    var str5 = s5.toUpperCase();
    var chuoi = s1.concat(s2,s3,s4,s5).toUpperCase();
    return "s1: " + str1 + ", " + "s2: " + str2 + ", " + "s3: " + str3 + ", "
    + "s4: " + str4 + ", " + "s5: " + str5 + " In hoa chuỗi: " + chuoi;
}
function coTonTai(b1, b2) {
    var str = b1.indexOf(b2);
    if(str == -1){
        return "không tồn tại";
    } else{
        return "có tồn tại";
    }
}
function demChuoi(s1,s2,s3,s4,s5) {
    var str1 = s1.length;
    var str2 = s2.length;
    var str3 = s3.length;
    var str4 = s4.length;
    var str5 = s5.length;
    var chuoi = s1.concat(s2,s3,s4,s5).length;
    return " chuỗi s1: " + str1 + ", " + "chuỗi s2: " + str2 + ", " + "chuỗi s3: " + str3 + ", "
    + "chuỗi s4: " + str4 + ", " + "chuỗi s5: " + str5 + " Đếm Chuỗi: " + chuoi;
}
function catChuoiCon(s1,s2,s3,s4,s5) {
    var str1 = s1.substr(1,3);
    var str2 = s2.substr(1,3);
    var str3 = s3.substr(1,3);
    var str4 = s4.substr(1,3);
    var str5 = s5.substr(1,3);
    return " chuỗi con s1: " + str1 + ", " + "chuỗi con s2: " + str2 + ", " + "chuỗi con s3: " + str3 + ", "
    + "chuỗi con s4: " + str4 + ", " + "chuỗi con s5: " + str5 ;
}