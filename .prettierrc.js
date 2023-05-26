// .prettierrc.js

module.exports = {
    extends: ["airbnb", "prettier"],
    // 一行最多 80 字符
    printWidth: 80,
    // 使用 2 个空格缩进
    tabWidth: 2,
    // 是否使用tab进行缩进
    useTabs: true,
    // 行尾不需要有分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: true,
    // 是否使用尾逗号，有三个可选值"<none|es5|all>"
    trailingComma: 'es5',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，如果只有一个参数则省略括号
    arrowParens: 'avoid',
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 标签折行
    htmlWhitespaceSensitivity: 'ignore',
    // 换行符使用 lf
    endOfLine: 'lf',
}

