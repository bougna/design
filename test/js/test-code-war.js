function test(num){
    let s;
    let c=0;
    let n=String(num);
    while(n.length>1){
        s=1;
        for (var i = 0; i < n.length; i++) {
            document.write(i+'='+n[i]+'<br>');
            s*=parseInt(n[i]);
        }
        document.write('s = '+s+'<br>');
        n=String(s);
        c+=1;
    }
    return c;
}
function test(a,b){
    let s=0;
    while(a!=b){
        if(a<b){
            s+=a;
            a+=1;
        }else if(b<a){
            s+=b;
            b+=1;
        }
    }
    return s+a;
}
console.log(test(2,-1));