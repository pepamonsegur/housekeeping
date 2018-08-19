import Vue from 'vue'

require('!style-loader!css-loader!../static/css/index.css');

console.log(Vue);

var app = new Vue ({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});