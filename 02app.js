new Vue({
    el: '#vue-app',
    data: {
        name: 'Benny',
        job: 'developer',
    },
    methods: {
        greet: function(time) {
            console.log('this.name : ', this.name);
            console.log('this.job : ', this.job);

            //return 'Good ' + time + ' ' + this.name;
            return `Good ${time}, ${this.name}...`;
        }
    }
});