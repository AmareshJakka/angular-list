import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import{AppService}from '../app.service';
import { NbDialogService } from '@nebular/theme';

import { NbWindowService } from '@nebular/theme';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list;
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  constructor(private appService :AppService,private dialogService: NbWindowService) { }
  

  ngOnInit(): void {
    this.appService.getList().subscribe(data=>{
      console.log(data)
       this.list = data;
     });
  }
  open(BookDetails){
    console.log(BookDetails);
    this.dialogService.open(this.contentTemplate,
     {title: 'Book Details',context:{item:BookDetails}  })
  }

}
