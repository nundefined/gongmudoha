create table tb_rss_list(
rss_id int not null primary key auto_increment,
name varchar(255),
address tinytext,
description text,
reg_dttm datetime,
mod_dttm datetime
);
