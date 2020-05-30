function autohtml() {

    $.fn.link = function () {
        return this.each(function () {
            var text = $(this).html();
            var regex = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;
            var html = text.replace(regex, '<a href="$1" target="_blank">$1</a> ')
            $(this).html(html);
        });
    }

    $.fn.image = function (options) {
        return this.each(function () {
            var text = $(this).html();
            var regex = /https:\/\/.+\.(jpg|jpeg|bmp|gif|png)(\?\S+)?/gi
            var html = text.replace(regex, "<img src='$&' alt='' />");
            $(this).html(html);
        });
    }

    $.fn.youtube = function (options) {
        return this.each(function () {
            var text = $(this).html();
            var regex = /(?:https:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?.*v=)?(\w+)/g
            var html = text.replace(regex, '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            $(this).html(html);
        });
    }

    $.fn.email = function (options) {
        return this.each(function () {
            var text = $(this).html();
            var regex = /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/;
            var html = text.replace(regex, '<a href=\"mailto:$1\">$1</a> ');
            $(this).html(html);
        });
    }

    $.fn.simpleFormat = function () {
        return this.each(function () {
            var text = $(this).html();
            var text = text.replace(/\n{2,}/g, '</p><p>');
            var text = text.replace(/\n/g, '<br/>');
            var text = '<p>' + text + '</p>';
            $(this).html(text);
        });
    }
    $(".cmt .lst .text")
        .email()
        .image()
        .youtube()
        .link();
}
if ($(".cmt .lst .text").length) autohtml();