<script>
export default {
    name: 'AppCardList'
}
</script>

<template>
    <div class="container container-main-bot">

        <h3>Giochi:</h3>

        <div class="contaier container-card-list">
            <div class="card-film d-flex justify-content-between align-items-end">

                <!--il contaier img poi va tolto-->
                <div class="info-img d-flex">
                    <div class="container-img">img</div>

                    <div class="info">
                        <h4>Titolo</h4>
                        <div>tag</div>
                        <div><small>Data di rilascio</small><!--aggiungere l'icona delle piattaforme--></div>
                    </div>
                </div>

                <div>sconto</div>
            </div>
        </div>

        <div class="contaier container-card-list">
            <div class="card-film d-flex justify-content-between align-items-end">

                <!--il contaier img poi va tolto-->
                <div class="info-img d-flex">
                    <div class="container-img">img</div>

                    <div class="info">
                        <h4>Titolo</h4>
                        <div>tag</div>
                        <div><small>Data di rilascio</small><!--aggiungere l'icona delle piattaforme--></div>
                    </div>
                </div>

                <div>sconto</div>
            </div>
        </div>

        <div class="contaier container-card-list">
            <div class="card-film d-flex justify-content-between align-items-end">

                <!--il contaier img poi va tolto-->
                <div class="info-img d-flex">
                    <div class="container-img">img</div>

                    <div class="info">
                        <h4>Titolo</h4>
                        <div>tag</div>
                        <div><small>Data di rilascio</small><!--aggiungere l'icona delle piattaforme--></div>
                    </div>
                </div>

                <div>sconto</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/main.scss';

.container-main-bot {
    background-color: pink;
}

.container-card-list {
    background-color: aqua;
    margin: 5px;
}

.container-img {
    width: 200px;
    height: 100px;
    background-color: orchid;
    margin: 5px;
}
</style>