$(function () {
  $('.js-text_field').on('keyup', function () {
    var title = $.trim($(this).val());

    // 追加コード
    $.ajax({
      type: 'GET', // リクエストのタイプ
      url: '/messages/searches', // リクエストを送信するURL
      data: { title: title }, // サーバーに送信するデータ
      dataType: 'json' // サーバーから返却される型
    })
      .done(function (data) {
        console.log(data); // dataを確認する
        $('.js-messages li').remove();

        $(data).each(function (i, message) {
          $('.js-messages').append(
            `<li class="message"><a href="/messages/${message.id}">${message.title}</a></li>`
          );
        });
      })
  });
});
