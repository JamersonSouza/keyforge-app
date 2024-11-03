import { Component, OnInit } from '@angular/core';
import { KeyforgeServiceService } from '../../services/keyforge-service.service';
import { Password } from '../../model/password';
import { PaginatedResponse } from '../../model/paginated-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  passwords! : Password[];
  totalPages: number = 0; 
  currentPage: number = 0;

  constructor(
    private keyForgeService : KeyforgeServiceService,
  ){}


  ngOnInit(): void {
     this.keyForgeService.getAllPasswords().subscribe((res: PaginatedResponse<Password>) => {
            this.passwords = res.content;
            this.totalPages = res.totalPages;
            console.log("aqui..", res)
        });
  }

  

}
