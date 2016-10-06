/**
 * Created by 杨阵雨大人 on 2016/9/13 0013.
 */
// var jsonStr = '{"year": "2016","month": "09","day": "13","week": [{ "day": "11", "month": "09", "week": "日" },{ "day": "12", "month": "09", "week": "一" },{ "day": "13", "month": "09", "week": "二" },{ "day": "14", "month": "09", "week": "三" },{ "day": "15", "month": "09", "week": "四" },{ "day": "16", "month": "09", "week": "五" },{ "day": "17", "month": "09", "week": "六" }]}';
// var jsonObj = JSON.parse(jsonStr);
// for(var key in jsonObj){
//   if(key == 'week'){
//     jsonObj[key].map(function (oneDay) {
//       console.log(oneDay.day);
//     })
//   }
// }
// function isMerge(s, part1, part2) {
// //code here
//   for(var i=0;i<s.length;i++) {
//     var i1 = part1.indexOf(s[i]);
//     var i2 = part2.charAt
//   }
// }

//

var arr = ["one", "two","two", "three", "three", "three"];

function foo(arr) {
  function search(array,item) {
    for(var i = 0;i<array.length;i++){
      if(array[i].data === item){
        return i;
      }
    }
    return -1;
  }
  var result = [];
  arr.map(item =>{
    var i = search(result,item);
    if(i > -1){
      result[i].count++;
    }else {
      result.push({data:item ,count:1})
    }
  })
  var maxItem = {data:null,count:0};
  result.map(item =>{
    if(item.count > maxItem.count){
      maxItem = item;
    }
  })
  return maxItem.data;
}
console.log(foo(arr));

function each(arr,fn) {
  for(var i=0;i<arr.length;i++){
    (function (i) {
      fn(arr[i]);
    })(i)
  }
}
each([1,2],(i)=>{console.log(i+1)});


