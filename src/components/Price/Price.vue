<template>
    <div>
        <section class="pricee">
            <div class="pricee_cotanier">
                <div class="pricee_left">
                    <VueSlickCarousel ref="carousel" class="pricee_slider" v-bind="settings">
                        <div class="vueSlickCarousel_item">
                            <img src="img/print_02.png" alt="">
                        </div>
                        <div class="vueSlickCarousel_item">
                            <img src="img/print_02.png" alt="">
                        </div>
                        <div class="vueSlickCarousel_item">
                            <img src="img/print_02.png" alt="">
                        </div>
                    </VueSlickCarousel>
                    <div class="pricee_btns">
                        <button @click="showPrev" class="prev"><img src="img/prev.png"></button>
                        <button @click="showNext" class="next"><img src="img/next.png"></button>
                    </div>
                </div>
                <div class="pricee_right">
                    <div class="pricee_right_maindfgd">
                        <h6>Вопросы-ответ</h6>
                        <h4>Пеимущества</h4>
                    </div>
                    <Accardion />
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    import Accardion from './Accardion/Accardion';


    export default {
        name: 'Price',
        data: () => ({
            settings: {
                dots: false,
                speed: 500,
                autoplaySpeed: 200,
                arrows: false,
            },


        }),
        components: {
            Accardion,
            VueSlickCarousel
        },
        methods: {
            showNext() {
                this.$refs.carousel.next()
            },
            showPrev() {
                this.$refs.carousel.prev()
            },
        },
    };
</script>

<style scoped>
    .vueSlickCarousel_item img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>