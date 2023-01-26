import { Component,Input, } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() conversationEvent!: any;
  isSendEnable = false;
  isEmojiPickerEnable:boolean = false;
  msgText = '';
  constructor() { }

  ngOnInit() {
    console.log(this.msgText);
  }

  // checking input value length and based on that enabling and disabling send icon
  writeMessage() {

    if (this.msgText.length > 0) {
      this.isSendEnable = true;
    } else if (this.msgText.length <= 0) {
      this.isSendEnable = false;
    }
  }

  addEmoji(event:any){
    this.isSendEnable = true;
    console.log(event.emoji.native);
    this.msgText+=event.emoji.native;
  }

  sendMessage() {
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    let crrTime = `${hours}:${minute}`;
    let value = this.msgText;
    value = value.split(' ').join('');
    if(value === ''){
      return;
    }
    let msgData = {
      body: value, time: crrTime, me: true
    }
    this.conversationEvent.messages.unshift(msgData)
    this.conversationEvent.message = value;
    this.msgText = '';
    this.isSendEnable = false;
  }
}
