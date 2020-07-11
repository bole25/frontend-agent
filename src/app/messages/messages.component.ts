import { Component, OnInit } from '@angular/core';
import {Message} from '../model/Message';
import {MessagesService} from './messages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Set<Message>;
  showAnswer: boolean;
  answer: Message;
  constructor(private service: MessagesService, private router: Router) {
    this.messages = new Set<Message>();
    this.showAnswer = false;
    this.answer = new Message();
  }

  ngOnInit(): void {
    this.service.getMessages().subscribe(data => {this.messages = data; });
  }

  startReply(sender: string, receiver: string) {
    this.showAnswer = true;
    this.answer.senderUsername = sender;
    this.answer.receiverUsername = receiver;
  }

  sendMessage() {
    this.service.sendMessage(this.answer).subscribe(result => { alert('Message sent to: ' + this.answer.receiverUsername);
                                                                this.answer = new Message();
                                                                this.showAnswer = false;
    });
  }
}
