import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  public mails: any = [];
  constructor(private _mailService: MailService) { 

   this._mailService.getmails().subscribe(
    (data: any) => {
      this.mails = data;
    },
    (error: any) => {
      return ("Internal server Error")
    }
  )
  }
ngOnInit(): void {
}
  
}
