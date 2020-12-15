using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace LINQ
{
	class Client
	{
		public int client_Id;
		public int year;
		public int month;
		public double workoutDuration;

		public Client(int id, int year, int month, double workoutDuration)
		{
			client_Id = id;
			this.year = year;
			this.month = month;
			this.workoutDuration = workoutDuration;
		}
	}
	class Program
	{
		public static void firstTask()
		{
			int[] list = { -1, -4, -5, -3, 0, -10, -8, -9 };


			var select = list.Where(min => min > 0).DefaultIfEmpty().Min();

			Console.WriteLine(select);
		}

		public static void secondTask()
		{
			string[] list = { "AGN", "HSKGNLJFJF", "LJSJGGSFGJHFJ", "FGJ", "BHF" };

			var select = list.OrderBy(length => length.Length).ThenByDescending(alphabet => alphabet);

			foreach(var i in select)
			{
				Console.WriteLine(i);
			}
		}

		public static void thirdTask()
		{
			int[] list = { 122, 454, 135, 0, -32, 100, 82, 90 };

			var select = list.GroupBy( last => (last % 10))
							 .Select(max => max.Max())
							 .OrderBy(sort => (sort % 10));

			foreach (var i in select)
			{
				Console.WriteLine(i);
			}
		}

		//public static void fourthTask()
		//{
		//	var list = new List<Client>
		//	{
		//		new Client (1, 2020, 3, 1.5),
		//		new Client (2, 2020, 5, 2),
		//		new Client (3, 2020, 12, 1),
		//		new Client (4, 2020, 9, 3),
		//		new Client (5, 2020, 6, 1)
		//	};

		//	var select = list.GroupBy();

		//	foreach (var i in select)
		//	{

		//	}
		//}

		static void Main(string[] args)
		{
			firstTask();

			Console.WriteLine("-----------------------------------------------");

			secondTask();

			Console.WriteLine("-----------------------------------------------");

			thirdTask();

			Console.WriteLine("-----------------------------------------------");

			//fourthTask();

			Console.ReadKey();
		}
	}
}
