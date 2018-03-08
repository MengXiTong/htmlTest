Vue.component('todo-item', {
    props: ['todo'],
    template: "<input type='text' v-model='todo.text' style='width:100%;'>"
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        seen: true,
        todoes: [
            { text: '语文' },
            { text: '数学' },
            { text: '英语' },
            { text: '化学' },
            { text: '物理' }
        ],
    },
    methods: {
        reverseMessage: reverseMessage,
        showText: function () {
            return '啦啦啦啦';
        }
    },
});
// Vue.component('todo-item', {
//     template: '这是个待办项'
// });
var show = {
    name: '张三',
    age: 13
}
document.write(show.name + show.age);
var page = document.getElementById('page');
page.innerHTML = show.name;
function txtShow() {
    app.message = '初来乍到';
    // console.log(app.$data.message);
    // console.log('初来乍到');
}
function reverseMessage() {
    app.message = app.message.split('').reverse().join('');
}

app.$watch('message', function (newValue, oldValue) {
    // 这个回调将在 `app.message` 改变后调用
    console.log(newValue,oldValue);
})