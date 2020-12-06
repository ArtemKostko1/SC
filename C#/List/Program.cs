using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace List
{
	class Program
	{
		public static void CheckList(IList list, Random random)
		{
			Console.WriteLine("ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В ЛИСТ");
			for (int i = 0; i < 5; i++)
			{
				list.AddNode(random.Next(0, 10));
			}
			list.Print();

			Console.WriteLine("УДАЛЕНИЕ ПОСЛЕДНЕГО ЭЛЕМЕНТА");
			list.RemoveNode();
			list.Print();

			Console.WriteLine("ДОБАВЛЕНИЕ ЭЛЕМЕНТА ПО ИНДЕКСУ");
			list.AddPositionNode(3, 100);
			list.Print();

			Console.WriteLine("УДАЛЕНИЕ ЭЛЕМЕНТА ПО ИНДЕКСУ");
			list.DeletePositionNode(3);
			list.Print();

			Console.WriteLine("СОРТИРОВКА");
			list.Sort();
			list.Print();

			Console.WriteLine("----------------------------------------------------");
		}

		static void Main(string[] args)
		{
			SingleList singleList = new SingleList();
			DoubleList doubleList = new DoubleList();

			Random random = new Random();

			CheckList(singleList, random);
			CheckList(doubleList, random);

			Console.ReadKey();
		}
	}
}
