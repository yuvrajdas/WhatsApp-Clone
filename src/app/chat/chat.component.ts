import { Component, ElementRef, Input, ViewChild, } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @ViewChild('audioContainerRef') audioContainerRef:ElementRef<HTMLDivElement>

  @Input() conversationEvent!: any;
  isSendEnable = false;
  isEmojiPickerEnable: boolean = false;
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
  // Concatinating emojin into input field message
  addEmoji(event: any) {
    this.isSendEnable = true;
    console.log(event.emoji.native);
    this.msgText += event.emoji.native;
  }



  // listening voice message
   recorder:any;
  voiceMsgUrl = '';
  listening() {

    console.log('listening....');

    let audioChunks: any[] = [];
    let device = navigator.mediaDevices.getUserMedia({ audio: true })
    device.then((mediastrem) => {
      this.recorder = new MediaRecorder(mediastrem);

      this.recorder.ondataavailable = (audio: any) => {
        console.log("available data", audio);
        audioChunks.push(audio.data);
        if (this.recorder.state == 'inactive') {
          console.log("inactive", audio);
          let blob = new Blob(audioChunks, { type: 'audio/webm' });
          this.voiceMsgUrl = window.URL.createObjectURL(blob);
          // let msgData = {
          //   body: '', time:'', me: true,voiceUrl:this.voiceMsgUrl
          // }
          // console.log(msgData);
          // this.conversationEvent.messages.unshift(msgData)

 console.log(this.voiceMsgUrl);

 console.log(this.audioContainerRef.nativeElement)

        this.audioContainerRef.nativeElement.innerHTML = `<audio src=${this.voiceMsgUrl} type="audio/webm" controls="true"></audio>`;
        }
      }
      this.recorder.start(1000);
    })
  }
  stopListening() {
    this.recorder.stop();
    // console.log("audio URL", this.voiceMsgUrl);
    // let msgData = {
    //   body: '', time:'', me: true,voiceUrl:this.voiceMsgUrl
    // }
    // console.log(msgData);
    // this.conversationEvent.messages.unshift(msgData)
  }
  // Sending message to the socket server
  sendMessage() {
    console.log('send msg function');

    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    let crrTime = `${hours}:${minute}`;
    let value = this.msgText;
    value = value.split(' ').join('');
    if (value === '') {
      return;
    }
    let msgData = {
      body: value, time: crrTime, me: true,voiceUrl:this.voiceMsgUrl
    }
    console.log(msgData);

    this.conversationEvent.messages.unshift(msgData)
    this.conversationEvent.message = value;
    this.msgText = '';
    this.isSendEnable = false;
    this.isEmojiPickerEnable = false;
  }
}
