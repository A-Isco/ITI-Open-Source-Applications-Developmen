<?php

session_start();

require_once("vendor/autoload.php");

$db = new DBHandler();
$db->connect();

$api = new API($db);

