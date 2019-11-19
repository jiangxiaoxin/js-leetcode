#include <iostream>;
#include <vector>;
#include <algorithm>;

using namespace std;

/*
别的题解里叫回溯法，又啥啥思想的，不懂。我觉得就是个递归查找，外加判断条件。

从备选项排头减，减了之后再递归减，如果发现最后能恰巧得到0，那整条回路就是个可选方案。
有一个难点，就是helper方法里的signal参数。一开始没有这个参数，这样的结果就会导致方案重复，因为是每一步都从头遍历，所以8=2+3+3，8=3+2+3，8=3+3+2，都出现了。
仔细观察整个递归遍历的过程，如果某一层剪掉的是2，那么下一层应该减的比2还要多，起码跟2一样。否则的话，减的值少，意味着剩下的值就会大，这个剩下的值就会有更多的可能方案。

*/

vector<vector<int>> combinationSum(vector<int>& candidates, int target);
void helper(vector<int> &candidates, int target, vector<int> &path, vector<vector<int>> &result, int signal);


vector<vector<int>> combinationSum(vector<int>& candidates, int target) 
{
	vector<int> path;
	vector<vector<int>> result;
	helper(candidates, target, path, result, 0);
	return result;
}

void helper(vector<int> &candidates, int target, vector<int> &path, vector<vector<int>> &result, int signal)
{
	if (target == 0)
	{
		result.push_back(path);
		return;
	}
	for (int i = 0; i < candidates.size(); i++)
	{
		if (target - candidates[i] >= 0 && candidates[i] >= signal)
		{
			path.push_back(candidates[i]);
			helper(candidates, target - candidates[i], path, result, candidates[i]);
			path.pop_back();
		}
	}
}



int main()
{
	/*vector<int> candidates = { 3,5,2,8 };
	int target = 8;*/

	vector<int> candidates = { 6,3,7,2 };
	int target = 7;

	//sort(candidates.begin(), candidates.end());


	vector<vector<int>> result = combinationSum(candidates, target);

	cout << "[";
	for (int i = 0; i < result.size(); i++)
	{
		cout << "[";
		vector<int> combination = result[i];
		for (int j = 0; j < combination.size(); j++)
		{
			cout << combination[j];
		}
		cout << "],";
	}

	cout << "]";

}