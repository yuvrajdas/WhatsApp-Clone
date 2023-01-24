import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  isSendEnable = false;
  writeMessage(messageEvent:any){
    if(messageEvent.target.value.length>0){
      this.isSendEnable = true;
    }else if(messageEvent.target.value.length<=0){
      this.isSendEnable = false;
    }
  }
}
