<template>
    <div>
        <footer class="footer" id="scr1">
            <div class="container">
                <div class="top_footer">
                    <div class="tofoter">
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(onSubmit)">
                                <div class="tofoter_form">
                                    <h6 class="tofoter_form_tth6">Остались вопросы?</h6>
                                    <h1 class="tofoter_form_tth1">Связаться с нами</h1>

                                    <ValidationProvider name="Имя" rules="required|alpha_dash" v-slot="{ errors }">
                                        <input class="mb_0px" v-model="value2" type="text" placeholder="Имя">
                                        <span class="veevalid_mas">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <input class="mb_0px" v-model="value" placeholder="Телефон" type="text" v-mask="'+999(99)-99-99-99'" />
                                        <span class="veevalid_mas">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <div class="top_footer_select">
                                        <select name="" id="">
                                            <option selected disabled value="">Какая услуга вас интересует</option>
                                            <option value="">usliga 1</option>
                                            <option value="">usliga 2</option>
                                            <option value="">usliga 3</option>
                                            <option value="">usliga 4</option>
                                        </select>
                                        <span>
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                    </div>
                                    <input type="text" placeholder="Сообщение">
                                    <button class="header_recall header_recall_foter">
                                        Отправить
                                    </button>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                    <div class="tofoter_right">
                        <h1 class="tofoter_right_h1">Контакты</h1>
                        <div class="tofoter_right_covercon">

                            <div class="tofoter_right_1">
                                <h6>Адрес:</h6>
                                <p>
                                    г. Ташкент, Узбекистан Мирабадский р-н, ул. Мирабад 41/2 Посмотреть на карте
                                </p>
                            </div>

                            <div class="tofoter_right_1">
                                <h6>Телефон:</h6>
                                <a href="tel:998781503636">+998 78 150-36-36</a>
                            </div>

                            <div class="tofoter_right_1">
                                <h6>Почта:</h6>
                                <a href="#">www.print.uz</a>
                                <a href="#">info@print.uz</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_last">
                <div class="container">
                    <div class="footer_last_all">
                        <div class="footer_last_all_left">
                            <p>Print.uz| All Rights Reserved | Powered by Print.uz</p>
                        </div>
                        <div class="footer_last_all_right">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="gradient_all gradient_all_height_6px"></div>
        </footer>





    </div>
</template>

<script>
    import { extend } from 'vee-validate';
    import { required, alpha, alpha_dash } from 'vee-validate/dist/rules';

    // No message specified.
    extend('alpha', alpha);
    extend('alpha_dash', alpha_dash);

    // Override the default message.
    extend('required', {
        ...required,
        message: 'This field is required'
    });

    export default {
        name: 'Footer',
        data: () => ({
            value: '',
            value2: '',


            firstName: '',
            lastName: '',
            email: ''
        }),
        methods: {
            onSubmit()
            {
                alert('Form has been submitted!');
            },
            sendAccounts()
            {

            }
        }

    };
</script>

<style scoped>
    .veevalid_mas {
        margin-bottom: 15px;
        color: #E33985;
        display: block;
        padding-left: 15px;
    }

    .mb_0px {
        margin-bottom: 0 !important;
    }
</style>