#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include "utils.h"

using namespace std;




vector<vector<int>> threeSum(vector<int>& nums) 
{
	vector<vector<int>> result;
	sort(nums.begin(), nums.end());
	/*printf("排序后:");
	printVector(nums);*/
	for (int i = 0; i < nums.size(); i++)
	{
		if (i > 0 && nums[i - 1] == nums[i])
		{
			continue;
		}
		if (nums[i] > 0)
		{
			// 如果循环到某个数，它的值已经大于0了，那后面的数就更比0大，因为前面已经sort过了，所以后面的数怎么也加不出0来
			break;
		}
		int left = i + 1;
		int right = nums.size() - 1;
		while (left < right)
		{
			int sum = nums[i] + nums[left] + nums[right];
			if (sum >0)
			{
				right--;
			}
			else if (sum < 0)
			{
				left++;
			}
			else
			{
				result.push_back({ nums[i],nums[left],nums[right] });
				int start = left + 1;
				while (start < right && nums[start-1] == nums[start])
				{
					start++;
				}
				left = start;
				int end = right - 1;
				while (end > left && nums[end] == nums[end + 1])
				{
					end--;
				}
				right = end;
			}
		}
	}
	return result;
}



/*
15. 3Sum
数组里的数字可以重复使用
*/

int main()
{
	vector<int> nums = { -1, 0, 1, 2, -1, -4 };
	vector<vector<int>> result = threeSum(nums);

	for (int i = 0; i < result.size(); i++)
	{
		vector<int> items = result[i];
		for (int j = 0; j < items.size(); j++)
		{
			printf("%d  ", items[j]);
		}
		printf("\n");
	}

}