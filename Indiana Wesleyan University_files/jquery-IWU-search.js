$(document).ready(function() {
    if ($('.search-content').length > 0) {
        $('.header-search').remove();
        $('.search-content input[type=text]')
            .val(decodeURIComponent(window.location.href.match(/[\?&]searchtext=([^&#]*)/)[1]))
            .focus();
    }

    var url = "/search/?searchtext=";
    if (/^\/seminary\//i.test(window.location.pathname)) {
        url = "/seminary" + url;
    }
    var div = $('.header-search, .search-content');
    var textbox = $('input[type=text]', div);
    var doSearch = function() {
        var val = textbox.last().val();
        var gcsr;
        try {
            gcsr = google.search.cse.element.getElement('searchresults-only0');
        } catch (ex) {}
        if (gcsr !== undefined) {
            gcsr.execute(val);
            textbox.blur();
        } else {
            window.location.href = url + encodeURIComponent(val);
            if ($.modal === undefined) {
                $.ajax({
                    url: '/core/js/libs/NonRes/jquery.simplemodal.js',
                    dataType: 'script',
                    cache: true,
                })
                    .done(searching);
            } else {
                searching();
            }
        }
        return false;
    };
    $('input[type=submit],div.icon-search', div).click(doSearch).each(function(i,o){console.log(o);});
    textbox.keydown(function(event) {
        if ((event.keyCode || event.which) == '13') {
            return doSearch();
        }
    });

    function searching() {
        $.modal('<div><h1 style="color:#fff">Searching...</h1></div>', {
            opacity: 80,
            overlayCss: {
                backgroundColor: '#000',
            }
        });
    }
});
