<template>
    <div>
        <section class="portfolio" id="scr4">
            <div class="container">
                <div class="portfolio_all">
                    <h6 class="for_allh6 for_alltext_center">Наши работы</h6>
                    <h1 class="for_allh1 for_alltext_center">Портфолио</h1>
                    <div class="portfolio_tabs">
                        <ul class="nav nav-tabs">
                            <li  :class="{ active: tab == '1' }"><a  @click="tabFunction('1')" data-toggle="tab">Полиграфическая продукция</a></li>
                            <li :class="{ active: tab == '2' }"><a  @click="tabFunction('2')" data-toggle="tab">Цифровая и офсетная печать</a></li>
                            <li :class="{ active: tab == '3' }"><a  @click="tabFunction('3')" data-toggle="tab">Дизайнерские услуги</a></li>
                            <li :class="{ active: tab == '4' }"><a  @click="tabFunction('4')" data-toggle="tab">Послепечатная обработка</a></li>
                            <li :class="{ active: tab == '5' }"><a  @click="tabFunction('5')" data-toggle="tab">Типография</a></li>
                        </ul>
                        <div class="tab-content">
                            <div  v-if="tab == '1'"  class="tab-pane  fade in active">

                                <div class="portfolio_cover_etem">
                                    <div
                                        class="portfolio_1item"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        :style="{ backgroundImage: 'url(' + image.src + ')' }"
                                    >
                                        <div class="portfolio_seac_icon">
                                            <span>
                                                <img src="img/searc.png">
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="see_more_button">
                                    <button>
                                        <span class="see_more_button_word">Загрузить еще</span>
                                        <span class="see_more_button_icon"><img src="img/Forma-1.png"></span>
                                    </button>
                                </div>
                            </div>
                            <div   v-if="tab == '2'" class="tab-pane  fade in active">
                                <div class="portfolio_cover_etem">
                                    <div
                                        class="portfolio_1item"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        :style="{ backgroundImage: 'url(' + image.src + ')' }"
                                    >
                                        <div class="portfolio_seac_icon">
                                            <span>
                                                <img src="img/searc.png">
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="see_more_button">
                                    <button>
                                        <span class="see_more_button_word">Загрузить еще</span>
                                        <span class="see_more_button_icon"><img src="img/Forma-1.png"></span>
                                    </button>
                                </div>
                            </div>
                            <div  v-if="tab == '3'" class="tab-pane  fade in active">

                                <div class="portfolio_cover_etem">
                                    <div
                                        class="portfolio_1item"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        :style="{ backgroundImage: 'url(' + image.src + ')' }"
                                    >
                                        <div class="portfolio_seac_icon">
                                            <span>
                                                <img src="img/searc.png">
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="see_more_button">
                                    <button>
                                        <span class="see_more_button_word">Загрузить еще</span>
                                        <span class="see_more_button_icon"><img src="img/Forma-1.png"></span>
                                    </button>
                                </div>
                            </div>
                            <div  v-if="tab == '4'" class="tab-pane  fade in active">

                                <div class="portfolio_cover_etem">
                                    <div
                                        class="portfolio_1item"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        :style="{ backgroundImage: 'url(' + image.src + ')' }"
                                    >
                                        <div class="portfolio_seac_icon">
                                            <span>
                                                <img src="img/searc.png">
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="see_more_button">
                                    <button>
                                        <span class="see_more_button_word">Загрузить еще</span>
                                        <span class="see_more_button_icon"><img src="img/Forma-1.png"></span>
                                    </button>
                                </div>
                            </div>
                            <div  v-if="tab == '5'" class="tab-pane  fade in active">

                                <div class="portfolio_cover_etem">
                                    <div
                                        class="portfolio_1item"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        :style="{ backgroundImage: 'url(' + image.src + ')' }"
                                    >
                                        <div class="portfolio_seac_icon">
                                            <span>
                                                <img src="img/searc.png">
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="see_more_button">
                                    <button>
                                        <span class="see_more_button_word">Загрузить еще</span>
                                        <span class="see_more_button_icon"><img src="img/Forma-1.png"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null">
        </CoolLightBox>

    </div>
</template>

<script>

    // use the component
    import CoolLightBox from 'vue-cool-lightbox';

    /* New step! For versions >= 1.1.0 add Vue CoolLightBox CSS. Can be added as a static asset or inside a component */
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';


    export default {
        name: 'Partfolio',
        components: {
            CoolLightBox,
        },
        data: () => ({

            tab: 1,

            items: [
                {
                    title: 'In nature, nothing is perfect and everything is perfect',
                    description: "Photo by Lucas",
                    src: 'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
                },
                {
                    title: 'a beautiful mountain view',
                    description: "Photo by Facundo",
                    src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
                },
            ],
            index: null,

        }),
        methods:{
            tabFunction(val){
                this.tab = val
            }
        }
    };
</script>

<style scoped>

</style>