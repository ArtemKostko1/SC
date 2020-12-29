use master;

create database sqlTask;
use sqlTask;

create table Account(
	account_id int identity primary key,
	accountName nvarchar(100),
	dateCreation datetime,
	dateChange datetime
);

create table BillType(
	billType_id int identity primary key,
	BillTypeName nvarchar(20),
	dateCreation datetime,
	dateChange datetime
);

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

create table Contact(
	contact_id int identity primary key,
	surname nvarchar (50),
	firstname nvarchar (50),
	entity int,
	dateCreation datetime,
	dateChange datetime

	foreign key (entity) references Account(account_id)
);

create table _User(
	_user_id int identity primary key,
	login nvarchar(50),
	password nvarchar(50),
	individual int,
	dateCreation datetime,
	dateChange datetime

	foreign key (individual) references Contact(contact_id),
);

create table AddressType(
	addressType_id int identity primary key,
	addressTypeName nvarchar(20),
	dateCreation datetime,
	dateChange datetime
);

create table City(
	city_id int identity primary key,
	cityName nvarchar(50),
	dateCreation datetime,
	dateChange datetime
);

create table Street(
	street_id int identity primary key,
	streetName nvarchar(50),
	city int,
	dateCreation datetime,
	dateChange datetime

	foreign key (city) references City(city_id),
);

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
