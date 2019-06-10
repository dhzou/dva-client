var a = [1,3,5,7,9];
var b = [2,4,6,8,10];

var sore = function(a,b) {
    var alen = a.length;
    var blen = b.length;
    var pos = alen + blen - 1;
    var res =[];
    while (alen > 0) {
        if (blen > 0 && b[blen - 1] > a[alen - 1]) {
            res[pos--] = b[--blen];
        }else {
            res[pos--] = a[--alen];
        }
    }
    return res;
}




var sort2 = function (a,b) {
    var m = a.length;
    var n = b.length;
    var res =[];
    if (m ===0 && n === 0) {
        return res
    }
    var i = 0 ,j = 0,pos =0;
    while(i < m || j < n) {
        if (i < m && j < n) {
            if (a[i]  < b[j]) {
                res[pos++] = a[i++];
            } else {
                res[pos++] = b[j++];
            }
        } else if (i < m) {
            res[pos++] = a[i++];
        } else {
            res[pos++] = b[j++];
        }
    }
    return res;
}

console.log(sort2(a,b));