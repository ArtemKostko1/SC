using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UML
{
	class Program
	{
		//INTERFACES
		interface ICustomer
		{
			void PrintCustomers();
		}

		interface IStoreAdmin
		{
			void PrintSroreAdmins();
		}

		interface IPayment
		{
			void PrintPayments();
		}

		interface IRequiredCustomer : ICustomer
		{
			void RequiredPrintCustomers();
		}

		interface IRequiredStoreAdmin : IStoreAdmin
		{
			void RequiredPrintSroreAdmins();
		}

		interface IRequiredPayment : IPayment
		{
			void RequiredPrintPayments();
		}

		interface IRequiredSQLColumn
		{
			void RequiredPrintSQLColumns();
		}

		interface IRequiredOrder
		{
			void RequiredPrintOrders();
		}

		interface IRequiredAdjustStock
		{
			void RequiredPrintAdjustStock();
		}


		//CLASSES
		class OnlineStore : ICustomer, IStoreAdmin, IPayment
		{
			public void PrintCustomers()
			{
				Console.WriteLine("*Список покупателей*");
			}

			public void PrintSroreAdmins()
			{
				Console.WriteLine("*Список админов*");
			}

			public void PrintPayments()
			{
				Console.WriteLine("*Отчёт оплат*");
			}
		}

		class StoreFront : OnlineStore, IRequiredCustomer, IRequiredStoreAdmin, IRequiredSQLColumn, IRequiredOrder
		{
			public void RequiredPrintCustomers()
			{
				Console.WriteLine("*Требуемый интерфейс: список покупателей*");
			}

			public void RequiredPrintSroreAdmins()
			{
				Console.WriteLine("*Требуемый интерфейс: список админов*");
			}

			public void RequiredPrintSQLColumns()
			{
				Console.WriteLine("*Требуемый интерфейс: SQL колоноки*");
			}

			public void RequiredPrintOrders()
			{
				Console.WriteLine("*Требуемый интерфейс: список заказов*");
			}
		}

		class Catalogue : IRequiredSQLColumn, IRequiredAdjustStock
		{
			public void RequiredPrintSQLColumns()
			{
				Console.WriteLine("*Требуемый интерфейс: SQL колоноки*");
			}

			public void RequiredPrintAdjustStock()
			{
				Console.WriteLine("*Требуемый интерфейс: склад*");
			}
		}

		class OrderSystem : IRequiredPayment, IRequiredOrder, IRequiredAdjustStock
		{
			public void RequiredPrintPayments()
			{
				Console.WriteLine("*Требуемый интерфейс: отчёт оплат*");
			}

			public void PrintPayments()
			{
				Console.WriteLine("*Отчёт оплат*");
			}

			public void RequiredPrintOrders()
			{
				Console.WriteLine("*Требуемый интерфейс: список заказов*");
			}

			public void RequiredPrintAdjustStock()
			{
				Console.WriteLine("*Требуемый интерфейс: склад*");
			}
		}

		//MAIN
		static void Main(string[] args)
		{
			OnlineStore onlineStore = new OnlineStore();
			StoreFront storeFront = new StoreFront();
			Catalogue catalogue = new Catalogue();
			OrderSystem orderSystem = new OrderSystem();

			onlineStore.PrintCustomers();
			onlineStore.PrintSroreAdmins();
			onlineStore.PrintPayments();

			Console.WriteLine();

			storeFront.RequiredPrintCustomers();
			storeFront.RequiredPrintSroreAdmins();
			storeFront.RequiredPrintSQLColumns();
			storeFront.RequiredPrintOrders();

			Console.WriteLine();

			catalogue.RequiredPrintSQLColumns();
			catalogue.RequiredPrintAdjustStock();

			Console.WriteLine();

			orderSystem.PrintPayments();
			orderSystem.RequiredPrintPayments();
			orderSystem.RequiredPrintOrders();
			orderSystem.RequiredPrintAdjustStock();

			Console.ReadKey();
		}
	}
}
