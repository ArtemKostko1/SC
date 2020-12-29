using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF
{
	class Program
	{
		static void Main(string[] args)
		{
			using (sqlTaskConnection connection = new sqlTaskConnection())
			{
				var users = connection.C_User;
				var individuals = connection.Contact;

				var resalt = users.Join(individuals,
								u => u.individual,
								i => i.contact_id,
								(u, i) => new { Firstname = i.firstname, Surname = i.surname, Login = u.login, Password = u.password });

				foreach (var user in resalt) {
					Console.WriteLine($"{user.Surname} {user.Firstname} - Login: {user.Login}, Password: {user.Password}");
				}
			}

			Console.ReadKey();
		}
	}
}
