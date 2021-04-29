import { Component, OnInit } from '@angular/core';
import { BilletService } from 'src/app/_services/billet.service';

@Component({
  selector: 'app-billet-list',
  templateUrl: './billet-list.component.html',
  styleUrls: ['./billet-list.component.css']
})
export class BilletListComponent implements OnInit {
  billets:any;
  constructor(private service:BilletService) { }

  ngOnInit(): void {
    this.billets=this.service.getBillets().subscribe(data=>this.billets=data)
  }

}
