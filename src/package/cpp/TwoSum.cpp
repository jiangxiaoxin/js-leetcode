#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;
/*
1. Two Sum
题目说了只有1种解决方案
最简单的就是两层遍历，去组合计算和等不等
map的方法只要一次遍历就可以得出结果，效率会高出很多
*/

//vector<int> twoSum(vector<int>& nums, int target)
//{
//	vector<int> result;
//	for (int i = 0; i < nums.size(); i++)
//	{
//		for (int j = i+1; j < nums.size(); j++)
//		{
//			if (nums[i] + nums[j] == target)
//			{
//				result.push_back(i);
//				result.push_back(j);
//				break;
//			}
//			if (result.size() == 2)
//			{
//				break;
//			}
//		}
//	}
//
//	return result;
//}

vector<int> twoSum(vector<int>& numbers, int target)
{
	unordered_map<int, int> m;
	vector<int> result;
	for (int i = 0; i < numbers.size(); i++) {
		if (m.find(numbers[i]) == m.end()) {
			m[target - numbers[i]] = i;
		}
		else {
			result.push_back(m[numbers[i]]);
			result.push_back(i);
			break;
		}
	}
	return result;
}



void printVector(vector<int>& vec)
{
	for (int i = 0; i < vec.size(); i++)
	{
		cout << vec[i] << "\n";
	}
}

//int main()
//{
//	vector<int> nums = { 2, 7, 11, 15 };
//	int target = 9;
//	vector<int> result = twoSum(nums, target);
//	printVector(result);
//}