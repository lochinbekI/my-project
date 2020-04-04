<template>
    <div>
        <section class="persons" id="scr6" style="background-image: url(img/bac22.png);">
            <div class="persons_conteiner">
                <h6 class="persons_top_h6">Персонал</h6>
                <h1 class="persons_top_h1">Наши менеджеры</h1>
                <div class="persons_slider_cover">
                    <div class="pricee_btns pricee_btns_person">
                        <button @click="showPrev" class="prev3 prev2"><img src="img/prev2.png"></button>
                        <button @click="showNext" class="next3 next2"><img src="img/next2.png"></button>
                    </div>
                    <VueSlickCarousel ref="staff" class="persons_slider" v-bind="settings">

                        <div class="persons_slider_item">
                            <div class="persons_slider_item_in">
                                <div class="persons_slider_item_img">
                                    <img src="img/topperson.png">
                                </div>
                                <div class="persons_slider_item_content">
                                    <h6>Иван Петров</h6>
                                    <p>Менеджер</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-skype" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="persons_slider_item">
                            <div class="persons_slider_item_in">
                                <div class="persons_slider_item_img">
                                    <img src="img/topperson.png">
                                </div>
                                <div class="persons_slider_item_content">
                                    <h6>Иван Петров</h6>
                                    <p>Менеджер</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-skype" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="persons_slider_item">
                            <div class="persons_slider_item_in">
                                <div class="persons_slider_item_img">
                                    <img src="img/topperson.png">
                                </div>
                                <div class="persons_slider_item_content">
                                    <h6>Иван Петров</h6>
                                    <p>Менеджер</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-skype" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="persons_slider_item">
                            <div class="persons_slider_item_in">
                                <div class="persons_slider_item_img">
                                    <img src="img/topperson.png">
                                </div>
                                <div class="persons_slider_item_content">
                                    <h6>Иван Петров</h6>
                                    <p>Менеджер</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-skype" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
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
        name: 'Staff',
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
                this.$refs.staff.next();
            },
            showPrev() {
                this.$refs.staff.prev();
            },
        }
    };
</script>

<style scoped>

</style>