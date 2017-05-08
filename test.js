/**
 * Created by Administrator on 2017/4/13.
 */
// console.time('6重循环运行时间');
// var s=0;
// for(var i=0;i<50;i++){
//     for(var j=0;j<100;j++)
//         for(var k=0;k<=150-i-j;k++)
//             for(var l=0;l<=150-i-j-k;l++)
//                 for(var m=0;m<=150-i-j-k-l;m++)
//                     for(var n=0;n<=150-i-j-k-l-m;n++){
//                                 o=150-i-j-k-l-m-m;
//                             if(100*i+50*j+20*k+10*l+5*m+2*n+o==4999&&o>=0){
//                                 console.log(i+'  '+j+' '+k+' '+l+' '+m +' '+n+' '+o);
//                                 s++;
//                             }
//
//                         }
//
//
// }
// console.log(s);
// console.timeEnd('6重循环运行时间');
// str='<xml><row expect="20170420-1114" opencode="6,4,5,0,0" opentime="2017-04-20 18:33:00"/></xml>'
// str=str.substr(0,200);
// var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;
// var m;
// if(m=str.match(reg)){
//  console.log(m[2]);
//
// }
// console.log(Date.now());
// var arr=[
//     {seatname:'慧',price:120},
//     {seatname:'1',price:120},
//     {seatname:'慧',price:121},
//     {seatname:'欣',price:88},
//     {seatname:'梅',price:99},
//     {seatname:'慧',price:3},
//     {seatname:'慧',price:1220},
//     {seatname:'慧',price:1231},
//     {seatname:'3欣',price:88},
//     {seatname:'梅',price:939}
// ];
// var a=[];
// var pro=[];
// for(var i=0;i<arr.length;i++){
//     if(pro.indexOf(arr[i].seatname)==-1){
//         a.push(arr[i]);
//         pro.push(arr[i].seatname);
//     }else a[pro.indexOf(arr[i].seatname)].price=Math.max(a[pro.indexOf(arr[i].seatname)].price,arr[i].price);
// }
// console.log(a);
var a={
    "'zu'":1234,
    '"zu"':123,
    'zu':12,
    zu:1
};
console.log(a);