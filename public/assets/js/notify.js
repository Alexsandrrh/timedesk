$(document).ready(function () {
    let bodyAction = $('.action-body');
    let notifyParent = $('.other-blocks');

    let blockContentNotify = $('.js-blockContentNotify');

    let btnNotifyNew = $('.js-btnNotifyNew');
    let btnNotifyLooked = $('.js-btnNotifyLooked');


    // showNotify
    $('.js-btnNotifyOpen').on('click', function () {
        notifyParent.toggleClass('-notify');
        bodyAction.toggleClass('-active');
    });

    $('.js-btnNotifyClose').on('click', function () {
        notifyParent.removeClass('-notify');
        bodyAction.removeClass('-active');
    });

    // Api Started Notify
    function getCardNotify (a, message) {
        return '<div class="card-notify" data-user_id="' + message[a].author_id + '">\n' +
            '                        <div class="card-notify__header">\n' +
            '                            <div class="notify-header__info">\n' +
            '                                <img class="user-photo" src="' + message[a].author_photo + '" alt="">\n' +
            '                                <p class="user-nickname">' + message[a].author + '</p>\n' +
            '                                <p class="user-summary__nickname">@' + message[a].author+ '</p>\n' +
            '                            </div>\n' +
            '                            <div class="card-notify__type"></div>\n' +
            '                        </div>\n' +
            '                        <div class="card-notify__content">\n' + message[a].content_code + '</div>\n' +
            '                    </div>';
    }

    function showNoneNotify () {
        return '<div class="notify-none">\n' +
            '                        <img src="https://cfl.dropboxstatic.com/static/images/empty_states/sign-in-boulder-vfl2oGV4v.png">\n' +
            '                        <div class="notify-none__content">\n' +
            '                            <h2>Ой! Вам ещё не приходили уведомления</h2>\n' +
            '                            <p>При появлении какой-то необходимой для вас информации, мы вас оповестим.</p>\n' +
            '                        </div>\n' +
            '                    </div>';
    }

    $.getJSON('http://localhost:3000/api/notify/new', function (dataNotify) {
        let messageNew = dataNotify;
        if (messageNew.length === 0) {
            blockContentNotify.append(showNoneNotify());
        } else {
            for (let i = 0; i < messageNew.length; i++) {
                blockContentNotify.append(getCardNotify(i, messageNew));
            }
        }
    });


    // changeMenu
    // Looked
    btnNotifyLooked.on('click', function () {
        $(this).addClass('-this');
        btnNotifyNew.removeClass('-this');
        blockContentNotify.html('');
        $.getJSON('http://localhost:3000/api/notify/looked', function (dataNotify) {
            let messageNew = dataNotify;
            if (messageNew.length === 0) {
                blockContentNotify.append(showNoneNotify());
            } else {
                for (let i = 0; i < messageNew.length; i++) {
                    blockContentNotify.append(getCardNotify(i, messageNew));
                }
            }
        });
    });

    // New
    btnNotifyNew.on('click', function () {
        $(this).addClass('-this');
        btnNotifyLooked.removeClass('-this');
        blockContentNotify.html('');
        $.getJSON('http://localhost:3000/api/notify/new', function (dataNotify) {
            let messageNew = dataNotify;
            if (messageNew.length === 0) {
                blockContentNotify.append(showNoneNotify());
            } else {
                for (let i = 0; i < messageNew.length; i++) {
                    blockContentNotify.append(getCardNotify(i, messageNew));
                }
            }
        });
    });
});