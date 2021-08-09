import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { CorretorServiceService } from '../corretor-service.service';
import { ImovelService } from '../imovel.service';
import { VendasCorretor } from '../vendas-corretor';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})

export class PagamentoComponent implements OnInit {

  mes: any;
  ano: any;

  total_vendas: any = [];
  corretores: any = [];
  auxiliar: any = [];

  creciSelecionado: String = '';

  constructor(private vendaService: VendaService, private corretorService: CorretorServiceService) { }

  filtrarPagamentos() {

    this.vendaService.getVendasMes(this.mes, this.ano).subscribe((data) => {
      this.total_vendas = data;

      this.auxiliar = [];

      if (this.creciSelecionado == "Todos" || this.creciSelecionado == "") {
        for (let c of this.corretores) {

          let valor = 0;

          for (let v of this.total_vendas) {

            if (c.creci == v.creci_corretor) {
              valor += v.valor;
            }
          }

          let vc = new VendasCorretor(c.creci, c.comissao, c.salario, valor);
          this.auxiliar.push(vc);
        }
      } else {
        for (let c of this.corretores) {
          if (c.creci == this.creciSelecionado) {


            let valor = 0;

            for (let v of this.total_vendas) {

              if (c.creci == v.creci_corretor) {
                valor += v.valor;
              }
            }

            let vc = new VendasCorretor(c.creci, c.comissao, c.salario, valor);
            this.auxiliar.push(vc);

          }
        }
      }
    });

  }

  ngOnInit(): void {

    this.corretorService.getCorretores().subscribe((data) => {
      this.corretores = data;
    });
  }

}
