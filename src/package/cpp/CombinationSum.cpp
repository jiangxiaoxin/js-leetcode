#include <iostream>;
#include <vector>;
#include <algorithm>;

using namespace std;

/*
��������л��ݷ�����ɶɶ˼��ģ��������Ҿ��þ��Ǹ��ݹ���ң�����ж�������

�ӱ�ѡ����ͷ��������֮���ٵݹ����������������ǡ�ɵõ�0����������·���Ǹ���ѡ������
��һ���ѵ㣬����helper�������signal������һ��ʼû����������������Ľ���ͻᵼ�·����ظ�����Ϊ��ÿһ������ͷ����������8=2+3+3��8=3+2+3��8=3+3+2���������ˡ�
��ϸ�۲������ݹ�����Ĺ��̣����ĳһ���������2����ô��һ��Ӧ�ü��ı�2��Ҫ�࣬�����2һ��������Ļ�������ֵ�٣���ζ��ʣ�µ�ֵ�ͻ�����ʣ�µ�ֵ�ͻ��и���Ŀ��ܷ�����

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