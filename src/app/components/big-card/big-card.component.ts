import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.sass']
})
export class BigCardComponent implements OnInit {
  image:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
  title:string = 'Bulbasaur'
  content:string = "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
  @Input()
  Id:number|string='1'
  constructor() { }

  ngOnInit(): void {
  }

}
