import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../imovel.service';
import { Imovel } from '../imovel';


@Component({
  selector: 'app-imovel-get',
  templateUrl: './imovel-get.component.html',
  styleUrls: ['./imovel-get.component.css']
})
export class ImovelGetComponent implements OnInit {

  imoveis: any = [];

  tiposDisponiveis: any = [];

  selecao = 'tudo';

  constructor(private imovelService: ImovelService) {

  }

  deletarImovel(codigo: any) {
    this.imovelService.deletarImovel(codigo).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }


  ngOnInit(): void {
    this.imovelService.getImoveis().subscribe((data) => {
      this.imoveis = data;

      for (var i = 0; i < this.imoveis.length; i++) {
        if (!this.tiposDisponiveis.includes(this.imoveis[i].tipo))
          this.tiposDisponiveis.push(this.imoveis[i].tipo);

      }

    });




  }

}
