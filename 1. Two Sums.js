// ------------------------------------- 60ms
const nums = [2,7,11,15];

const twoSum = function(nums, target){
    const temp = [];
    nums.forEach(element => {
        let hash = (Math.abs(element-target));
        temp.push(nums.indexOf(hash));
        temp.sort();
        output = temp.slice((temp.length)-2 );
    });
   return output;
}





// --------------------------------------------- 52ms

const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};
