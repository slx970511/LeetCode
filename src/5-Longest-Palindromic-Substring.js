var longestPalindrome = function(s) {
  var p = [];
  var maxLen = 1;
  var sub = s[0];
  for(let i=0;i<s.length;i++){
    for(let j=i;j<s.length;j++)
      p[i] = [];
    p[i][i]=1;
    p[i][i+1] = s[i]===s[i+1]?1:0;
    if(s[i]===s[i+1]){
        maxLen = 2;
        sub = s.slice(i,i+2);
    }    
  }
   for(let r=3;r<=s.length;r++){ //步长从3开始
     for(let i=0;i<=s.length-r;i++){  //i为起始索引
       let j = i+r-1;
       p[i][j] = s[i]===s[j]? p[i+1][j-1]:0;
       if(p[i][j]===1 && j-i+1>maxLen ){
           maxLen = j-i+1;
           sub = s.slice(i,j+1);
       }       
     }
   }  
  return sub;
};
