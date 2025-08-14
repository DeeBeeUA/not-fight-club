module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16, // 1rem = 16px
            unitPrecision: 5, // до 5 знаков после запятой
            propList: ['*'], // конвертировать все свойства
            selectorBlackList: ['.no-rem'], // игнорировать селекторы
            replace: true, // заменить px на rem
            mediaQuery: false, // не конвертировать внутри media queries
            minPixelValue: 1, // минимальное значение px для конвертации
            exclude: /node_modules/i // исключить node_modules
        }
    }
};
