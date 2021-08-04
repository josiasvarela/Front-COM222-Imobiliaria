import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ImovelService } from '../imovel.service';


@Component({
  selector: 'app-imovel-add',
  templateUrl: './imovel-add.component.html',
  styleUrls: ['./imovel-add.component.css']
})
export class ImovelAddComponent implements OnInit {

  flag: boolean = false;
 

  tipos = ['casa', 'apartamento', 'sala comercial', 'lote', 'chácara', 'sítio', 'fazenda'];

  constructor(private imovelService: ImovelService) {
  }

  imovelForm = new FormGroup({
    tipo: new FormControl(''),
    descricao: new FormControl(''),
    nome_vendedor: new FormControl(''),
    preco: new FormControl(''),
    imagem: new FormControl(''),
    data_cadastro: new FormControl('')

  });


  insereImovel(){
    this.imovelService.insereImovel(this.imovelForm.value).subscribe((result)=>{
    console.log(result);
    this.flag = true;
    this.imovelForm.reset({});
    });
  }

  changeFlag(){
    this.flag = false;
  }

  ngOnInit(): void {
  }

}
