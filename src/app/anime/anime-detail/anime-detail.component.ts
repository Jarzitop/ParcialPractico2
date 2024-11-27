import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
onSelected() {
throw new Error('Method not implemented.');
}

  @Input() animeDetail!: Anime;

  constructor() { }

  ngOnInit() {
    
  }


}
