// Vue.component('todoItem', {
//     props: ['todo'],
//     template: "<input type='text' v-model='todo.text' style='width:100%;'>"
// });
// Vue.component('clickDemo', {
//     data(){
//         return {
//             count: 0
//         }
//     },
//     template: "<button @click='count++'>You clicked me {{ count }} times.</button>'"
// })

const todoItem = {
    props: {
        todo: String
    },
    template: "<input type='text' v-model='todo.text' style='width:100%;'>"
}

const clickDemo = {
    data() {
        return {
            count: 0
        }
    },
    template: "<button @click='count++'>You clicked me {{ count }} times.</button>'"
}

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
        inputText: '',
        checkedNames: [],
        picked: '',
        selected: []
    },
    watch: {
        message(newValue, oldValue) {
            console.log(newValue, oldValue);
        }
    },
    computed: {
        subString3() {
            return this.message.substring(3);
        }
    },
    methods: {
        reverseMessage,
        txtShow,
        showText(text) {
            return text;
        },
        showInput() {
            console.log("按了回车");
            alert(this.inputText);
        }
    },
    components: {
        todoItem,
        clickDemo
    }
});
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
    app.todoes.push({ text: '课程+1' });
}

// app.$watch('message', function (newValue, oldValue) {
//     // 这个回调将在 `app.message` 改变后调用
//     console.log(newValue,oldValue);
// })