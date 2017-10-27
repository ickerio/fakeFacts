window.onload = () => {
    const fact = new Vue({
        el: '#fact',
        data: {
            fact: 'no fact yet'
        },
        methods: {
            newFact: function() {
                this.fact = Math.random().toString(36).substring(7);
            }
        }
    });
}