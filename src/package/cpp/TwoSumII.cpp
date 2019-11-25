#include <iostream>
#include <vector>

using namespace std;

/*
168 two sum ii
*/
vector<int> twoSumII(vector<int>& numbers, int target) 
{
	vector<int> result;
	int start = 0;
	int end = numbers.size() - 1;
	while (start < end)
	{
		if (numbers[start] + numbers[end] == target)
		{
			result.push_back(start + 1);
			result.push_back(end + 1);
			break;
		}
		else if (numbers[start] + numbers[end] > target)
		{
			end -= 1;
		}
		else
		{
			start += 1;
		}
	}

	return result;
}

//int main()
//{
//	vector<int> nums = { 2, 7, 11, 15 };
//	int target = 9;
//	vector<int> result = twoSumII(nums, target);
//	for (int i = 0; i < result.size(); i++)
//	{
//		cout << result[i] << endl;
//	}
//
//}