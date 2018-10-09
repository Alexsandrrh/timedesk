let blockNamePage = $('.js-showNamePage');
let locThis = location.pathname;

let objNamePage = [
    {
        "pathname" : "/",
        "page_name" : "Доска",
        "menu_class" : "desk"
    },
    {
        "pathname" : "/desk",
        "page_name" : "Доска",
        "menu_class" : "desk"
    },
    {
        "pathname" : "/profile",
        "page_name" : "Профиль",
        "menu_class" : ""
    },
    {
        "pathname" : "/library",
        "page_name" : "Библиотека",
        "menu_class" : "library"
    },
    {
        "pathname" : "/settings",
        "page_name" : "Настройки",
        "menu_class" : "settings"
    }
];


checkLocation(objNamePage);

function checkLocation(data) {
    for (let i = 0; i < data.length; i++) {
        if (locThis === data[i].pathname) {
            blockNamePage.text(data[i].page_name);
            if (data[i].menu_class !== '') {
                $('.' + data[i].menu_class + '').addClass('-this');
            }
        }
    }
}

