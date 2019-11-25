#include <iostream>
#include <vector>
#include <algorithm>


using namespace std;

/*循环求出所有的可能性，选出其中最大的值*/
/*暴力求解一般都会解出来，但往往不是最优的方案*/
//int maxAera(vector<int>& height)
//{
//	int result = 0;
//	int len = height.size();
//	for (int i = 0; i < len; i++)
//	{
//		for (int j = i+1; j < len; j++)
//		{
//			int aera = (j - i) * min(height[i], height[j]);
//			if (aera > result)
//			{
//				result = aera;
//			}
//		}
//	}
//
//	return result;
//}


/*
上面的暴力方法就是为了求出以某条边为左侧，然后以其余的为右侧，计算容器盛水多少，最后比较出最大的值。
这种暴力方法会遍历任何组合，但针对这个问题，其实有很多组合是不需要再计算的。

容器的面积是由最短的那边和距离决定的。

先算1和7，容器是以最短的为边的.从右侧往里移动，所有组成的容器aera肯定小于或者等于此时的aera。因为距离变小了，并且
要么1仍然是两者中的最短边，要么另外一条边是最短的，只有这两种情况，不管哪种，面积都变小了。所以这就算出来1为边的最大面积了。

左边往里走，变成(8,7)。此时计算出面积，然后跟上一步的面积比较，得出较大值。此时这个面积值就是以7为一条固定边所有的容器的最大面积了。
因为其余所有的(x,7)的组合,宽度比（8，7）小，高度也定了，最大就是7，所以没有比（8，7）更大的值了，而这个值跟上一步的面积比，反正能得出最大的值，
那也就是求出了以7为固定边的最大值。

再往里走，就变成了（8，3），同样的道理，以3为固定边，和其它的边组成的容器面积不会变更大。跟上一步比较后，就得出了以3为固定边的最大面积。

继续走下去，就会找出以所有的边为固定边的容器的面积最大值。在这个过程中，比暴力法省了很多重复的比较。每个边比较一次就行了。O(n)
*/
int maxAera(vector<int>& height)
{
	int result = 0;
	int i = 0;
	int j = height.size() - 1;
	while (i < j)
	{
		int aera = min(height[i], height[j]) * (j - i);
		result = max(aera, result);
		if (height[i] < height[j])
		{
			i++;
		}
		else
		{
			j--;
		}
	}
	return result;
}


//11. Container With Most Water
int main()
{
	vector<int> height = { 1,8,6,2,5,4,8,3,7 };
	int result = maxAera(height);
	printf("%d", result);
}