import { Component, OnInit } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
rooms:Room = {
  totalRooms:20,
  availableRooms: 10,
  bookedRooms:5
}
hotelName = "Taj Hotel";
noOfRooms = 10;
hideRooms:boolean=true;
toggle(){
  this.hideRooms = false
  // console.log('on click')
}
  constructor() { }

  ngOnInit(): void {
  }

}
