create table tb_users_rss(
user_id int not null,
rss_id int not null,
index user_rss (user_id, rss_id)
);
