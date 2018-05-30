new Vue({
    el: '#vue-app',
    data: {
        name: 'Benny',
        job: 'developer',
        myStyle: 'background-color: green;',
        companyUrl: 'http://www.obigo.com',
        companyUrlTag: `<a href="http://www.obigo.com">오비고 코리아</a>`,
        btnCaption: '버튼 내용',
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