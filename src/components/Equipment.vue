<template>
    <div>
        <section class="equipment">
            <div class="equipment_container">
                <h6 class="for_allh6 for_alltext_center">Оборудование</h6>
                <h1 class="for_allh1 for_alltext_center">Наше оборудование</h1>

                <div class="equipment_slider_cover">
                    <div class="pricee_btns pricee_btns_eque">
                        <button @click="showPrev" class="prev2"><img src="img/prev.png"></button>
                        <button @click="showNext" class="next2"><img src="img/next.png"></button>
                    </div>
                    <VueSlickCarousel ref="equipment" class="equipment_slider" v-bind="settings">

                        <div class="equipment_slider_item">
                            <div class="equipment_slider_item_in">
                                <div class="equipment_slider_item_img">
                                    <img src="img/Screenshot_3.png">
                                </div>
                                <div class="equipment_slider_content">
                                    <h6>Резальная машина Polar 92</h6>
                                    <p>
                                        Благодаря использованию автоматических программ резки и сочетанию ряда необходимых дополнительных функций все операции выполняются
                                        быстро и качественно.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="equipment_slider_item">
                            <div class="equipment_slider_item_in">
                                <div class="equipment_slider_item_img">
                                    <img src="img/Screenshot_3.png">
                                </div>
                                <div class="equipment_slider_content">
                                    <h6>Резальная машина Polar 92</h6>
                                    <p>
                                        Благодаря использованию автоматических программ резки и сочетанию ряда необходимых дополнительных функций все операции выполняются
                                        быстро и качественно.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="equipment_slider_item">
                            <div class="equipment_slider_item_in">
                                <div class="equipment_slider_item_img">
                                    <img src="img/Screenshot_3.png">
                                </div>
                                <div class="equipment_slider_content">
                                    <h6>Резальная машина Polar 92</h6>
                                    <p>
                                        Благодаря использованию автоматических программ резки и сочетанию ряда необходимых дополнительных функций все операции выполняются
                                        быстро и качественно.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="equipment_slider_item">
                            <div class="equipment_slider_item_in">
                                <div class="equipment_slider_item_img">
                                    <img src="img/Screenshot_3.png">
                                </div>
                                <div class="equipment_slider_content">
                                    <h6>Резальная машина Polar 92</h6>
                                    <p>
                                        Благодаря использованию автоматических программ резки и сочетанию ряда необходимых дополнительных функций все операции выполняются
                                        быстро и качественно.
                                    </p>
                                </div>
                            </div>
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
        name: 'Equipment',
        components: {
            VueSlickCarousel
        },
        data: () => ({
            settings: {
                arrows: false,
                dots: false,
                speed: 500,
                autoplaySpeed: 200,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            },
        }),
        methods: {
            showNext() {
                this.$refs.equipment.next()
            },
            showPrev() {
                this.$refs.equipment.prev()
            },
        }
    };
</script>

<style scoped>

</style>