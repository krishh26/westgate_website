import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatServiceService } from 'src/app/services/chat-service/chat-service.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  loginUser: any;
  chatMessage : FormControl = new FormControl('');
  chatType : string = 'text'; // 'text', 'file', 'audio', 'video'
  chatList: any = [];

  constructor (
    private localStorageService: LocalStorageService,
    private chatServiceService : ChatServiceService
  ) {
    this.loginUser = this.localStorageService.getLogger();
  }

  ngOnInit(): void {
    this.getChatBetweenTwoUser();
  }

  // send support chat
  sendMessage() {
    if(!this.chatMessage.value) {
      return
    }

    const payload = {
      message : this.chatMessage.value,
      messageType : this.chatType,
      messageFor : 'Admin',
      senderId : this.loginUser.id
    }

    this.chatServiceService.createChat(payload).subscribe((response) => {
      console.log('response', response);
      this.getChatBetweenTwoUser();
      this.chatMessage.reset();
    });
  }

  // delete chat
  deleteChat() {

  }

  // get chat listing between to users
  getChatBetweenTwoUser() {
    this.chatList = [];
    this.chatServiceService.getChatBetweenTwoUser(this.loginUser.id).subscribe((response) => {
      console.log('response', response);
      this.chatList = response?.data?.reverse();
    }) ;
  }
}
