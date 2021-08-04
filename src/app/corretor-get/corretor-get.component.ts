import { Component, OnInit } from '@angular/core';
import { CorretorServiceService } from '../corretor-service.service';

@Component({
  selector: 'app-corretor-get',
  templateUrl: './corretor-get.component.html',
  styleUrls: ['./corretor-get.component.css']
})
export class CorretorGetComponent implements OnInit {

  corretores: any = [];

  constructor(private corretorService : CorretorServiceService) { }

  ngOnInit(): void {
    this.corretorService.getCorretores().subscribe((data) =>{
      this.corretores = data;
    })
  }

  deletaCorretor(creci: any){
    this.corretorService.deletaCorretor(creci).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  }

}
