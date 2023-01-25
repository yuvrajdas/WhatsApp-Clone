import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() conversationEvent!: any;
  isSendEnable = false;
  constructor() { }

  ngOnInit() {
    console.log(this.conversationEvent);

  }
  writeMessage(messageEvent: any) {
    if (messageEvent.target.value.length > 0) {
      this.isSendEnable = true;
    } else if (messageEvent.target.value.length <= 0) {
      this.isSendEnable = false;
    }
  }
  sendMessage(messageData: any) {
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    let crrTime = `${hours}:${minute}`;
    let value = messageData.target.value;
    let msgData = {
      body: value, time: crrTime, me: true
    }

    this.conversationEvent.messages.unshift(msgData)
    this.conversationEvent.message = value;
    messageData.target.value = '';
    this.isSendEnable = false;

  }
}
