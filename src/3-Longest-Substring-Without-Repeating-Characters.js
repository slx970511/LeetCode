var lengthOfLongestSubstring = function(s) {
  var longestLen = 0;
  var currentSub = [];
  for(let i=0;i<s.length;i++){
    if(currentSub.indexOf(s[i])===-1){
      currentSub.push(s[i]);
      longestLen = currentSub.length > longestLen? currentSub.length:longestLen;
    }
    else
      currentSub = currentSub.slice(currentSub.indexOf(s[i])+1).concat(s[i]);
  }
  return longestLen;
};
