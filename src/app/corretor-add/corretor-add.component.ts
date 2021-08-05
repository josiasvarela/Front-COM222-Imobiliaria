import { Component, OnInit } from '@angular/core';
import { CorretorServiceService } from '../corretor-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-corretor-add',
  templateUrl: './corretor-add.component.html',
  styleUrls: ['./corretor-add.component.css']
})
export class CorretorAddComponent implements OnInit {

  tipos = ['contratado', 'comissionado'];

  selecao = 'contratado';

  flag: boolean = false;

  constructor(private corretorService: CorretorServiceService) { }

  corretorForm = new FormGroup({
    tipo: new FormControl(''),
    nome: new FormControl(''),
    creci: new FormControl(''),
    comissao: new FormControl('1'),
    salario: new FormControl(null),
    data_admissao: new FormControl('')

  });

  insereCorretor() {
    this.corretorService.insereCorretor(this.corretorForm.value).subscribe((res) => {
      this.flag = true;
      this.corretorForm.reset({});
      this.corretorForm = new FormGroup({
        tipo: new FormControl(''),
        nome: new FormControl(''),
        creci: new FormControl(''),
        comissao: new FormControl('1'),
        salario: new FormControl(null),
        data_admissao: new FormControl('')
      });
    });

  }

  changeFlag() {
    this.flag = false;
  }




  ngOnInit(): void {
  }

}
