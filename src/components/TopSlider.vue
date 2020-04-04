<template>
    <div>
        <div class="gradient_all gradient_all_height"></div>
        <!-- top slider  -->
        <section class="top_slider" style="background-image: url(img/back.jpg);">
            <div class="top_slider_container">
                <VueSlickCarousel class="top_slider_all" v-bind="settings">
                    <div class="top_slider_item">
                        <div class="my_container">
                            <div class="top_slider_item_in">
                                <div class="top_slider_item_content">
                                    <h6>Полиграфическая продукция</h6>
                                    <h1>Брошюры, каталоги, журналы, справочники</h1>
                                    <p>
                                        Компания производит следующие виды
                                        полиграфической продукции: различные
                                        виды календарей, брошюры, каталоги, журналы и т.д.
                                    </p>
                                    <button class="for_allbtn go_to" href="#scr1">
                                        Связаться с нами
                                    </button>
                                </div>
                                <div class="top_slider_item_img">
                                    <img src="img/backimg.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top_slider_item">
                        <div class="my_container">
                            <div class="top_slider_item_in">
                                <div class="top_slider_item_content">
                                    <h6>Полиграфическая продукция</h6>
                                    <h1>Брошюры, каталоги, журналы, справочники</h1>
                                    <p>
                                        Компания производит следующие виды
                                        полиграфической продукции: различные
                                        виды календарей, брошюры, каталоги, журналы и т.д.
                                    </p>
                                    <button class="for_allbtn go_to" href="#scr1">
                                        Связаться с нами
                                    </button>
                                </div>
                                <div class="top_slider_item_img">
                                    <img src="img/backimg.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top_slider_item">
                        <div class="my_container">
                            <div class="top_slider_item_in">
                                <div class="top_slider_item_content">
                                    <h6>Полиграфическая продукция</h6>
                                    <h1>Брошюры, каталоги, журналы, справочники</h1>
                                    <p>
                                        Компания производит следующие виды
                                        полиграфической продукции: различные
                                        виды календарей, брошюры, каталоги, журналы и т.д.
                                    </p>
                                    <button class="for_allbtn go_to" href="#scr1">
                                        Связаться с нами
                                    </button>
                                </div>
                                <div class="top_slider_item_img">
                                    <img src="img/backimg.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top_slider_item">
                        <div class="my_container">
                            <div class="top_slider_item_in">
                                <div class="top_slider_item_content">
                                    <h6>Полиграфическая продукция</h6>
                                    <h1>Брошюры, каталоги, журналы, справочники</h1>
                                    <p>
                                        Компания производит следующие виды
                                        полиграфической продукции: различные
                                        виды календарей, брошюры, каталоги, журналы и т.д.
                                    </p>
                                    <button class="for_allbtn go_to" href="#scr1">
                                        Связаться с нами
                                    </button>
                                </div>
                                <div class="top_slider_item_img">
                                    <img src="img/backimg.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top_slider_item">
                        <div class="my_container">
                            <div class="top_slider_item_in">
                                <div class="top_slider_item_content">
                                    <h6>Полиграфическая продукция</h6>
                                    <h1>Брошюры, каталоги, журналы, справочники</h1>
                                    <p>
                                        Компания производит следующие виды
                                        полиграфической продукции: различные
                                        виды календарей, брошюры, каталоги, журналы и т.д.
                                    </p>
                                    <button class="for_allbtn go_to" href="#scr1">
                                        Связаться с нами
                                    </button>
                                </div>
                                <div class="top_slider_item_img">
                                    <img src="img/backimg.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top_slider_item">
                        <div class="my_container">
                            <div class="top_slider_item_in">
                                <div class="top_slider_item_content">
                                    <h6>Полиграфическая продукция</h6>
                                    <h1>Брошюры, каталоги, журналы, справочники</h1>
                                    <p>
                                        Компания производит следующие виды
                                        полиграфической продукции: различные
                                        виды календарей, брошюры, каталоги, журналы и т.д.
                                    </p>
                                    <button class="for_allbtn go_to" href="#scr1">
                                        Связаться с нами
                                    </button>
                                </div>
                                <div class="top_slider_item_img">
                                    <img src="img/backimg.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </VueSlickCarousel>

            </div>
        </section>
        <div class="gradient_all gradient_all_height"></div>

    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        name: 'TopSlider',
    data:()=>({
        settings: {
            arrows: false,
            dots: true,
            speed: 500,
            autoplaySpeed: 200,
        },
    }),
        components: {
            VueSlickCarousel
        },
    };
</script>

<style scoped>

</style>