# Различие между блоком, компонентом и страницей

#### Блок
`app/blocks/blockName/`
* Блок самостоятельный элемент разметки
* Блок не может состоять из других блоков

#### Компонент
`app/components/componentName/`
* Компонент не является самостоятельным элементом
* Компонент должен состоять из 2х и более блоков
* В компонент подключаются скрипты, файлы разметки (pug миксины) блоков

#### Страница
`app/pages/pageName/`
* Страница самая большая часть разметки
* Страница должна состоять из компонентов и/или блоков
* На страцицу подключаются скрипты, файлы разметки (pug миксины) компонентов и/или блоков

Эти правила были введены с целью разгрузить кол-во блоков в папке `app/blocks`, а так же - 
для контроля подключения стилей.

В главном файле стилей сначала подключатся блоки, затем компоненты, и последнее - страницы.

Таким образом, можно не плодить обертки над блоками, а применять [миксы](https://ru.bem.info/methodology/key-concepts/#%D0%9C%D0%B8%D0%BA%D1%81)
