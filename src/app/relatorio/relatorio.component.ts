import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { VendasCorretor } from '../vendas-corretor';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})

export class RelatorioComponent implements OnInit {

  mes: any;
  ano: any;

  total_vendas: any = [];

  VendasTotal: number = 0;

  Faturamento: number = 0;

  constructor(private vendaService: VendaService) { }

  filtrarIntervalo() {

    this.VendasTotal = 0;

    this.vendaService.getVendasMes(this.mes, this.ano).subscribe((data) => {
      this.total_vendas = data;
      console.log(this.total_vendas);

      for (var i = 0; i < this.total_vendas.length; i++) {
        if (this.total_vendas[i].valor)
          this.VendasTotal += this.total_vendas[i].valor;
      }

      this.Faturamento = 0.05 * this.VendasTotal;




    });
  }

  ngOnInit(): void {


  }






}
