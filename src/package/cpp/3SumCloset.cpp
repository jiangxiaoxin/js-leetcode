#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <limits.h>


using namespace std;

int threeSumClosest(vector<int>& nums, int target) {
	sort(nums.begin(), nums.end());
	int r = INT_MAX; // r返回的要么是target，要么是距离最近的和
	int min_distance = INT_MAX;// 最短距离一定是有的，所以初始化为INT_MAX，这样任何一个实际有效值就可以使min_distance不再是INT_MAX
	for (int i = 0; i < nums.size(); i++)
	{
		int left = i + 1;
		int right = nums.size() - 1;
		while (left < right)
		{
			int sum = nums[i] + nums[left] + nums[right];
			int distance = abs(sum - target);
			if (distance == 0)
			{
				//正好相等
				r = sum;
				min_distance = 0;
				return r; // return 会直接跳出整个函数的执行
			}
			if (distance < min_distance)
			{
				min_distance = distance;
				r = sum;
			}
			if (sum < target)
			{
				// 想让left变大，但是会遇到前后都是一样的情况。这些没必要重复计算，直接跳过
				//left++;
				int start = left + 1;
				while (start < right && nums[start] == nums[left])
				{
					start++;
				}
				left = start;
			}
			else
			{
				// 跟left类似，直接跳过一样的
				//right--;
				int end = right - 1;
				while (end > left && nums[end] == nums[right])
				{
					end--;
				}
				right = end;
			}
		}
	}
	return r;
}

int main()
{
	//vector<int> nums = { -1, 2, 1, -4,1,1,1,1,2,2,2,2 };
	//vector<int> nums = { -2,0,2,3 };
	vector<int> nums = { -1,2,1,-4 };
	int target = 1;
	int r = threeSumClosest(nums, target);
	printf("%d", r);

	/*vector<int> nums = { 2,-1,1,0,2,3,4,5,6 };
	for (int i = 0; i < nums.size(); i++)
	{
		for (int j = i + 1; j < nums.size(); j++)
		{
			for (int k = j + 1; k < nums.size(); k++)
			{
				if (nums[i] + nums[j] + nums[k] == 0)
				{
					printf("found:%d+%d+%d=0\n", nums[i], nums[j], nums[k]);
					return 0;
				}
				else
				{
					printf("%d+%d+%d != 0\n", nums[i], nums[j], nums[k]);
				}
			}
		}
	}
	return 0;*/
}

