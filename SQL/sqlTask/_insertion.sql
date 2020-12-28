use sqlTask;

insert into Account values
('Soft Club', null, null),
('Epam', null, null),
('Itransition', null, null);

insert into BillType values
('Active', null, null),
('Active', null, null),
('Frozen', null, null);

insert into Bill values
('00000', 1, 1, null, null),
('11111', 2, 3, null, null),
('22222', 3, 2, null, null);

insert into Contact values
('Kostko', 'Artem', 1, null, null),
('Chernik', 'Vlad', 2, null, null),
('Koslovsky', 'Kostya', 3, null, null);

insert into _User values
('Kostko', '123', 1, null, null),
('Chernik','111', 2, null, null),
('Koslovsky', '222', 3, null, null);

insert into AddressType values
('Registration', null, null),
('Residence', null, null),
('Location', null, null);

insert into City values
('Minsk', null, null),
('Moscow', null, null),
('Vena', null, null);

insert into Street values
('Leshinskogo', 1, null, null),
('Pushkinskay', 2, null, null),
('Judro', 3, null, null);

insert into Address values
('true', 1, 1, 1, 1, 1, null, null),
('true', 3, 3, 3, 2, 2, null, null),
('false', 3, 2, 2, 3, 3,  null, null);