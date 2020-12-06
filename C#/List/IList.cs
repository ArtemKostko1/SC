using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List
{
	interface IList
	{
		void AddNode(int data);

		void AddPositionNode(int pos, int data);

		void RemoveNode();

		void DeletePositionNode(int pos);

		void Sort();

		void Print();
	}
}
