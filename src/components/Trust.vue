<template>
    <div>
        <section class="partners" id="scr5">
            <div class="partners_container">
                <h6 class="for_allh6 for_alltext_center">Клиенты</h6>
                <h1 class="for_allh1 for_alltext_center">Нам доверяют</h1>
                <div class="partners_slider_cover">
                    <div class="pricee_btns pricee_btns_person">
                        <button @click="showPrev" class="prev2 prev4"><img src="img/prev.png"></button>
                        <button @click="showNext" class="next2 next4"><img src="img/next.png"></button>
                    </div>
                    <VueSlickCarousel ref="trust" class="partners_slider" v-bind="settings">

                        <div class="partners_slider_item">
                            <a href="#" class="partners_slider_item_in">
                                <img src="img/car2.png">
                            </a>
                        </div>

                        <div class="partners_slider_item">
                            <a href="#" class="partners_slider_item_in">
                                <img src="img/car2.png">
                            </a>
                        </div>

                        <div class="partners_slider_item">
                            <a href="#" class="partners_slider_item_in">
                                <img src="img/car2.png">
                            </a>
                        </div>

                        <div class="partners_slider_item">
                            <a href="#" class="partners_slider_item_in">
                                <img src="img/car2.png">
                            </a>
                        </div>

                        <div class="partners_slider_item">
                            <a href="#" class="partners_slider_item_in">
                                <img src="img/car2.png">
                            </a>
                        </div>

                        <div class="partners_slider_item">
                            <a href="#" class="partners_slider_item_in">
                                <img src="img/car2.png">
                            </a>
                        </div>

                    </VueSlickCarousel>
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


    export default {
        name: 'Trust',
        components: {
            VueSlickCarousel
        },
        data: () => ({
            settings: {
                arrows: false,
                dots: false,
                speed: 500,
                autoplaySpeed: 200,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                ]
            },
        }),
        methods: {
            showNext() {
                this.$refs.trust.next()
            },
            showPrev() {
                this.$refs.trust.prev()
            },
        }
    };
</script>

<style scoped>

</style>