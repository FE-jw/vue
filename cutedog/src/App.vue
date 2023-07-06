<template>
    <div class="wrap">
        <header>
            <h1>Cute Dog</h1>
        </header>
        <section class="container">
            <figure>
                <img :src="this.currentDog" alt="">
            </figure>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentDog: ''
        }
    },
    created(){
        this.callDog();
    },
    methods: {
        callDog(){
            fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                this.currentDog = data.message;
            });
        }
    }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
body    {margin:0;padding:0;line-height:1.2;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.6rem;font-weight:300;color:#fff;}
</style>

<style lang="scss" scoped>
.wrap   {display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100vh;height:100dvh;background-color:#111;
    // header
}
</style>