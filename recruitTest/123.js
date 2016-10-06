
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
if (chunk !== null) {
  //console.log(chunk);
  console.log(foo(chunk));
  //foo(chunk);
}
});

function foo(str) {
  var str2 = "";
  str = str.replace('\n','');
  str.trim();
  var arr = str.split(" ");
  for(var i=arr.length-1;i>=0;i--){
    str2 += arr[i];
    if(i!=0) {
      str2 +=" ";
    }
  }
  return str2;
}
