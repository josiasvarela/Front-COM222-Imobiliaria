import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-get',
  templateUrl: './venda-get.component.html',
  styleUrls: ['./venda-get.component.css']
})
export class VendaGetComponent implements OnInit {

  vendas: any = [];

  constructor(private vendaService : VendaService) { }

  ngOnInit(): void {
    this.vendaService.getVendas().subscribe((data)=>{
      this.vendas = data;
    })
  }

}
