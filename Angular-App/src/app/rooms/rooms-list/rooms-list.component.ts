import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
@Input() rooms:RoomList[]=[];
@Output() roomSelected = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit(): void {
  }
  selectRoom(room:RoomList){
  this.roomSelected.emit(room)
  }

}
