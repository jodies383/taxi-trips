create table region(
	id serial not null primary key,
	name text not null,
    code text not null
);
create table routes(
	id serial not null primary key,
	name text not null,
	fare decimal(10,2)
);
create table taxi(
	id serial not null primary key,
	reg_no text not null,
	region_id int,
    foreign key (region_id) references region(id)
);
create table trips (
	id serial not null primary key,
	taxi_id int,
	route_id int,
	foreign key (taxi_id) references taxi(id),
	foreign key (route_id) references routes(id)
); 