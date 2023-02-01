import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor() { }
  selectedConversation!:any;
  searchValue!:string;
  @Output() conversationClicked:EventEmitter<any> = new EventEmitter();
  messagesData = [{
    id:1,
    name:"Priti Bhattacharya",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoRC2bHDtWEbeqp80D4xH6cZTVGkeg3qkwPwdOUYCUe3KqKnTOSClJn3dX6hKjryfM4c&usqp=CAU",
    time:"09:10 PM",
    message:"Hi, Good evening...",
    messageCount:"2",
    newMessage:true,
    messages:[
      {id:1, voiceUrl:'', body:'hello world', time:"09:10 PM",me:true},
      {id:2, voiceUrl:'', body:'Whats up dude...', time:"09:10 PM",me:true},
      {id:3, voiceUrl:'', body:'how are you', time:"09:10 PM",me:false},
      {id:4, voiceUrl:'', body:'I am fine thank you', time:"09:10 PM",me:true},
      {id:5, voiceUrl:'', body:'What are you doing', time:"09:10 PM",me:false},
      {id:6, voiceUrl:'', body:'In publishing and graphic design', time:"10:08 PM",me:false},
      {id:7, voiceUrl:'', body:'placeholder text commonly used to demonstrate', time:"01:10 PM",me:false},
      {id:8, voiceUrl:'', body:'I am fine thank you', time:"08:10 PM",me:true},
      {id:9, voiceUrl:'', body:'Whats up dude...', time:"09:10 PM",me:true},
      {id:10, voiceUrl:'', body:'how are you', time:"09:10 PM",me:false},
      {id:11, voiceUrl:'', body:'I am fine thank you', time:"09:10 PM",me:true},
      {id:12, voiceUrl:'', body:'placeholder text commonly used to demonstrate', time:"01:10 PM",me:false},
      {id:13, voiceUrl:'', body:'I am fine thank you', time:"08:10 PM",me:true},
      {id:14, voiceUrl:'', body:'What are you doing', time:"09:10 PM",me:false},
    ]
  },
  {
    id:2,
    name:"Rowdy Badshah",
    picture:"https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001508.jpg?w=240&dpr=2.6",
    time:"01:10 AM",
    message:"Nothing to say...",
    messageCount:"5",
    newMessage:false,
    messages:[
      {id:1, voiceUrl:'', body:'What are you doing', time:"09:10 PM",me:true},
      {id:2, voiceUrl:'', body:'Whats up dude...', time:"09:10 PM",me:true},
      {id:3, voiceUrl:'', body:'I am fine thank you', time:"09:10 PM",me:false},
      {id:4, voiceUrl:'', body:'how are you ', time:"09:10 PM",me:true},
      {id:5, voiceUrl:'', body:' hello world', time:"09:10 PM",me:false},
    ]
  },
  {
    id:3,
    name:"Geeta Basra",
    picture:"https://nettv4u.com/imagine/28-03-2017/geeta-basra.png",
    time:"yesterday",
    message:"Ok",
    messageCount:"9",
    newMessage:false
  },
  {
    id:4,
    name:"Yuvraj Singh",
    picture:"https://www.s-models.com/wp-content/uploads/2014/10/3I1A4218-web_arne-ross_smodels_fotobyklaudiatotphotography-13-250x250.jpg",
    time:"05:45 AM",
    message:"Looks Good let see",
    messageCount:"13",
    newMessage:true
  },
  {
    id:5,
    name:"Priti Bhattacharya",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoRC2bHDtWEbeqp80D4xH6cZTVGkeg3qkwPwdOUYCUe3KqKnTOSClJn3dX6hKjryfM4c&usqp=CAU",
    time:"yesterday",
    message:"Hi, Good evening...",
    messageCount:"1",
    newMessage:false
  },
  {
    id:6,
    name:"Sweta Pinjari",
    picture:"https://etimg.etb2bimg.com/authorthumb/479259675.cms?width=250&height=250",
    time:"09:10 PM",
    message:"Hi, whats'up dode ",
    messageCount:"2",
    newMessage:true
  },
  {
    id:7,
    name:"Rajat Kumar",
    picture:"https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001508.jpg?w=240&dpr=2.6",
    time:"09:10 PM",
    message:"Hi, Good evening...",
    messageCount:"1",
    newMessage:false,
  },
  {
    id:8,
    name:"Vijay Mishra",
    picture:"https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001508.jpg?w=240&dpr=2.6",
    time:"12:15 AM",
    message:"Hello, i am good ",
    messageCount:"3",
    newMessage:true
  },
  {
    id:9,
    name:"Pavan",
    picture:"https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001508.jpg?w=240&dpr=2.6",
    time:"09:50 AM",
    message:"Hi, Good evening...",
    messageCount:"15",
    newMessage:true,
  },
  {
    id:10,
    name:"Priti Bhattacharya",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoRC2bHDtWEbeqp80D4xH6cZTVGkeg3qkwPwdOUYCUe3KqKnTOSClJn3dX6hKjryfM4c&usqp=CAU",
    time:"05:10 PM",
    message:"Hi, Good evening...",
    messageCount:"6",
    newMessage:true
  },
  {
    id:11,
    name:"Vikash Kumar",
    picture:"https://play-lh.googleusercontent.com/DUEehH9uFzl48QauHSzWAOQdHC0PeW6fVw2dqyqJn5Ouspr2XSDFLyHJpGJUaqeEFMa6=rw-w250",
    time:"02:22 PM",
    message:"Hi, Good evening...",
    messageCount:"9",
    newMessage:false
  },
  {
    id:12,
    name:"Priti Bhattacharya",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoRC2bHDtWEbeqp80D4xH6cZTVGkeg3qkwPwdOUYCUe3KqKnTOSClJn3dX6hKjryfM4c&usqp=CAU",
    time:"12:10 AM",
    message:"kya kar rhe ho bhai",
    messageCount:"11",
    newMessage:true
  },
  {
    id:13,
    name:"Monika Devenagari",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoRC2bHDtWEbeqp80D4xH6cZTVGkeg3qkwPwdOUYCUe3KqKnTOSClJn3dX6hKjryfM4c&usqp=CAU",
    time:"08:10 PM",
    message:"How are you long time no see",
    messageCount:"19",
    newMessage:true
  },
  {
    id:14,
    name:"Priti Bhattacharya",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoRC2bHDtWEbeqp80D4xH6cZTVGkeg3qkwPwdOUYCUe3KqKnTOSClJn3dX6hKjryfM4c&usqp=CAU",
    time:"09:10 PM",
    message:"hello",
    messageCount:"13",
    newMessage:false
  }];

  selectedChat(conversation:any){
    this.selectedConversation = conversation;
    console.log(this.selectedConversation.id == conversation.id);
  }
get filteredCoversations(){
 return this.messagesData.filter((element)=>{
    return element.name.toLowerCase().includes(this.searchValue.toLowerCase()) || element.message.toLowerCase().includes(this.searchValue.toLowerCase());
  })
}
}
