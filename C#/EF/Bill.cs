//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан по шаблону.
//
//     Изменения, вносимые в этот файл вручную, могут привести к непредвиденной работе приложения.
//     Изменения, вносимые в этот файл вручную, будут перезаписаны при повторном создании кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class Bill
    {
        public int bill_id { get; set; }
        public string number { get; set; }
        public Nullable<int> entity { get; set; }
        public Nullable<int> billType { get; set; }
        public Nullable<System.DateTime> dateCreation { get; set; }
        public Nullable<System.DateTime> dateChange { get; set; }
    
        public virtual Account Account { get; set; }
        public virtual BillType BillType1 { get; set; }
    }
}