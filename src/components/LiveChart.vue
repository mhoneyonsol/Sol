<template>
  <div style="width: 60%; height: 90vh; margin-left: auto; margin-right: auto;">
    <div class="tradingview-widget-container" >
      <div class="tradingview-widget-container__widget"></div>
      
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!document.querySelector('#tradingview-widget-script')) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "CRYPTO:SOLUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "fr",
        hide_side_toolbar: false,
        allow_symbol_change: true,
        calendar: false,
        support_host: "https://www.tradingview.com"
      });
      this.$el.querySelector('.tradingview-widget-container__widget').appendChild(script);
    }
  }
};
</script>

<style scoped>
.tradingview-widget-container {
      height: 600px;
    width: 100%;
    margin-top: 10%;
}

iframe#tradingview-widget-script {
    user-select: none;
    box-sizing: border-box;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 23px!important;
    filter: drop-shadow(2px 4px 6px black);
}

.tradingview-widget-container__widget {
    height: 600px;
}

.close {
    color: #f00!important;
    float: right!important;
    margin-top: 5%!important;
    font-size: 28px!important;
    font-weight: 700!important;
    margin-right: 19%!important;
}
</style>
