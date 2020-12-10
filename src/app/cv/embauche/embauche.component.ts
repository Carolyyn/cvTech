import { EmbaucheService } from './../services/embauche.service';
import { Personne } from './../Model/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  personnesEmbauches: Personne[] = [];
  embauche = new Personne();
  show: false;
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit() {
    this.personnesEmbauches = this.embaucheService.getEmbauche();
  }



}
