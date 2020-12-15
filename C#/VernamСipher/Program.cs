using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VernamСipher
{
	class Program
	{
        //class Key
        //{
        //    int index = 0;
        //    byte[] key;
        //    public int getkey()
        //    {
        //        if (index > key.Length) index = 0;
        //        return key[index];
        //        index++;
        //    }
        //}
        public static byte[] Xor(byte[] byteStr, byte[] key)
        {
            byte[] cryptText = new byte[byteStr.Length];

            for (int i = 0; i < byteStr.Length; i++)
            {
                cryptText[i] ^= key[i];
            }

            return cryptText;
        }

        public static string encrypt(string Str, byte[] key)
        {
            char[] charStr = Str.ToCharArray();
            byte[] byteStr = new byte[charStr.Length];

            for (int i = 0; i < charStr.Length; i++)
            {
                byteStr[i] = (byte)charStr[i];
            }

            byte[] xorRes = Xor(byteStr, key);

            char[] cryptStr = new char[xorRes.Length];

            for (int i = 0; i < xorRes.Length; i++)
            {
                cryptStr[i] = (char)xorRes[i];
            }

            return cryptStr.ToString();
        }

        static void Main(string[] args)
		{
            string defoultStr = "Sqript-test";
            byte[] key = new byte[] { 1, 0, 0, 1, 1, 0, 1 };

            Console.WriteLine($"Исходный текст: {defoultStr}");

            string encryptText = encrypt(defoultStr, key);
            Console.WriteLine($"Зашифрованный текст:  {encryptText}");

            string dencryptText = encrypt(encryptText, key);
            Console.WriteLine($"Расшифрованный текст:  {dencryptText}");

            Console.ReadKey();
        }
	}
}
