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
    
    public partial class Address
    {
        public int address_id { get; set; }
        public Nullable<bool> actual { get; set; }
        public Nullable<int> addressType { get; set; }
        public Nullable<int> city { get; set; }
        public Nullable<int> street { get; set; }
        public Nullable<int> individual { get; set; }
        public Nullable<int> entity { get; set; }
        public Nullable<System.DateTime> dateCreation { get; set; }
        public Nullable<System.DateTime> dateChange { get; set; }
    
        public virtual Account Account { get; set; }
        public virtual City City1 { get; set; }
        public virtual AddressType AddressType1 { get; set; }
        public virtual Contact Contact { get; set; }
        public virtual Street Street1 { get; set; }
    }
}
