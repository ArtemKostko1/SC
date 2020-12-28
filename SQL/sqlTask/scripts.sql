use sqlTask;
go
/*
--������ ���� ������������������ ������������� � ������������/�� ������������ ��� �����
select firstname, surname, accountName, login, password from _User
join Contact on Contact.contact_id = _User.individual
join Account on Account.account_id = Contact.entity

--������� ���� ������������������ ������������� � �������������� ��� �����
delete from _User where individual is null;
select * from _User;

--������ ������������� ����������� � ����� � ��� �� ������ � �����
select firstname, surname, cityName, streetName 
from _User
join Contact on Contact.contact_id = _User.individual
join Address on Address.individual = Contact.contact_id
join City on City.city_id = Address.city
join Street on Street.street_id = Address.street
group by login, password, cityName, streetName
having COUNT(Address.city) > 1;

-- ������ �������������, ��� ����� ��������� � ����� ���� �� �����
select Contact.firstname, Contact.surname 
from Contact
join Account on Contact.entity = Account.account_id 
join Address on Address.individual = Account.account_id
where Address.address_id IN (select Address.address_id
					from Address 
					JOIN Contact ON Contact.entity = Address.entity 
					group by city 
					having COUNT(city) > 1) AND 

Address.street IN (	select street 
					from Address adr 
					JOIN Contact ON Contact.entity = adr.entity 
					group by street 
					having COUNT(street) > 1)

--������ �������������, � ���� ���� ������������ �����
SELECT Contact.firstname, Contact.surname
FROM Contact 
JOIN Account ON Contact.entity = Account.account_id 
JOIN Bill ON Account.account_id = Bill.bill_id 
JOIN BillType ON Bill.billType = BillType.billType_id
WHERE BillType.BillTypeName = 'Frozen';

--�������, ������������ ���� �� � ������ ������������ �����
go
CREATE FUNCTION dbo.checkBillType(@entity_id int)  
RETURNS varchar(10) 
AS   
BEGIN  
	declare @result as int
	declare @res as varchar(10)
	set @res = 'frozen';

	set @result = (	SELECT Account.account_id
					FROM Contact 
					JOIN Account ON Contact.entity = Account.account_id 
					JOIN Bill ON Account.account_id = Bill.bill_id 
					JOIN BillType ON Bill.billType = BillType.billType_id
					WHERE Account.account_id = @entity_id and BillType.BillTypeName = 'Frozen');
 
    IF (@result IS NULL)   
        SET @res = 'active';  
	RETURN @res;  
END
go
SELECT dbo.checkBillType(1) AS BillType;
drop function checkBillType;

--������ ��������� ���������� ������� � ����� �����, ������ ��������� �����������, ��������� �������� ���������
GO
create trigger Adress_Insert
on Address after insert 
as
	Declare @Result as int
	Declare @NewAdressType as int

	update Address set actual = 'false'
	where addressType = (select addressType from inserted) and individual = (select individual from inserted);

go
INSERT INTO Address(actual, addressType, city, street, individual, entity) VALUES
('true', 3, 1, 1, 1, 1)
SELECT * FROM Address;

--��� �������� ������������ ������������� ��������� ��� ���� � �� ����
create trigger addUser
on _User after insert
as
	insert into Contact(surname, firstname, entity) values(null, null, null);
	insert into Account(accountName) values(null);

go
insert into _User(login, password, individual) values('', '', null);
select * from _User;
select * from Contact;
select * from Account;

--������������� ���� �� ��� � ��� ��� � ���� ����� �������, ��� ������������ = �� ����.������������/(���
create view EntityesIndiviuals
as
	select surname +''+ firstname as surnameFirstname
	from Contact
union all
	select AccountName
	from Account
go
SELECT * FROM EntityesIndiviuals
*/