using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List
{
	class DoubleList : IList
	{
		public DoubleNode headNode = null;
		public int size = 0;

		public void AddNode(int data)
		{

			DoubleNode newNode = new DoubleNode(data);

			if (headNode == null)
			{
				headNode = newNode;
			}
			else
			{
				var current = headNode;

				while (current.nodeNext != null)
				{
					current = current.nodeNext;
				}
				current.nodeNext = newNode;
				newNode.nodePrev = current;
			}
			size++;
		}

		public void AddPositionNode(int pos, int data)
		{
			DoubleNode temp = new DoubleNode(data);

			var current = headNode;
			var previos = headNode;

			for (int i = 0; i < pos - 1; i++)
			{
				previos = current;
				current = current.nodeNext;
			}

			previos.nodeNext = temp;
			temp.nodePrev = previos;

			temp.nodeNext = current;
			current.nodePrev = temp;

			size++;
		}

		public void DeletePositionNode(int pos)
		{
			var current = headNode;
			var previos = headNode;

			for (int i = 0; i < pos - 1; i++)
			{
				previos = current;
				current = current.nodeNext;
			}

			previos.nodeNext = current.nodeNext;
			current.nodeNext.nodePrev = previos;

			size--;
		}

		public void RemoveNode()
		{
			var current = headNode;
			var previos = headNode;

			while (current.nodeNext != null)
			{
				previos = current;
				current = current.nodeNext;
			}

			previos.nodeNext = null;

			size--;
		}

		public void Sort()
		{
			for (int i = 0; i < size; i++)
			{
				for (int j = i + 1; j < size; j++)
				{
					if (this[i].data > this[j].data)
					{
						var tmp = this[i].data;
						this[i].data = this[j].data;
						this[j].data = tmp;
					}
				}
			}
		}

		public void Print()
		{
			for (int i = 0; i < size; i++)
			{
				Console.WriteLine(this[i].data);
			}
		}

		public DoubleNode this[int index]
		{
			get
			{
				int i = 0;
				var current = headNode;

				while (i != index)
				{
					current = current.nodeNext;
					i++;
				}

				return current;
			}
		}
	}

	class DoubleNode
	{
		public int data { get; set; }
		public DoubleNode nodeNext { get; set; }
		public DoubleNode nodePrev { get; set; }

		public DoubleNode(int data)
		{
			this.data = data;
			this.nodeNext = null;
			this.nodePrev = null;
		}
	}
}
