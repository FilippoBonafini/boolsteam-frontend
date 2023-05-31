<template>
    <footer>
        <div class="container container-footer">
            <hr>
            <div class="container-loghi d-flex justify-content-between">
                <div>logo 1</div>
                <div>logo 2</div>
            </div>

            <div>
                <small>
                    @2023 Valve Corporation.Tutti i diritti riservati. Tutti i marchi appartengono ai rispettivi proprietari
                    negli Stati Uniti e negli altri paesi.
                    Iva iclusa sul prezzo(ove applicabile).

                    <a href="">Informativa sulla privacy</a>
                    <a href="">informazioni legali</a>
                    <a href="">Contratto di sottoscrizione a steam</a>
                    <a href="">Rimborsi</a>
                    <a href="">Cookie</a>
                </small>
            </div>
            <hr>
            <div>
                <a href="">Informazioni su Valve</a>
                <a href="">Impieghi</a>
                <a href="">Steamworks</a>
                <a href="">Distribuzione su Steam</a>
                <a href="">Assistenza</a>
                <a href="">Buoni regalo</a>
                <!--da inserire al posto di i l'icona-->
                <a href="">i Steam</a>
                <a href="">i @steam</a>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style scoped>
footer {
    padding: 20px;
    color: white;
    background-color: rgb(47, 57, 51);
}

.container-footer {
    padding-left: 50px;
}

small>a {
    color: white;
    border-right: 1px solid white;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 15px;
}

a {
    color: white;
    border-right: 1px solid white;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
}
</style>