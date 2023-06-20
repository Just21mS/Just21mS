<!DOCTYPE html>
<html>
<head>
  <title>صفحة الشات</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div id="bnr"></div>
  
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
  
  <script>
    if (location.protocol !== 'https:') {
      location.protocol = 'https:';
    }

    $(document).ready(function() {
      $("#bnr").append(`<div style="background-image: url('https://r7shq.net/sico/zhgfiQRuQ.gif'); background-size: cover; width: 100%; height: 200px;"></div><center><div id="fex0">
          <a id="fex0" href="https://r7shq.net/" style="width: 90px;padding: 1px;height: 22px;" class="btn minix btn-primary">شات رحيق </a>
          <a id="fex0" href="https://r7shq.net/" style="width: 90px;padding: 1px;height: 22px;" class="btn minix btn-primary">شات رحيق الشوق </a>
          <a id="fex0" href="https://r7shq.net/" style="width: 90px;padding: 1px;height: 22px;" class="btn minix btn-primary">شات رحيق الصوتي</a> 
          <a id="fex0" href="https://r7shq.net/" style="width: 90px;padding: 1px;height: 22px;" class="btn minix btn-primary">شات الشوق رحيق</a>
      </div></center>`);

      var cff = "08";
      var msgt = 80;
      var bct = 100;

      $("<div class='fr borderg' style='padding:2px;background-color:white;margin-right:4px;'><a href='https://www.r7shq.net'>شات جوالي</a></div>").insertAfter($(".loginstat"));
      $('<img style="height:50px;width: 100%;margin-right: 3px;background-color: #595A5C;" src="sico/zhW5Q4VCi.gif" border="0">').insertBefore('div#d2bc');
      var showpics = -1;

      var minL = -8;

      $("#u1, #u3").attr("maxlength", 15);
    });

    $(document).ready(function() {
      $('<ul class="nav nav-tabs fl" style="margin: 0px; background-color: black; height: 44px; width: 100%; text-align: center; position: relative;">')
        .append('<li class="active"><a data-toggle="tab" style="padding: 10px 6px; color: white; background-color: black; position: relative; z-index: 2;" class="fa fa-user" href="#l1">دخول الزوار</a></li>')
        .append('<li><a data-toggle="tab" style="padding: 10px 6px; color: white; background-color: black; position: relative; z-index: 2;" class="fa fa-user" href="#l2">دخول الاعضاء</a></li>')
        .append('<li><a data-toggle="tab" style="padding: 10px 6px; color: gold; background-color: black; position: relative; z-index: 2;" class="fa fa-user-plus" href="#l3"> تسجيل عضوية</a></li>')
        .prepend('<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: black; transform: skewY(-8deg); z-index: 1;"></div>')
        .insertAfter('.settings');
    });

    function setProfileBanner(bannerUrl) {
      $(".profile-banner").css("background-image", "url('" + bannerUrl + "')");
    }

    function setChatBanner(bannerUrl) {
      $(".chat-banner").css("background-image", "url('" + bannerUrl + "')");
    }

    function sendpic() {
      // ...

      var picUrl = prompt("يرجى إدخال رابط الصورة:");
      if (picUrl) {
        $(".spic").attr("src", picUrl);
        setProfileBanner(picUrl);
      }
    }

    function send(action, data) {
      // ...

      $(".spic").attr("src", "");
      setProfileBanner("");
    }

    $(document).ready(function() {
      $('<select name="characters" class="dropdown"></select>')
        .append('<option value="1">Character 1</option>')
        .append('<option value="2">Character 2</option>')
        .append('<option value="3">Character 3</option>')
        .appendTo('.settings');

      $('<label onclick="sendpic();" style="background-color: ghostwhite; color: black; margin:2px 4px; padding:8px; width:98%;" class="label changepic tc border btn label-info fl"><img style="width:32px;height:32px;margin:-8px;" class="fitimg fl borderg spic corner hand">تغير خلفيه الحاله</label>')
        .insertAfter('.settings');

      $('<label onclick="send(\'setpic\', {pic: \'pic.png\gif'});" style="color: black; margin:2px 4px; padding:8px; width:98%;" class="label tc border btn label-danger fl"><span class="fl fa fa-user-times"></span>حذف الخلفية</label>')
        .insertAfter('.settings');

      $(".chat-exit").prepend('<div class="chat-banner"></div>');
    });
  </script>
</body>
</html>
