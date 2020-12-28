if db_id('sqlTask') is not null
	drop database sqlTask;
create database sqlTask;	

if object_id('Account') is not null
	drop table Account;
create table Account(
	account_id int identity primary key,
	accountName nvarchar(100),
	dateCreation datetime,
	dateChange datetime
);

if object_id('BillType') is not null
	drop table BillType;
create table BillType(
	billType_id int identity primary key,
	BillTypeName nvarchar(20),
	dateCreation datetime,
	dateChange datetime
);

if object_id('Bill') is not null
	drop table Bill;
create table Bill(
	bill_id int identity primary key,
	number nvarchar(30),
	entity int,
	billType int,
	dateCreation datetime,
	dateChange datetime

	foreign key (billType) references BillType(billType_id),
	foreign key (entity) references Account(account_id)
);

if object_id('Contact') is not null
	drop table Contact;
create table Contact(
	contact_id int identity primary key,
	surname nvarchar (50),
	firstname nvarchar (50),
	entity int,
	dateCreation datetime,
	dateChange datetime

	foreign key (entity) references Account(account_id)
);

if object_id('_User') is not null
	drop table _User;
create table _User(
	_user_id int identity primary key,
	login nvarchar(50),
	password nvarchar(50),
	individual int,
	dateCreation datetime,
	dateChange datetime

	foreign key (individual) references Contact(contact_id),
);

if object_id('AddressType') is not null
	drop table AddressType;
create table AddressType(
	addressType_id int identity primary key,
	addressTypeName nvarchar(20),
	dateCreation datetime,
	dateChange datetime
);

if object_id('City') is not null
	drop table City;
create table City(
	city_id int identity primary key,
	cityName nvarchar(50),
	dateCreation datetime,
	dateChange datetime
);

if object_id('Street') is not null
	drop table Street;
create table Street(
	street_id int identity primary key,
	streetName nvarchar(50),
	city int,
	dateCreation datetime,
	dateChange datetime

	foreign key (city) references City(city_id),
);

if object_id('Address') is not null
	drop table Address;
create table Address(
	address_id int identity primary key,
	actual bit,
	addressType int,
	city int,
	street int,
	individual int,
	entity int,
	dateCreation datetime,
	dateChange datetime

	foreign key (addressType) references AddressType(addressType_id),
	foreign key (city) references City(city_id),
	foreign key (street) references Street(street_id),
	foreign key (individual) references Contact(contact_id),
	foreign key (entity) references Account(account_id)
);
