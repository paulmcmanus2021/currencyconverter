import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: null
    },

    mounted(){
      this.getRates()
    },

    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates)
      },
    }
  })
})
