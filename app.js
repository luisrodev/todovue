const app = new Vue({
    el: '#todo',
    data: {
        event: {
            id: '',
            name: '',
            description: '',
            date: '2018-09-23'
        },
        events: []
    },
    mounted: function () {
        console.log('Aplication running');
    },
    methods: {        
        addEvent: function(){
            if(this.event.name){
                this.events.push(this.event);
                this.event = {name: '', description: '', date: '2018-09-23'};
            }
        }
    }
});