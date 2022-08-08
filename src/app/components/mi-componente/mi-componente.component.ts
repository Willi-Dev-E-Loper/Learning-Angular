import { ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public  title: String;
    public coment: String;
    public year: number;

    constructor(){
        this.title= "Hola mundo, soy MI COMPONENTE ";
        this.coment = "My first component";
        this.year = 2022;
        console.log('Componente cargado')
        console.log(this.title, this.coment, this.year)
    }
}