import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-venda-add',
  templateUrl: './venda-add.component.html',
  styleUrls: ['./venda-add.component.css']
})
export class VendaAddComponent implements OnInit {

  flag: boolean = false;

  constructor(private vendaService: VendaService) { }

  vendaForm = new FormGroup({
    valor: new FormControl(''),
    nome_comprador: new FormControl(''),
    creci_corretor: new FormControl(''),
    codigo_imovel: new FormControl(''),
    data_venda: new FormControl(''),
  });

  insereVenda(){
    this.vendaService.insereVenda(this.vendaForm.value).subscribe((res) => {
      this.flag = true;
      this.vendaForm.reset({});
    });
  }

  ngOnInit(): void {
  }

  changeFlag() {
    this.flag = false;
  }

}
