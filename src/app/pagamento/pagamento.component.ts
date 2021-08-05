import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})

export class PagamentoComponent implements OnInit {

  mes: any;
  ano: any;

  vector: any = [];

  vendas_corretor_mes: any = [];

  constructor() { }

  filtrarPagamentos() {
    console.log('ola');
    //this.vendaService.getVendasporCorretor(this.mes, this.ano).subscribe((data) => {
      //this.vector = data;
    //})
  }

  ngOnInit(): void {
  }

}
