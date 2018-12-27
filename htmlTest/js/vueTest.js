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
Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
});

Vue.component('anchored-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

const todoItem = {
    inheritAttrs: false,
    props: {
        text: String
    },
    methods: {
        changeString() {
            this.text = this.text.substring(0, this.text.length - 1 || 1);
        }
    },
    template: `<div style='width:100%' v-bind='$attrs'>
                <slot></slot><br>
                <input type='text' v-model='text' style='width:50%;'/>
                <button @click='changeString()' style='width:50%;'>改变</button>
               </div>`,
    // created(){
    //     this.$emit('update:text', this.text);
    // }
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
            { text: '语文', color: '#FFF' },
            { text: '数学', color: '#000' },
            { text: '英语', color: '#FF00FF' },
            { text: '化学', color: '#FFFF00' },
            { text: '物理', color: '#00FF00' }
        ],
        inputText: '',
        checkedNames: [],
        picked: '',
        selected: [],
        lovingVue: false,
        title: 'vue测试',
        show: true
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
        },
        showLovingVue() {
            console.log(this.lovingVue);
        }
    },
    components: {
        todoItem,
        clickDemo,
        //异步组件
        baseHeader: (resolve, reject) => {
            resolve({
                data() { },
                props: {
                    title: String
                },
                methods: {},
                provide() {
                    return {
                        getTitle: this.title
                    }
                },
                template: `<div class="content">{{title}}</div>`
            })
        }
    },
    created() {
        console.log(this);
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