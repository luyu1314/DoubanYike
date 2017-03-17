<?php
	
	// 获取前端传递的日期参数
	$today = $_GET['today'];
	

	 //$url = 'https://moment.douban.com/api/stream/date/2016-08-20?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 豆瓣数据接口
	$url = 'https://moment.douban.com/api/stream/date/'.$today.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 获取豆瓣数据
	$result = file_get_contents($url);
	
	// file_get_contents 可以获取其它服务器数据,但是不能直接获取 https协议，默认不支持https协议
	//修改 php 的配置文件即可
	// 1、找到php的配置文件
	// 2、查找 openssl 关键字
	// 3、;extension=php_openssl.dll 将分号去掉

	
	// 将服务端获取的豆瓣数据返回给浏览器
	echo $result;

?>