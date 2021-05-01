import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BilletService } from 'src/app/_services/billet.service';

@Component({
  selector: 'app-paiement-billet',
  templateUrl: './paiement-billet.component.html',
  styleUrls: ['./paiement-billet.component.css']
})
export class PaiementBilletComponent implements OnInit {
  billet: any;

  constructor(private route: ActivatedRoute, private service:BilletService, private formBuilder: FormBuilder, public form: FormGroup) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.billet=this.service.getBillet(id).subscribe(data=>{
      this.billet=data

    })
  }

}
