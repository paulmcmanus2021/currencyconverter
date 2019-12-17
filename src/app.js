import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      allData: null,
      exchangeRates: {}
    },

    mounted(){
      this.getAllData()
    },

    methods: {
      getAllData: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(allData => this.allData = allData.rates)
      },
    }
  })
})
