module.exports = {
    parserOptions: {
        parser: "@babel/eslint-parser",
        ecmaVersion: 2020,
        sourceType: "module"
    },
    extends: [
        "plugin:vue/vue3-essential", // hoặc "plugin:vue/vue3-recommended"
        "eslint:recommended"
    ],
    plugins: [
        "vue"
    ],
    rules: {
        "vue/multi-word-component-names": "off", // Tắt quy tắc nhiều từ cho tên component
        "no-unused-vars": "off", // Tắt hoàn toàn cảnh báo biến không sử dụng
        "no-undef": "off", // Tắt hoàn toàn cảnh báo biến không sử dụng
        // Các quy tắc khác nếu có
    }
};
