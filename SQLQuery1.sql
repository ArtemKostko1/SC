select * from BankCard;

select * from BankCardStatus;

select BankCard.Number, BankCardStatus.Name from BankCard
join BankCardStatus on BankCardStatus.Id = BankCard.BankCardStatusId

--Card locking
go
create procedure cardBlocking
	@cardId nvarchar(max)
as
update BankCard set BankCardStatusId = '1634C49A-39DF-47A5-B4C7-9F985D7B3FDA'
where Id = @cardId;
go

--Card activation
go
create procedure cardActivation
	@cardId nvarchar(max)
as
update BankCard set BankCardStatusId = '6BA6EB66-DAD9-40B1-ACA4-0576454BA179'
where Id = @cardId;
go

--Execute procedure
exec cardBlocking 'E4EE6593-4AB5-42FA-9AC0-67AB4A8D35C6';

exec cardActivation 'E4EE6593-4AB5-42FA-9AC0-67AB4A8D35C6';