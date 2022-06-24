# Resolution events

Простой плагин для создания событий для определенных разрешений.

## Инициализация

```js
const resolution = new owResolutionEvents(params);
resolution.init();
```

### Параметры
Конструктор принимает объект параметров следующего формата:

```js
{
  xxs = 480,
  xs = 576,
  sm = 768,
  md = 992,
  lg = 1200,
  xl = 1600
}
```

Это разрешения по-умолчанию, но мы можем задать свой набор разрешений.

### Название событий, таблица сравнений


| код параметра  | название события           |
|----------------|----------------------------|
| xxs            | doubleextrasmallresolution |
| xs             | extrasmallresolution       |
| sm             | smallresolution            |
| md             | mediumresolution           |
| lg             | largeresolution            |
| xl             | extralargeresolution       |

## Обработка события
Теперь мы можем поймать переход на определенное разрешение.
```js
document.addEventListener('largeresolution', function() {
    console.log('get json or more');
})
```
**ВАЖНО: событие будет срабатывать в промежутке между меньшим разрешением**

**Например: если lg=1200 и md=992, то событие largeresolution будет срабатывать при <=1200 и >= 992**

