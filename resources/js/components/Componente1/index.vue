<template>
    <v-app>
        <v-container
        class="fill-height"
        fluid
        >
            <v-row
            align="center"
            justify="center"
            >
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                    <v-card
                    dark width=600
                    >
                        <v-card-title> Suma de dos numeros</v-card-title>

                        <v-card-text>
                            <v-text-field v-model.number="num1" label="Introduzca un numero" solo></v-text-field>
                            <v-text-field v-model.number="num2" label="Introduzca un numero" solo></v-text-field>
                        </v-card-text>

                        <v-card-actions>
                            <v-row
                                align="center"
                                justify="space-around"
                            >
                                <v-btn
                                color="primary"
                                @click="sumar()">Suma</v-btn>

                                <v-btn
                                color="primary"
                                @click="limpiar()">Limpiar</v-btn>
                            </v-row>
                        </v-card-actions>

                        <v-card-text>
                            <span> Resultado: {{suma}} </span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
        presionar:false,
        cards: [
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
      suma: 0
    }),

    methods:{
        sumar(){
            console.log("Hola mundo 1");
            this.suma=this.num1+this.num2;
        },
        limpiar(){
        console.log("Hola mundo 2");
            this.suma=0;
        }
    }
  }
</script>
