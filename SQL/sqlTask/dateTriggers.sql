use sqlTask;
go
create trigger dateInsertAccount on Account
after insert
as
update Account set dateCreation = getdate()
where account_id = (select account_id from inserted);
go
create trigger dateChangeAccount on Account
after update
as
update Account set dateChange = getdate()
where account_id = (select account_id from inserted);
go
create trigger dateInsertAddress on Address
after insert
as
update Address set dateCreation = getdate()
where address_id = (select address_id from inserted);
go
create trigger dateChangeAddress on Address
after update
as
update Address set dateChange = getdate()
where address_id = (select address_id from inserted);
go
create trigger dateInsertAddressType on AddressType
after insert
as
update AddressType set dateCreation = getdate()
where addressType_id = (select addressType_id from inserted);
go
create trigger dateChangeAddressType on AddressType
after update
as
update AddressType set dateChange = getdate()
where addressType_id = (select addressType_id from inserted);
go
create trigger dateInsertBill on Bill
after insert
as
update Bill set dateCreation = getdate()
where bill_id = (select bill_id from inserted);
go
create trigger dateChangeBill on Bill
after update
as
update Bill set dateChange = getdate()
where bill_id = (select bill_id from inserted);
go
create trigger dateInsertBillType on BillType
after insert
as
update BillType set dateCreation = getdate()
where billType_id = (select billType_id from inserted);
go
create trigger dateChangeBillType on BillType
after update
as
update BillType set dateChange = getdate()
where billType_id = (select billType_id from inserted);
go
create trigger dateInsertCity on City
after insert
as
update City set dateCreation = getdate()
where city_id = (select city_id from inserted);
go
create trigger dateChangeCity on City
after update
as
update City set dateChange = getdate()
where city_id = (select city_id from inserted);
go
create trigger dateInsertContact on Contact
after insert
as
update Contact set dateCreation = getdate()
where contact_id = (select contact_id from inserted);
go
create trigger dateChangeContact on Contact
after update
as
update Contact set dateChange = getdate()
where contact_id = (select contact_id from inserted);
go
create trigger dateInsertStreet on Street
after insert
as
update Street set dateCreation = getdate()
where street_id = (select street_id from inserted);
go
create trigger dateChangeStreet on Street
after update
as
update Street set dateChange = getdate()
where street_id = (select street_id from inserted);
go
create trigger dateInsert_User on _User
after insert
as
update _User set dateCreation = getdate()
where _user_id = (select _user_id from inserted);
go
create trigger dateChange_User on _User
after update
as
update _User set dateChange = getdate()
where _user_id = (select _user_id from inserted);