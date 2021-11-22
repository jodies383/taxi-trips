insert into region(id, name, code) values (1, 'Durban', 'ND');
insert into region(id, name, code) values (2, 'Cape Town', 'CA');
insert into region(id, name, code) values (3, 'Gauteng', 'GP');

insert into routes(id, name, fare) values (1, 'Cape Town - Bellville', 14.50);
insert into routes(id, name, fare) values (2, 'Cape Town - Gugulethu', 12);
insert into routes(id, name, fare) values (3, 'Cape Town - Langa', 8);
insert into routes(id, name, fare) values (4, 'Sandton - Randburg', 8.50);
insert into routes(id, name, fare) values (5, 'Alexandra - Sandton', 8.50);
insert into routes(id, name, fare) values (6, 'Sandton - Midrand', 20);
insert into routes(id, name, fare) values (7, 'Umlazi - Durban Central', 14);
insert into routes(id, name, fare) values (8, 'Durban Central - Umhlanga Rocks', 17);
insert into routes(id, name, fare) values (9, 'Durban Central - Umbilo', 7);

insert into taxi(id, reg_no, region_id) values (1, 'CA 213-789', 2);
insert into taxi(id, reg_no, region_id) values (2, 'CA 369-889', 2);
insert into taxi(id, reg_no, region_id) values (3, 'CA 387-021', 2);
insert into taxi(id, reg_no, region_id) values (4, 'DP 447 GP', 3);
insert into taxi(id, reg_no, region_id) values (5, 'AB 631 GP', 3);
insert into taxi(id, reg_no, region_id) values (6, 'LP 321 GP', 3);
insert into taxi(id, reg_no, region_id) values (7, 'ND 7895', 1);
insert into taxi(id, reg_no, region_id) values (8, 'ND 6548', 1);
insert into taxi(id, reg_no, region_id) values (9, 'ND 4254', 1);

insert into trips(id, taxi_id, route_id) values (1, 1, 1);
insert into trips(id, taxi_id, route_id) values (2, 1, 2);
insert into trips(id, taxi_id, route_id) values (3, 1, 2);
insert into trips(id, taxi_id, route_id) values (4, 2, 3);
insert into trips(id, taxi_id, route_id) values (5, 2, 3);
insert into trips(id, taxi_id, route_id) values (6, 2, 1);
insert into trips(id, taxi_id, route_id) values (7, 3, 1);
insert into trips(id, taxi_id, route_id) values (8, 3, 2);
insert into trips(id, taxi_id, route_id) values (9, 3, 3);
insert into trips(id, taxi_id, route_id) values (10, 4, 5);
insert into trips(id, taxi_id, route_id) values (11, 4, 5);
insert into trips(id, taxi_id, route_id) values (12, 4, 5);
insert into trips(id, taxi_id, route_id) values (13, 5, 4);
insert into trips(id, taxi_id, route_id) values (14, 5, 6);
insert into trips(id, taxi_id, route_id) values (15, 5, 6);
insert into trips(id, taxi_id, route_id) values (16, 6, 4);
insert into trips(id, taxi_id, route_id) values (17, 6, 4);
insert into trips(id, taxi_id, route_id) values (18, 6, 5);
insert into trips(id, taxi_id, route_id) values (19, 7, 9);
insert into trips(id, taxi_id, route_id) values (20, 7, 9);
insert into trips(id, taxi_id, route_id) values (21, 7, 8);
insert into trips(id, taxi_id, route_id) values (22, 8, 7);
insert into trips(id, taxi_id, route_id) values (23, 8, 8);
insert into trips(id, taxi_id, route_id) values (24, 8, 7);
insert into trips(id, taxi_id, route_id) values (25, 9, 8);
insert into trips(id, taxi_id, route_id) values (26, 9, 9);
insert into trips(id, taxi_id, route_id) values (27, 9, 7);


