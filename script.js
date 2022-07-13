const cronometro = new Vue({
    el: "#app",
    data: {
        countS: 0,
        countM: 0,
        interval: null
    },
    
    methods: {
        start() {
            this.interval = setInterval(() => {
                this.countS ++;
                if (this.countS == 60) {
                    this.countM ++;
                    this.countS = 0;
                }

            }, 1000)
        },
        
    }
})