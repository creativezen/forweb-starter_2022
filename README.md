# Gulp - Forweb.Agency

> Используется Gulp 4

## Начало работы

`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`gulp build` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

`gulp cache` - команда, которую стоит запускать после `gulp build`, если вам нужно загрузить новые файлы на хостинг без кэширования.

`gulp backend` - команда для бэкенд-сборки проекта. Она лишена ненужных вещей из dev-сборки, но не сжата, для удобства бэкендера.

`gulp zip` - команда собирает ваш готовый код в zip-архив.

## Структура папок и файлов

```
├── src/                          # Исходники
│   ├── js                        # Скрипты
│   │   └── main.js               # Главный скрипт
│   │   ├── _vendor.js            # файл с подключениями библиотек
│   │   ├── _functions.js         # файл с готовыми функциями на js
│   │   ├── _components.js        # файл с подключениями компонентов
│   │   ├── components            # js-компоненты
│   │   ├── vendor                # папка для загрузки локальных версий библиотек
│   ├── scss                      # Стили сайта (препроцессор sass в scss-синтаксисе)
│   │   ├── components            # scss-компоненты
│   │   ├── layout                # папка для хранения стилей для базовых частей html (header, footer и т.д..)
│   │   ├── mixins                # папка для сохранения готовых scss-компонентов
│   │   ├── pages                 # папка для хранения стилей отдельных страниц
│   │   └── main.scss             # Главный файл стилей
│   │   └── _vendor.scss           # Файл для подключения стилей библиотек из папки vendor
│   │   └── _fonts.scss           # Файл для подключения шрифтов (можно использовать миксин)
│   │   └── _mixins.scss          # Файл для подключения миксинов из папки mixins
│   │   └── _vars.scss            # Файл для написания css- или scss-переменных
│   │   └── _settings.scss        # Файл для написания глобальных стилей
│   │   ├── vendor                # папка для хранения локальных css-стилей библиотек
│   ├── partials                  # папка для хранения базовы html-частей (header, footer и т.д..)
│   ├── img                       # папка для хранения картинок
│   │   ├── svg                   # специальная папка для преобразования svg в спрайт
│   ├── resources                 # папка для хранения иных ассетов - php, видео-файлы, favicon и т.д.
│   │   ├── fonts                 # папка для хранения шрифтов в формате woff2
│   └── index.html                # Главный html-файл
└── gulpfile.js                   # файл с настройками Gulp
└── package.json                  # файл с настройками сборки и установленными пакетами
└── .editorconfig                 # файл с настройками форматирования кода
└── .ecrc                         # файл с настройками пакета editorconfig-checker (исключает ненужные папки)
└── .stylelintrc                  # файл с настройками stylelint
└── README.md                     # документация сборки
```
