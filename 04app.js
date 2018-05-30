new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        add: function(arg = 1) {
            //this.age++
            this.age += arg;
        },
        subtract: function(arg = 1) {
            //this.age--
            this.age -= arg;
        },
        msg: function() {
            return "Hello World!!!!";
        },
        updateXY: function(e) {
            console.log("updateXY() -> e=", e);
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    }
});