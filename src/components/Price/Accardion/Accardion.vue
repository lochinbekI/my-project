<template>
    <div>

        <div class="pricee_right_acardion">

            <div class="panel-group">


                <div v-for="info in infos" :key="info.id" class="panel panel-default">
                    <div @click="openFun(info.id)" class="panel-heading">
                        <h4 class="panel-title">
                            <a role="button">
                                <i v-if="info.open" class="more-less glyphicon glyphicon-minus"></i>
                                <i v-else class="more-less glyphicon glyphicon-plus"></i>
                                {{ info.title }}
                            </a>
                        </h4>
                    </div>
                    <div v-if="info.open" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <div class="ln_footer_mobi_alink">
                                <p>
                                    {{ info.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Accardion',
        data: () => ({
            infos:[
                {
                    id: 1,
                    open: true,
                    title: '11111',
                    text: 'laboriosam mollitia et enim quasi adipisci quia provident illum111111111111111'
                },
                {
                    id: 2,
                    open: false,
                    title: '222222222',
                    text: 'laboriosam mollitia et enim quasi adipisci quia provident illum22222'
                },
                {
                    id: 3,
                    open: false,
                    title: '33333333',
                    text: 'laboriosam mollitia et enim quasi adipisci quia provident illum3333'
                }
            ]
        }),
        methods: {
            openFun(valId){
                const infosId = this.infos.map(info => {
                    if (info.id === valId){
                        return info.open = true;
                    }
                    return info.open = false;
                });
                console.log(infosId);
                console.log(valId);
            }
        },
        mounted() {

        }
    };
</script>

<style scoped>



</style>