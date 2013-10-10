<?php
  function basic_auth($auth_list,$realm="Restricted Area",$failed_text="認証に失敗しました"){
    if (isset($_SERVER['PHP_AUTH_USER']) and isset($auth_list[$_SERVER['PHP_AUTH_USER']])){
        if ($auth_list[$_SERVER['PHP_AUTH_USER']] == $_SERVER['PHP_AUTH_PW']){
            return $_SERVER['PHP_AUTH_USER'];
        }
    }
 
    header('WWW-Authenticate: Basic realm="'.$realm.'"');
    header('HTTP/1.0 401 Unauthorized');
    header('Content-type: text/html; charset='.mb_internal_encoding());
 
    die($failed_text);
  }

    //認証をかける
    basic_auth(array("shubi" => "mieel"));
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=640">
    <title>守備みえ〜る</title>
    <link rel="stylesheet" href="./resource/style.css">
</head>
<body>
    <div id="nav" >
        <img src="resource/img/head/2.png" id="head" />
        <img src="resource/img/menuBtn.png" id="menuBtn" onclick="controller.showMenu()" />
    </div>
<div id="content">
    <canvas id="mainCanvas" width="640" height="640"></canvas>
</div>
<div id="floatingMenu" style="display: block; ">
    <!--
巨人:0
阪神:1
広島:2
中日:3
DeNA:4
ヤクルト:5
楽天:6
ロッテ:7
西武:8
ソフトバンク:9
オリックス:10
日本ハム:11
-->
    <img src="resource/img/logo/0.png" id="logo0" style=" position: absolute; left: 47px; top: 140px; " onclick="controller.changeTeam(0)">
    <img src="resource/img/logo/1.png" id="logo1" style=" position: absolute; left: 167px; top: 140px; " onclick="controller.changeTeam(1)">
    <img src="resource/img/logo/2.png" id="logo2" style=" position: absolute; left: 280px; top: 140px; " onclick="controller.changeTeam(2)">
    <img src="resource/img/logo/3.png" id="logo3" style=" position: absolute; left: 401px; top: 140px; " onclick="controller.changeTeam(3)">
    <img src="resource/img/logo/4.png" id="logo4" style=" position: absolute; left: 515px; top: 140px; " onclick="controller.changeTeam(4)">
    <img src="resource/img/logo/5.png" id="logo5" style=" position: absolute; left: 47px; top: 250px; " onclick="controller.changeTeam(5)">
    <img src="resource/img/logo/6.png" id="logo6" style=" position: absolute; left: 167px; top: 250px; " onclick="controller.changeTeam(6)">
    <img src="resource/img/logo/7.png" id="logo7" style=" position: absolute; left: 280px; top: 250px; " onclick="controller.changeTeam(7)">
    <img src="resource/img/logo/8.png" id="logo8" style=" position: absolute; left: 401px; top: 250px; " onclick="controller.changeTeam(8)">
    <img src="resource/img/logo/9.png" id="logo9" style=" position: absolute; left: 515px; top: 250px; " onclick="controller.changeTeam(9)">
 </div>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script type="text/javascript" src="./resource/events/EventDispatcher.js"></script>
    <script type="text/javascript" src="./resource/conf.js"></script>
    <script type="text/javascript" src="./resource/model.js"></script>
    <script type="text/javascript" src="./resource/view.js"></script>
    <script type="text/javascript" src="./resource/controller.js"></script>
</body>
</html>
