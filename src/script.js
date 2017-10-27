window.onload = () => {
    const fact = new Vue({
        el: '#fact',
        data: {
            fact: getFact()
        },
        methods: {
            newFact: function() {
                this.fact = getFact()
            }
        }
    });
}