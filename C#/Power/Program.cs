using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Power
{
	class Program
	{
		public static long Pow(int x, long power)
		{
			long result = 1;

			while (power > 0)
			{
				if ((power & 1) == 1)
				{
					result *= x;
					power >>= 1;
				}
				else
				{
					result *= x;
					--power;
				}
			}

			return result;
		}

		static void Main(string[] args)
		{
			int x = 2;
			long power;

			Console.Write("Введите степень: ");
			power = Convert.ToInt32(Console.ReadLine());

			Console.WriteLine($"2 в степени {power} = {Pow(x, power)}");

			Console.ReadKey();
		}
	}
}
