using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VernamСipher
{
	class Program
	{
        //public static string encrypt(string Str, string key)
        //{
        //    while (Str.Length > key.Length)
        //    {
        //        key += key;
        //    }

        //    string cryptText = "";

        //    for (int i = 0; i < Str.Length; i++)
        //    {
        //        cryptText += ((Str[i] - '0') ^ (key[i] - '0') + '0');
        //    }

        //    return cryptText;
        //}

        public static string encrypt(string str, string key)
        {
            int i = 0;
            int j = 0;
            for (i = key.Length; i < str.Length; i++)
            {
                key += key[j % key.Length];
                j++;
            }

            string cryptText = "";

            for (i = 0; i < str.Length; i++)
            {
                cryptText += (key[i] - 'A' + str[i] - 'A') % 26 + 'A';
            }

            return cryptText;
        }

        static void Main(string[] args)
		{
            string defoultStr = "Sqript-test";
            string key = "1001101";

            Console.WriteLine($"Исходный текст: {defoultStr}");

            string encryptText = encrypt(defoultStr, key);
            Console.WriteLine($"Зашифрованный текст:  {encryptText}");

            string dencryptText = encrypt(encryptText, key);
            Console.WriteLine($"Расшифрованный текст:  {dencryptText}");

            Console.ReadKey();
        }
	}
}
