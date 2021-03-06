import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = new Personne();
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('in card', this.personne);
  }
  // envoyer vers la page détails de la personne
  goToDetails() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
