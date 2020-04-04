<template>
    <div>
        <header class="header">
            <div class="header_container">
                <div class="header_container_leftlogohum">
                    <div class="hammenuv">
                        <button @click="openHide" class="btn hammenuv_btn">
                            <img v-if="!openMenu" src="img/menu.png" alt="">
                            <img v-else src="img/close.png" alt="">
                        </button>
                    </div>
                    <a class="header_logo" href="#">
                        <span>
                            <img src="/img/itweb-logo.png">
                        </span>
                    </a>
                </div>
                <div v-if="openMenu" class="header_menu_cover">
                    <ul>
                        <li><a class="go_to" href="#scr2">О компании</a></li>
                        <li><a class="go_to" href="#scr3">Услуги</a></li>
                        <li><a class="go_to" href="#scr4">Портфолио</a></li>
                        <li><a class="go_to" href="#scr5">Клиенты</a></li>
                        <li><a class="go_to" href="#scr6">Команда</a></li>
                        <li><a class="go_to" href="#scr7">Контакты</a></li>
                    </ul>
                </div>
                <div class="header_right">
                    <a href="tel:+998781503636">
                        <span class="header_right_mobile">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <span class="header_right_desctop">
                            +998 78 <span class="header_right_bold"> 150-36-36</span>
                        </span>
                    </a>
                    <button class="header_recall go_to" href="#scr1">
                        <span class="header_recall_img">
                            <img src="img/call.png">
                        </span>
                        <span class="header_recall_cont">
                            Заказать звонок
                        </span>
                    </button>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data: () =>({
            openMenu: false,
            winWidth: null,
        }),
        methods:{
            openHide(){
                this.winWidth = window.innerWidth;
                console.log( this.winWidth);
                this.openMenu = !this.openMenu;
            }
        },
        mounted() {
            // window.addEventListener('resize', () => {
            //     this.windowWidth = window.innerWidth
            //     console.log(this.isMobile)
            // })
        },
        computed: {
            // isMobile() {
            //     return this.windowWidth >= 991
            // }
        },
        watch: {

        }
    };
</script>

<style scoped>
.hammenuv_btn{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 0;
}
    .hammenuv_btn img{
        max-width: 100%;
        max-height: 100%;
    }
</style>