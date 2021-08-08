import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { CorretorServiceService } from '../corretor-service.service';
import { ImovelService } from '../imovel.service';
import { VendasCorretor } from '../vendas-corretor';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})

export class RelatorioComponent implements OnInit {

  mes: any;
  ano: any;

  flag: boolean = false;

  total_vendas: any = [];
  corretores: any = [];
  imoveis: any = [];
  imoveis_encalhados: any = [];
  auxiliar: any = [];

  VendasTotal: number = 0;

  Faturamento: number = 0;

  contador: number = 0;

  despesas: number = 0;

  creciMes: String = '';
  comissaoMes: number = 0;

  constructor(private vendaService: VendaService, private corretorService: CorretorServiceService, private imovelSerive:ImovelService) { }

  filtrarIntervalo() {

    this.flag= true;

    this.VendasTotal = 0;

    this.vendaService.getVendasMes(this.mes, this.ano).subscribe((data) => {
      this.total_vendas = data;

      for (var i = 0; i < this.total_vendas.length; i++) {
        if (this.total_vendas[i].valor)
          this.VendasTotal += this.total_vendas[i].valor;
      }

      this.Faturamento = 0.05 * this.VendasTotal;


      this.corretorService.getCorretores().subscribe((data) => {
        this.corretores = data;

        this.auxiliar = [];

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

        this.calculaDespesas();
        this.corretorMes();




      });
    });
  }

  imoveisEncalhados(){
    for(let i of this.imoveis){
      let partesData = i.data_cadastro.split("/");

      if(partesData[2].length < 4){
        partesData[2] = "20" + partesData[2];
      }

      var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
      var data_atual = new Date();

      var diferencaTempo = Math.abs(data_atual.getTime() - data.getTime());
      var diferencaDias = Math.ceil(diferencaTempo / (1000 * 3600 * 24)); 

      if(diferencaDias >= 180){
        this.imoveis_encalhados.push(i);
      }

    }
  }

  corretorMes() {
    for (let a of this.auxiliar) {
      if (a.venda * a.comissao / 100 > this.comissaoMes) {
        this.comissaoMes = (a.venda*a.comissao/100);
        this.creciMes = a.creci;
      }
    }
  }


  calculaDespesas() {
    for (let a of this.auxiliar) {
      console.log(this.despesas);
      if (a.salario) {
        this.despesas += Number(a.salario);
      }
      this.despesas += Number((a.venda * a.comissao) / 100);
    }
  }

  ngOnInit(): void {
    this.imovelSerive.getImoveis().subscribe((data) =>{
      this.imoveis = data;
      this.imoveisEncalhados();
    })

  }






}
