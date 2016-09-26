/**
 * Created by 杨阵雨大人 on 2016/9/25 0025.
 */
var table = [
  [0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0],
];
var table = [
  //对角为0；被关注的那行为0，列为1
  //  0  1  2  3  4  5  6  7  8  9
  /*0*/[0, 1, 0, 1, 0, 1, 0, 0, 0, 1,],
  /*1*/[1, 0, 1, 1, 0, 0, 1, 0, 0, 1,],
  /*2*/[0, 1, 0, 1, 0, 0, 0, 0, 1, 1,],
  /*3*/[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  /*4*/[1, 0, 0, 1, 0, 0, 0, 0, 0, 1,],
  /*5*/[0, 0, 0, 1, 1, 0, 0, 0, 1, 1,],
  /*6*/[0, 0, 1, 1, 1, 0, 0, 0, 0, 1,],
  /*7*/[1, 0, 0, 1, 1, 0, 1, 0, 0, 1,],
  /*8*/[0, 1, 0, 1, 1, 0, 0, 1, 0, 1,],
  /*9*/[0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
];
var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = {};
function follow(a, b) {
  return !!table[a][b]
}
function search(a) {
  //console.log('now result = ',result)
  console.log('check ' + a);
  for (var i = 0; i < p.length; i++) {
    if (!result[a]) {
      console.log(`check follow(${a}, ${p[i]}) = ${follow(a, p[i])}`);
      if (follow(a, p[i])) {
        result[a] = 1;
        a = p[i];
        i = -1;
      }
    }
    else {
      console.log(a + ' has been checked.');
      a=(a+1)%p.length;
    }
  }
  if (i == p.length) {
    console.log('fond:' + a)
    return a;
  }

}

console.log(search(4));