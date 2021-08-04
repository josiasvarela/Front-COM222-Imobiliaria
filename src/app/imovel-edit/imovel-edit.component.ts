import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../imovel.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imovel-edit',
  templateUrl: './imovel-edit.component.html',
  styleUrls: ['./imovel-edit.component.css']
})
export class ImovelEditComponent implements OnInit {

  flag: boolean = false;

  imoveis:any;

  imovelForm = new FormGroup({
    codigo: new FormControl(''),
    tipo: new FormControl(''),
    descricao: new FormControl(''),
    nome_vendedor: new FormControl(''),
    preco: new FormControl(''),
    imagem: new FormControl(''),
    data_cadastro: new FormControl(''),
    disponivel: new FormControl('')
  });

 

  constructor(private imovelService: ImovelService, private router : ActivatedRoute) { }

  alteraImovel(){
    this.imovelService.alteraImovel(this.router.snapshot.params.id, this.imovelForm.value).subscribe((res)=>{
      console.log(res);
      this.flag=true;
    });
  }

  changeFlag(){
    this.flag = false;
  }

  ngOnInit(): void {
    this.imovelService.getImovel(this.router.snapshot.params.id).subscribe((data:any) => {
      this.imovelForm = new FormGroup({
        codigo: new FormControl(data['codigo']),
        tipo: new FormControl(data['tipo']),
        descricao: new FormControl(data['descricao']),
        nome_vendedor: new FormControl(data['nome_vendedor']),
        preco: new FormControl(data['preco']),
        imagem: new FormControl(data['imagem']),
        data_cadastro: new FormControl(data['data_cadastro']),
        disponivel: new FormControl(data['disponivel'])
      });
    });
  }

}
