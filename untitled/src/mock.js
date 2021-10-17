export const qwestions = [
    ['В чем разница между null и undefined?', ' Во-первых, они принадлежат к 7 «примитивам» (примитивным типам) JS. Во-вторых, они являются ложными значениями, т.е. результатом их преобразования в логическое значение с помощью Boolean() или оператора "!!" является false undefined («неопределенный») представляет собой значение по умолчанию:\n' +
    'переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;\n' +
    'функции, которая ничего не возвращает явно, например, console.log(1);\n' +
    'несуществующего свойства объекта. null — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно. В примере ниже мы получаем null, когда метод fs.readFile отрабатывает без ошибок. При сравнении null и undefined мы получаем true, когда используем оператор "==", и false при использовании оператора "===".'],


    ['Для чего используется оператор "&&"', 'Оператор "&&" (логическое и) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные. Он использует короткое замыкание во избежание лишних затрат'],


    ['Что такое DOM?', 'DOM или Document Object Model (объектная модель документа) — это прикладной программный интерфейс (API) для работы с HTML и XML документами. Когда браузер первый раз читает («парсит») HTML документ, он формирует большой объект, действительно большой объект, основанный на документе — DOM. DOM представляет собой древовидную структуру (дерево документа). DOM используется для взаимодействия и изменения самой структуры DOM или его отдельных элементов и узлов.' +
    ' в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '],
    [' Что такое распространение события (Event Propagation)?', 'Когда какое-либо событие происходит в элементе DOM, оно на самом деле происходит не только в нем. Событие «распространяется» от объекта Window до вызвавшего его элемента (event.target). При этом событие последовательно пронизывает (затрагивает) всех предков целевого элемента. Распространение события имеет три стадии или фазы:\n' +
    'Фаза погружения (захвата, перехвата) — событие возникает в объекте Window и опускается до цели события через всех ее предков.\n' +
    'Целевая фаза — это когда событие достигает целевого элемента.\n' +
    'Фаза всплытия — событие поднимается от event.target, последовательно проходит через всех его предков и достигает объекта Window.'],


    ['Что такое всплытие события?', '\n' +
    'Когда событие происходит в элементе DOM, оно затрагивает не только этот элемент. Событие «всплывает» (подобно пузырьку воздуха в воде), переходит от элемента, вызвавшего событие (event.target), к его родителю, затем поднимается еще выше, к родителю родителя элемента, пока не достигает объекта Window. ps: У метода addEventListener есть третий необязательный параметр — useCapture. Когда его значение равняется false (по умолчанию), событие начинается с фазы всплытия. Когда его значение равняется true, событие начинается с фазы погружения (для «прослушивателей» событий, прикрепленных к цели события, событие находится в целевой фазе, а не в фазах погружения или всплытия. События в целевой фазе инициируют все прослушиватели на элементе в том порядке, в котором они были зарегистрированы независимо от параметра useCapture — прим. пер.). Если мы кликнем по элементу child, в консоль будет выведено: child, parent, grandparent, html, document, window. Вот что такое всплытие события.'],


    ['Что такое погружение события?', 'Когда событие происходит в элементе DOM, оно происходит не только в нем. В фазе погружения событие опускается от объекта Window до цели события через всех его предков. ps: У метода addEventListener есть третий необязательный параметр — useCapture. Когда его значение равняется false (по умолчанию), событие начинается с фазы всплытия. Когда его значение равняется true, событие начинается с фазы погружения. Если мы кликнем по элементу child, то увидим в консоли следующее: window, document, html, grandparent, parent, child. Это и есть погружение события.'],


    ['В чем разница между методами event.preventDefault() и event.stopPropagation()?', 'Метод event.preventDefault() отключает поведение элемента по умолчанию. Если использовать этот метод в элементе form, то он предотвратит отправку формы (submit). Если использовать его в contextmenu, то контекстное меню будет отключено (данный метод часто используется в keydown для переопределения клавиатуры, например, при создании музыкального/видео плеера или текстового редактора — прим. пер.). Метод event.stopPropagation() отключает распространение события (его всплытие или погружение).'],


    ['Как узнать об использовании метода event.preventDefault()?', 'Для этого мы можем использовать свойство event.defaulPrevented, возвращающее логическое значение, служащее индикатором применения к элементу метода event.preventDefault.'],


    ['12. Что такое цель события или целевой элемент (event.target)?', 'Простыми словами, event.target — это элемент, в котором происходит событие, или элемент, вызвавший событие.'],

    ['13. Что такое текущая цель события (event.currentTarget)?', 'Event.currentTarget — это элемент, к которому прикреплен прослушиватель событий. ']



        [' Как записать несколько выражений в одну строку?', 'Для этого мы можем использовать оператор "," (запятая). Этот оператор «двигается» слева направо и возвращает значение последнего выражения или операнда. ']




        ['Что такое поднятие (Hoisting)?', 'Поднятие — это термин, описывающий подъем переменной или функции в глобальную или функциональную области видимости.\n' +
    '\n' +
    'Для того, чтобы понять, что такое Hoisting, необходимо разобраться с тем, что представляет собой контекст выполнения.\n' +
    '\n' +
    'Контекст выполнения — это среда, в которой выполняется код. Контекст выполнения имеет две фазы — компиляция и собственно выполнение.\n' +
    '\n' +
    'Компиляция. В этой фазе функциональные выражения и переменные, объявленные с помощью ключевого слова «var», со значением undefined поднимаются в самый верх глобальной (или функциональной) области видимости (как бы перемещаются в начало нашего кода. Это объясняет, почему мы можем вызывать функции до их объявления — прим. пер.).\n' +
    '\n' +
    'Выполнение. В этой фазе переменным присваиваются значения, а функции (или методы объектов) вызываются или выполняются.\n' +
    '\n' +
    'Запомните: поднимаются только функциональные выражения и переменные, объявленные с помощью ключевого слова «var». Обычные функции и стрелочные функции, а также переменные, объявленные с помощью ключевых слов «let» и «const» не поднимаются.']




        [' Что такое область видимости (Scope)?', ' Область видимости — это место, где (или откуда) мы имеем доступ к переменным или функциям. JS имеем три типа областей видимости: глобальная, функциональная и блочная (ES6).\n' +
    '\n' +
    'Глобальная область видимости — переменные и функции, объявленные в глобальном пространстве имен, имеют глобальную область видимости и доступны из любого места в коде. Функциональная область видимости (область видимости функции) — переменные, функции и параметры, объявленные внутри функции, доступны только внутри этой функции. \n' +
    'Блочная область видимости — переменные (объявленные с помощью ключевых слов «let» и «const») внутри блока ({ }), доступны только внутри него. Область видимости — это также набор правил, по которым осуществляется поиск переменной. Если переменной не существует в текущей области видимости, ее поиск производится выше, во внешней по отношению к текущей области видимости. Если и во внешней области видимости переменная отсутствует, ее поиск продолжается вплоть до глобальной области видимости. Если в глобальной области видимости переменная обнаружена, поиск прекращается, если нет — выбрасывается исключение. Поиск осуществляется по ближайшим к текущей областям видимости и останавливается с нахождением переменной. Это называется цепочкой областей видимости (Scope Chain).']




        ['20.Что такое замыкание (Closures)?', ' Наверное, это самый сложный вопрос из списка. Я постараюсь объяснить, как я понимаю замыкание.\n' +
    '\n' +
    'По сути, замыкание — это способность функции во время создания запоминать ссылки на переменные и параметры, находящиеся в текущей области видимости, в области видимости родительской функции, в области видимости родителя родительской функции и так до глобальной области видимости с помощью цепочки областей видимости. Обычно область видимости определяется при создании функции.']




        ['23. Для чего используется директива «use strict»?', '«use strict» — это директива ES5, которая заставляет весь наш код или код отдельной функции выполняться в строгом режиме. Строгий режим вводит некоторые ограничения по написанию кода, тем самым позволяя избегать ошибок на ранних этапах. Нельзя присваивать значения или обращаться к необъявленным переменным, Запрещено присваивать значения глобальный переменным, доступным только для чтения или записи. Нельзя удалить «неудаляемое» свойство объекта. Запрещено дублирование параметров. \n' +
    'Нельзя создавать функции с помощью функции eval. Значением «this» по умолчанию является undefined ']




        ['Какое значение имеет this?', 'Обычно this ссылается на значение объекта, который в данный момент выполняет или вызывает функцию. «В данный момент» означает, что значение this меняется в зависимости от контекста выполнения, от того места, где мы используем this. Стрелочные функции не имеют собственного значения this. Они копируют значение this из внешнего лексического окружения.\n ']




        ['', ' ']




        ['', ' ']




        ['', ' ']




        ['', ' ']




        ['', ' ']




        ['', ' ']


];

