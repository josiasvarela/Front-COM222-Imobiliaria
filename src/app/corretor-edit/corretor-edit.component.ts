import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CorretorServiceService } from '../corretor-service.service';


@Component({
  selector: 'app-corretor-edit',
  templateUrl: './corretor-edit.component.html',
  styleUrls: ['./corretor-edit.component.css']
})
export class CorretorEditComponent implements OnInit {

  tipo: any;

  flag: boolean = false;

  corretorForm = new FormGroup({
    tipo: new FormControl(''),
    nome: new FormControl(''),
    creci: new FormControl(''),
    comissao: new FormControl(''),
    salario: new FormControl(''),
    data_admissao: new FormControl('')

  });

  alteraCorretor() {
    this.corretorService.alteraCorretor(this.router.snapshot.params.id, this.corretorForm.value).subscribe((res)=>{
      console.log(res);
      this.flag=true;
  });

  }

  changeFlag() {
    this.flag = false;
  }


  constructor(private corretorService: CorretorServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.corretorService.getCorretor(this.router.snapshot.params.id).subscribe((data:any)=>{
      this.corretorForm = new FormGroup({
        tipo: new FormControl(data['tipo']),
        nome: new FormControl(data['nome']),
        creci: new FormControl(data['creci']),
        comissao: new FormControl(data['comissao']),
        salario: new FormControl(data['salario']),
        data_admissao: new FormControl(data['data_admissao'])
      });

      this.tipo = data['tipo'];
    })
  }

}
