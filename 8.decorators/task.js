// //Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
debugger;
    function wrapper(...args) {
        //в hash добавляем аргументы:
        const hash = md5(args); // получаем правильный хеш c помощью функции md5 
        // В кеше ищем хэш, который нам нужно:
        let objectInCache = cache.find((item) => hash === item.hash); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
            //Выводим хэш
            console.log("Из кэша: " + cache[hash]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + cache[hash];
        }
        
    
        let result = func(...args); // в кеше результата нет — придётся считать
        //пушим хэш в кэш
        cache.push(cache[hash] = result); // добавляем элемент с правильной структурой

        if (cache.length > 5) { 
            // удаляем 1 позицию в кэше
            cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
}
    const addAndMultiply = (a, b, c) => (a + b) * c;
    const upgraded = cachingDecoratorNew(addAndMultiply);
    upgraded(2, 2, 4); // вычисляем: 16
    upgraded(2, 2, 5); // Вычисляем: 20
    upgraded(2, 2, 6); // вычисляем: 24
    upgraded(2, 2, 7); // "Вычисляем: 28"
    upgraded(2, 2, 8); // "Вычисляем: 32"
    upgraded(2, 2, 8); // "Из кэша: 32"
    upgraded(2, 2, 3); // "Вычисляем: 12"
    upgraded(1, 2, 4); // "Вычисляем: 16"

// Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  count = 0;
  allCount = 0;
  let isTrottled = false;
  function isTrottledDecorator(args) { 
    func.apply(this, args);
    isTrottled = true;
    wrapper.count++; // Увеличиваем кол-во вызовов функции
  }

  function wrapper(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    if (!wrapper.count) wrapper.count = 0;
    if (!wrapper.allCount) wrapper.allCount = 0;

    if (!isTrottled) {
      isTrottledDecorator(args);
    } else {
      wrapper.allCount++; // Увеличиваем кол-во вызовов декоратора
      timeoutId = setTimeout(() => isTrottledDecorator(args), delay);
    }
  }
  return wrapper;
}