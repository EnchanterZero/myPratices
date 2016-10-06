/**
 * Created by 杨阵雨大人 on 2016/9/25 0025.
 */

var pages = [{p:0},{p:1},{p:2},{p:3},{p:4},{p:5},{p:6},{p:7},{p:8},{p:9},{p:10},{p:11},{p:12}];
function cacheNode() {
  this.page = null;
  this.next = null;
}
var cache = [];
var maxSize = 3;
var head = 0;
var tail = 0;

function load(pageNum) {
  console.log(`load page ${pageNum}`)
  return pageNum;
}
function askPage(num) {
  var index = queryCatch(num);
  if(index > -1){ //在缓存中找到
    var item = cache[index];
    cache.splice(index,1);
    cache.push(item);
  }else {//需要加入缓存
    //先加载对应页
    var newPage = load(num);
    if(cache.length < maxSize){
      cache.push(newPage);
    }else {
      var oldestItem = cache.shift();
      console.log(`淘汰页面[0]:${oldestItem}`);
      cache.push(newPage);
    }
  }
  console.log(`拿到页面[${cache.length-1}]:${cache[cache.length-1]}`);
  return cache[cache.length-1];
}
function queryCatch(num) {
  for(var i=0;i<cache.length;i++){
    if(cache[i] == num){
      return i;
    }
  }
  return -1;
}

var askSeq = [1,2,3,4,3,2,5,6,4,6,7,3,1,8,4,3,9,7,2];
askSeq.map(item =>{
  askPage(item);
});