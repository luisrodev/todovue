const app = new Vue({
    el: '#todo',
    data: {
        event: {
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
        },

        deleteEvent: function(index){
            if(confirm("Estas seguro de querer eliminar el evento?")){
                this.events.splice(index, 1);
            }
        }
    }
});