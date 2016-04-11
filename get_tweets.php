<?php
require_once('twitter_proxy.php');


$oauth_access_token = "707759691963564032-iHE4VD7XSING2mggRcfiJ8aRpKhfBaa";
$oauth_access_token_secret = "XI6qykHaliyZCGI4kk1I23FuU5ILqKhljKHuEonblPNu6";
$consumer_key = "1rwxopHjn7gi7MP72xoAXtiIl";
$consumer_secret = "GKplXtuyYXl1jl6sYwxOD8SeXz2n5mW2nRnovVwqae4DlXV2mW";

$count = 10;

$twitter_url = "https://api.twitter.com/1.1/search/tweets.json?q=portland%20happy%20hour&src=typd";

$twitter_url .='&count=' . $count;

$twitter_proxy = new TwitterProxy(
	$oauth_access_token,
	$oauth_access_token_secret,
	$consumer_key,
	$consumer_secret
);

$tweets = $twitter_proxy->get($twitter_url);

echo $tweets;

?>
