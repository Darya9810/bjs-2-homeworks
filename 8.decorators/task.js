"use strict";

function cachingDecoratorNew(func) {
// Кэш в виде массива
    let cache = [];
    const maxCacheValuesCount = 5;

    return (...args) => {
        const hash = args.join (",");
        const objectFromCache = cache.find(Object => Object.hash === hash);
        if (objectFromCache){
            console.log("Из кэша: ", objectFromCache.value);
            return "Из кэша: " + objectFromCache.value;
        }

        const value = func(...args);
        cache.push({hash, value});
        if (cache.length > maxCacheValuesCount){
            cache.shift();
        }

        console.log("Вычисляем: ", value);
        return "Вычисляем: " + value;

    }
}
// Кэш в виде объкта
// const cache = {};

// return function(...args) {
//   const hash = args.join (",");

//   if (hash in cache){
//     return `Из кэша: ${cache[hash]}`;
//   }

//   const result = func(...args);
//   cache[hash] = result;

//   if (Object.keys(cache).length > 5){
//     delete cache[Object.keys(cache)[0]];
//   }

//   return `"Вычисляем: ${result}`;

//   }
// }

function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args){
        wrapper.allCount++;

        if(timeoutId === null){
            func(...args);
            wrapper.count++;
        }

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            wrapper.count++;
            func(...args);
        }, delay)
    }

    return wrapper;

}
