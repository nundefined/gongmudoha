var queries = {
	rssList: [
		'select c.rss_id as rss_id, c.address as address, c.fetch_dttm fetch_dttm',
		'  from tb_users a, tb_users_rss b, tb_rss_list c',
		' where a.user_id = "1"',
		'   and a.user_id = b.user_id',
		'   and b.rss_id = c.rss_id'
		].join('\n')
};

module.exports = queries;

