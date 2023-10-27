
# Backend CourseBook (Jotter)

Проект на основе Express (TypeScript), вариация популярного приложения для создания заметок и совместной работы Notion. 
Этот API предназначен для аутентификации и авторизации пользователей, предоставляя при этом функциональные возможности, 
аналогичные Notion, пользователи имеют возможность создавать, управлять и совместно работать над различными типами
контента, такими как заметки, базы данных и списки задач. Проект использует лучшие практики разработки программного обеспечения, 
включая чистую архитектуру, проектирование на основе принципов (DDD) и ведение разработки через тестирование (TDD), 
обеспечивая хорошо структурированную, поддерживаемую и расширяемую кодовую базу.

## Осовенности

- Аутентификация пользователей: безопасная регистрация пользователей и процессы входа в систему с помощью хешированных паролей и аутентификации на основе токенов.
- Создание и управление контентом: создание, обновление и удаление различных типов контента, включая заметки, списки, мультимедиа, таблицы с надписями, списки задач и т. д.
- Совместная работа: поддержка возможности совместной работы пользователей над общим контентом, обеспечивая детальный контроль доступа и разрешений.
- Поддержка форматированного текста: возможность создавать и редактировать контент с помощью параметров форматированного текста.
- Безопасность. безопасность и конфиденциальность данных обеспечивается с помощью надежных механизмов аутентификации и авторизации.
- Загрузка изображений для профиля, обложки и в текстовом редакторе.
- Надежная проверка схемы для проверки входных данных.
- 99% покрытие тестами.
- аутентификация с использованием файлов cookie (пока только HTTP).
- API документация.
And for testing the MongoDB, an in-memory implementation was used as a Jest preset.


**API Документация:** [API Documentation](https://documenter.getpostman.com/view/20114396/2s946chEcc#0324f17a-7d4a-4dcc-943a-6082f10aae96)

Документация API содержит:

- Подробное описания каждой конечной точки API, включая ее назначение и функциональность.
- Примеры запросов и ответов для лучшего понимания использования API.
- Инструкция по аутентификации и получению API-ключей для безопасного доступа.
- Обзор моделей данных, используемых в API.

![Описание бизнес логики](https://github.com/shreyasmanolkar/notion-api/assets/80336980/c9d64aad-1156-4be5-915a-b4b6ab7fea0a)


## Как запустить локально

Клонируйте проект

```bash
  git clone git@gitlab.id-mt.ru:sedo/frontend/course_book_api.git
```

Перейдите в каталог проекта

```bash
  cd course_book_api
```

Установите зависимости

```bash
  npm install
```

Запустите проект

```bash
  npm run dev
```

## Как запустить с базой mongoDB в докер контейнере

Выполните команду 

```bash
  docker-compose up
```


## Запуск тестов

Для запуска тестов выполните команду

```bash
  npm run test
```x

Для запуска тестов с отчетом о покрытии выполните команду

```bash
  npm run test:ci
```

Для запуска конкретного теста выполните команду или пропишите в package.json: 

```bash
    "test:only": "jest -- -t <test file name>",
```


"test:only": "jest -- -t SignUpController.spec.ts",

```bash
  npm run test:only
```---
