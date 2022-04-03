create database fut22;

use fut22;

create table player(
id_player int unsigned not null auto_increment,
DNI varchar(120) not null,
Nombre varchar(120),
Apellido varchar(120),
Teléfono varchar(120),
Mail varchar(120),
primary key(id_player)
);

create table equipo(
id_equipo int unsigned not null auto_increment,
Nombre varchar(120) not null,
CantidadJugadores varchar(120) not null,
ValoraciónGlobal varchar(120) not null,
Formación varchar(120) not null,
primary key(id_equipo)
);

create table jugadores(
id_jugadores int unsigned not null auto_increment,
NumeroUniforme varchar(120) not null,
Nombre varchar(120) not null,
Nacionalidad varchar(120) not null,
Edad varchar(120) not null,
primary key(id_jugadores)
);

create table representantes(
id_representantes int unsigned not null auto_increment,
Nombre varchar(120) not null,
Apellido varchar(120) not null,
DNI varchar(120) not null,
primary key(id_representantes)
);

create table representantes_jugadores(
id int unsigned not null auto_increment,
representantesid int unsigned not null,
jugadoresid int unsigned not null,
primary key(id),
foreign key(representantesid) references representantes(id_representantes),
foreign key(jugadoresid) references jugadores(id_jugadores)
);


insert into player values (null, 42673129, "Leandro", "Aimone", 1133047626, "aimoneleandro@gmail.com");


insert into equipo values (null, "Tenure", 20, 87, 4231);

insert into representantes values (null, "Francisco", "Ramos", 28456185);
insert into representantes values (null, "Julian", "Quinteros", 32564871);
insert into representantes values (null, "Lautaro", "Vallejos", 26352436);
insert into representantes values (null, "Norberto", "Prieto", 23761548);
insert into representantes values (null, "Francisco", "Ramos", 28456185);
insert into representantes values (null, "Julian", "Quinteros", 32564871);
insert into representantes values (null, "Lautaro", "Vallejos", 26352436);
insert into representantes values (null, "Norberto", "Prieto", 23761548);