use BCJENU_3185413_0406;

--1.3.1
------------------------------------------------------------
select * from Account
join AccountType on AccountType.Id = Account.TypeId
where AccountType.Name = 'Customer'
------------------------------------------------------------
select * from Contract
order by CreatedOn desc
------------------------------------------------------------
select distinct Contact.Name, Account.Name, Contact.JobTitle from Contact
join Account on Account.Id = Contact.AccountId
join Contract on Contract.ContactContractId = Contact.Id
join UsrPaymentDetail on UsrPaymentDetail.UsrDocumentId = Contract.Id
join UsrPaymentStatus on UsrPaymentStatus.Id = UsrPaymentDetail.UsrPaymentStatusId
where UsrPaymentStatus.Name = N'В планах'
------------------------------------------------------------
update Contact set Phone = '+375296487951';
------------------------------------------------------------
delete from SysUserSession
where CreatedOn < (GetDate()-7);
------------------------------------------------------------


--1.3.2
------------------------------------------------------------
drop procedure ChangeCurrencyRate;
go
create procedure ChangeCurrencyRate as

declare @currencyRate FLOAT;
set @currencyRate = (	select CurrencyRate.Rate from CurrencyRate
						join Currency on Currency.Id = CurrencyRate.CurrencyId
						where Currency.ShortName = 'USD');


update SpecificationInContract set FloatValue = FloatValue / @currencyRate, StringValue = FloatValue
where SpecificationId = '157284BF-135F-4D66-B460-3D575C339A5E'
go

exec ChangeCurrencyRate;

------------------------------------------------------------

drop trigger CreateActivity;
go
create trigger CreateActivity on SpecificationInContract
after update as

insert into Activity(Title, AccountId, StartDate, DueDate)
select N'Согласовать стоимость', C.AccountId, '11:00:00', '11:30:00' from inserted
join Contract as C on C.Id = inserted.ContractId;

select Title, Account.Name, StartDate, DueDate from Activity
join Account on Account.Id = Activity.AccountId;
go

select * from Activity
------------------------------------------------------------


select * from Contract
select * from SpecificationInContract


--1.3.3
------------------------------------------------------------
create table Temp (
	CreatedOn date,
	Tax int,
	Status int,
	ReadedOn date
);

ALTER table Temp
	add
	Id int identity primary key,
	Price float,
	Count int,
	Amount float,
	TaxAmount float;

ALTER table Temp
	DROP COLUMN Tax;

select * from Temp;

drop table Temp;
------------------------------------------------------------


--1.3.4
------------------------------------------------------------