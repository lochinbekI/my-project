<template>
    <div class="home">
        <Header/>
        <TopSlider />
        <AboutCom />
        <Amount />
        <Partfolio />
        <Price />
        <Servise />
        <Equipment />
        <Staff />
        <Trust />
        <Map />
        <TelegramChanal />
        <Footer />
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    import Header from '../components/Header';
    import TopSlider from '../components/TopSlider';
    import AboutCom from '../components/AboutCom';
    import Amount from '../components/amount';
    import Partfolio from '../components/Partfolio';
    import Price from '../components/Price/Price';
    import Servise from '../components/Price/Servise';
    import Equipment from '../components/Equipment';
    import Staff from '../components/Staff';
    import Trust from '../components/Trust';
    import Map from '../components/map';
    import TelegramChanal from '../components/TelegramChanal';
    import Footer from '../components/Footer';


    export default {
        name: 'Home',
        components: {
            Footer,
            TelegramChanal,
            Map,
            Trust,
            Staff,
            Equipment,
            Servise,
            Price,
            Partfolio,
            Amount,
            AboutCom,
            TopSlider,
            Header
            // HelloWorld
        }
    };
</script>
