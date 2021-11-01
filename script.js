const app = new Vue({
    el:'#cont',

    data:{
        caf:'',
        pedido:[],
        busqueda:'',
        minimo:0,
        cafes:[{
            titulo:'Capuchino',
            precio:25,
            estatus:'Vigente',
            ingredientes:'Agua, Cafe, Azucar y Leche Montada con Vapor.',
            genero:'Cafe',
        },
        {
            titulo:'Descafeinado',
            precio:20,
            estatus:'Vigente',
            ingredientes:'Agua, Cafe, Azucar y Dióxido de Carbono.',
            genero:'Cafe',
        },
        {
            titulo:'Moka',
            precio:15,
            estatus:'Vigente',
            ingredientes:'Agua, Cafe, Azucar, Chocolate y Leche.',
            genero:'Cafe',
        },
        {
            titulo:'Cargado',
            precio:10,
            estatus:'Vigente',
            ingredientes:'Agua, Cafe X2 y Azucar.',
            genero:'Cafe',
        },
    ]

    },
    computed:{
        mejoresCafes(){
            return this.cafes.filter((cafe) => cafe.precio <= this.minimo);
        },
        buscarCafe(){
            return this.cafes.filter((cafe) => cafe.titulo.includes(this.busqueda));
        },
        agregar(){
            this.pedido.push(this.caf);
            this.caf='';
        },
    },
}); 