import { ToastrService } from 'ngx-toastr';
import { Personne } from './../Model/personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmbaucheService {
  private personnesEmbauches: Personne[] = [];
  constructor(private toaster: ToastrService) { }

  embaucher(newPerson : Personne)
  {
    const index = this.personnesEmbauches.indexOf(newPerson);
    if (index === -1)
    {

      this.personnesEmbauches.push(newPerson);
      //this.toaster.success('Embauché !');
    } else{
      this.toaster.error('No person to add');
      console.log(index);
    }
  }

  getEmbauche() {
   return this.personnesEmbauches;
  }
}
