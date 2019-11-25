#include <iostream>

#include "ListNode.h"
#include <vector>

using namespace std;

int getNodeValue(ListNode *node)
{
	if (node == NULL)
	{
		return 0;
	}
	return node->val;
}

ListNode* addTwoNumbers(ListNode* l1, ListNode* l2)
{
	ListNode *signal = new ListNode(NULL);
	ListNode* last = signal;
	int overflow = 0;
	while (l1 || l2)
	{
	
		int sum = getNodeValue(l1) + getNodeValue(l2) + overflow;
		ListNode* node = new ListNode(sum%10);
		overflow = int(sum / 10);
		last->next = node;
		last = last->next;

		l1 = l1 != NULL ? l1->next : NULL;
		l2 = l2 != NULL ? l2->next : NULL;
	}
	// 到这里，l1和l2就都不存在了
	if (overflow > 0)
	{
		ListNode* a = new ListNode(1); //overflow是往前的进位，最大值也只能是1
		last->next = a;
		overflow = 0;
	}
	return signal->next;
}

/*2. Add Two Numbers*/

//int main()
//{
//	vector<int> a{ 2,4,3 };
//	vector<int> b{ 5,6,4,1 };
//
//	/*vector<int> a{ 2,9 };
//	vector<int> b{ 5,0, 6 };*/
//	
//
//	vector<ListNode*> list_a;
//	vector<ListNode*> list_b;
//	for (int i = 0; i < a.size(); i++)
//	{
//		list_a.push_back(new ListNode(a[i]));
//	}
//	for (int j = 0; j < b.size(); j++)
//	{
//		list_b.push_back(new ListNode(b[j]));
//	}
//	for (int m = 0; m < list_a.size() - 1; m++)
//	{
//		list_a[m]->next = list_a[m + 1];
//	}
//	for (int n = 0; n < list_b.size() - 1; n++)
//	{
//		list_b[n]->next = list_b[n + 1];
//	}
//	ListNode* result = addTwoNumbers(list_a[0], list_b[0]);
//	printList(result);
//}