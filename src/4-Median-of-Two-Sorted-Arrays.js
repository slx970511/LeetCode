var findMedianSortedArrays = function(nums1, nums2) {
  var i=0,j=0,k=0,arr=[];
  var totalLen = nums1.length + nums2.length;
  var medianIndex = parseInt(totalLen/2);
  while(i<nums1.length && j<nums2.length){
   if(nums1[i]<=nums2[j])
      arr[k++] = nums1[i++];
   else
      arr[k++] = nums2[j++];
   if(arr.length === medianIndex+1)
      break;
  }
  while(i<nums1.length && arr.length < medianIndex+1)
    arr[k++] = nums1[i++];
  while(j<nums2.length && arr.length < medianIndex+1)
    arr[k++] = nums2[j++];
  return totalLen/2 === parseInt(totalLen/2)? (arr[medianIndex]+arr[medianIndex-1])/2:arr[medianIndex];    
};
