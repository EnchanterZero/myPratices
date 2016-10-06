/**
 * Created by 杨阵雨大人 on 2016/9/27 0027.
 */

var bigArray = [];
var number = 10000;
do{
  var b = Math.round(Math.random()*4);

  var n = Math.round(Math.random()*(Math.pow(10,b)));
  bigArray.push(n);
}while(number--);

function topK(arr,k) {
  sort(arr,0,k);
  for(var i=k;i<bigArray.length;i++){
    if(bigArray[i] > bigArray[k-1]){
      var t = bigArray[i];
      bigArray[i] = bigArray[k-1];
      bigArray[k-1] =t;
      sort(arr,0,k);
    }
  }
}
function sort(arr,start,end) {
  for(var i=start+1;i<end;i++){
    var current = arr[i];
    for(var j=i;j>start;j--){
      if(arr[j]>arr[j-1]){
        var t = arr[j];
        arr[j] = arr[j-1];
        arr[j-1]=t;
      }
    }
  }
}
var arr=[3,5,1,4,8,6,7,9,0,2];
bigArray.map((n,i)=> {
  if (i < 100) {
    console.log(`${i},${n}`);
  }
});
// sort(bigArray,0,100);
// bigArray.map((n,i)=> {
//   if (i < 100) {
//   console.log(`${i},${n}`);
// }
// });
topK(bigArray,100);
bigArray.map((n,i)=> {
  if (i < 100) {
  console.log(`${i},${n}`);
}
});