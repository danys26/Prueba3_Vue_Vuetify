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
                            <v-text-field v-model.number="num1" label="Introduzca un numero" solo clearable></v-text-field>
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
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Buscar..."
                                single-line
                                hide-details
                            >
                            </v-text-field>
                            <v-data-table
                                :headers="headers"
                                :items="infoSuma"
                                :items-per-page="5"
                                :search="search"
                                class="elevation-1"
                            >

                                <template v-slot:item.actions="{ item }">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon @click="monstrartDialogo()"
                                                v-bind="attrs"
                                                v-on="on">
                                                <v-icon dark color="orange darken-1">
                                                    mdi-pencil
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Editar</span>
                                    </v-tooltip>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-dialog v-model="dialog" max-width="1000">
                                    <v-card>
                                        <v-card-title class="text-h5 grey lighten-2">
                                            Dialog de Prueba
                                        </v-card-title>

                                        <v-card-text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="primary"
                                            text
                                            @click="dialog = false"
                                        >
                                            Salir
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
        search:'',
        headers:[
            {text: 'Numero 1',value: 'numero1'},
            {text: 'Numero 2',value: 'numero2'},
            {text: 'Suma',value: 'suma'},
            {text: 'Acciones',value: 'actions'}
        ],
        presionar:false,
        infoSuma: [],
        suma: 0,
        dialog: false,
    }),

    methods:{
        sumar(){
            console.log("Hola mundo 1");
            this.suma=this.num1+this.num2;
            this.infoSuma.push({numero1: this.num1,numero2: this.num1,suma:this.suma});
            console.log(this.infoSuma);
        },
        limpiar(){
        console.log("Hola mundo 2");
            this.suma=0;
        },
        monstrartDialogo(){
            console.log("Funciona");
            this.dialog=true;
        }
    }
  }
</script>
