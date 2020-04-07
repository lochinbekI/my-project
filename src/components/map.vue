<template>
    <div>

        <section class="mapinfo" id="scr7">
            <div class="mapinfo_all">
                <div class="container">
                    <div class="mapinfo_coverall">
                        <div class="mapinfo_twomap">
                            <a href="#">Google maps</a>
                            <a href="#">Яндекс карты</a>
                        </div>
                        <div class="mapinfo_infolasa">

                            <div class="mapinfo_infolasa_1">
                                <div class="mapinfo_infolasa_1_icon">
                                    <img src="img/i1.png">
                                </div>
                                <div class="mapinfo_infolasa_conpon">
                                    <h6>Адрес:</h6>
                                    <p>
                                        г. Ташкент, Узбекистан Мирабадский р-н,ул. Мирабад 41/2   Посмотреть на карте
                                    </p>
                                </div>
                            </div>

                            <div class="mapinfo_infolasa_1">
                                <div class="mapinfo_infolasa_1_icon">
                                    <img src="img/i2.png">
                                </div>
                                <div class="mapinfo_infolasa_conpon">
                                    <h6>Телефон:</h6>
                                    <a href="tel:+998781503636">+998 78 150-36-36</a>
                                </div>
                            </div>

                            <div class="mapinfo_infolasa_1">
                                <div class="mapinfo_infolasa_1_icon">
                                    <img src="img/i3.png">
                                </div>
                                <div class="mapinfo_infolasa_conpon">
                                    <h6>Почта:</h6>
                                    <a href="#">www.print.uz</a>
                                    <a href="#">info@print.uz</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <GmapMap
                id="map"
                class="lnmap"
                :center="{lat:41.313140, lng:69.200130}"
                :zoom="14"
                map-type-id="terrain"
            >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
            </GmapMap>
        </section>

    </div>
</template>

<script>
    export default {
        name: 'map',
        data: () =>({
            markers: [
                {
                    position: {lat: 41.311081, lng: 69.200062}
                },
                // {
                //     position: {lat: 11.0, lng: 11.0}
                // },
            ]
        })
    };
</script>

<style scoped>

</style>