<template>
    <div>
        <section class="companiaa" id="scr3">
            <h6 class="for_allh6 for_alltext_center">Услугии компании</h6>
            <h1 class="for_allh1 for_alltext_center">Услуги компании</h1>
            <div class="companiaa_cover">
                <VueSlickCarousel ref="servise" class="companiaa_slider" v-bind="settings">

                    <div class="companiaa_slider_item">
                        <div class="companiaa_slider_item_in">
                            <div class="companiaa_slider__img">
                                <img src="img/mod1.png">
                            </div>
                            <div class="companiaa_slider_contenr">
                                <h4>Полиграфическая продукция</h4>
                                <p>
                                    Компания производит следующие виды полиграфической продукции: различные виды календарей, брошюры, каталоги, журналы, справочники,
                                    плакаты, постеры, афиши, флаеры, лифлеты, открытки буклеты, этикетки, фирменные бланки, упаковочные коробки, папки и т.д
                                </p>
                                <button type="button"
                                        class="ln_btn_boot btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        data-item="0"
                                        onclick="inputText(event)">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="companiaa_slider_item">
                        <div class="companiaa_slider_item_in">
                            <div class="companiaa_slider__img">
                                <img src="img/mod2.png">
                            </div>
                            <div class="companiaa_slider_contenr">
                                <h4>Цифровая и офсетная печать</h4>
                                <p>
                                    Печать офсетом считается сегодня наиболее простым, и в то же время выгодным способом создания большого тиража продукции. Если вы
                                    хотите заказать большой тираж быструю печать и получить при этом прекрасный результат...
                                </p>
                                <button type="button" class="ln_btn_boot btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="companiaa_slider_item">
                        <div class="companiaa_slider_item_in">
                            <div class="companiaa_slider__img">
                                <img src="img/mod3.png">
                            </div>
                            <div class="companiaa_slider_contenr">
                                <h4>Дизайнерские услуги</h4>
                                <p>
                                    Мы имеем собственную дизайн-студию. В штате – высокопрофессиональные дизайнеры с многолетним опытом дизайна разнообразной
                                    полиграфической продукции. Логотип, фирменный стиль, авторский рисунок, дизайн любой сложности – от визиток...
                                </p>
                                <button type="button" class="ln_btn_boot btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="companiaa_slider_item">
                        <div class="companiaa_slider_item_in">
                            <div class="companiaa_slider__img">
                                <img src="img/mod4.png">
                            </div>
                            <div class="companiaa_slider_contenr">
                                <h4>Послепечатная обработка</h4>
                                <p>
                                    Отпечатанный тираж листовой продукции должен пройти ряд операций после печати, для того чтобы стать готовым продуктом. Послепечатная
                                    обработка: Ламинирование полиграфии, Пробивка отверстий, Установка пикколо, Брошюровка скобой, Переплет...
                                </p>
                                <button type="button" class="ln_btn_boot btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="companiaa_slider_item">
                        <div class="companiaa_slider_item_in">
                            <div class="companiaa_slider__img">
                                <img src="img/mod5.png">
                            </div>
                            <div class="companiaa_slider_contenr">
                                <h4>Типография</h4>
                                <p>
                                    Сегодня без услуг типографии невозможно представить ни жизнь простого человека, ни успешное ведение любого бизнеса в Ташкенте и
                                    Узбекистане. Наша типография имеет многолетний опыт печати полиграфии любыми тиражами. Мягкая обложка или твердый переплет,
                                    качественная склейка...
                                </p>
                                <button type="button" class="ln_btn_boot btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>

                </VueSlickCarousel>
                <div class="pricee_btns">
                    <button @click="showPrev" class="preva" style=""><img src="img/prev.png"></button>
                    <button @click="showNext" class="nexta" style=""><img src="img/next.png"></button>
                </div>
                <button class="header_recall header_recall_add header_recall_add_media go_to" href=".footer">
                    <span class="header_recall_img">
                        <img src="img/call.png">
                    </span>
                    <span class="header_recall_cont">
					Заказать звонок
				</span>
                </button>
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
        name: 'Servise',
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
                            slidesToShow: 4,
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
        components: {
            VueSlickCarousel
        },
        methods: {
            showNext() {
                this.$refs.servise.next()
            },
            showPrev() {
                this.$refs.servise.prev()
            },
        },
    };
</script>

<style scoped>

</style>