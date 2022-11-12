import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

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

roomList:RoomList[] = [ {
  roomNumber:1,
  roomType : 'Deluxe Room',
    amenities : 'Air conditioner, Free Wifi, Kitchen , TV',
    price : 180,
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fhotel-room&psig=AOvVaw1AQtco82I437QnSxdeecDH&ust=1668281962372000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCJoeDwpvsCFQAAAAAdAAAAABAE',
    checkinTime : new Date('11 Nov-2021'),
    checkOutTime  : new Date('11 Nov-2021'),
    rating:7.5
},{
  roomNumber:2,
  roomType : 'President Room',
    amenities : 'Air conditioner, Free Wifi, Kitchen , TV, Servant Room, Chef , Security' ,
    price : 8000,
    photo : 'https://img.etimg.com/thumb/msid-64734932,width-640,resizemode-4/industry/services/hotels-/-restaurants/inside-indias-ultra-luxurious-suites/suite-yourself.jpg',
    checkinTime : new Date('21 June-2021'),
    checkOutTime  : new Date('29 June-2021'),
    rating:9.9
},{
  roomNumber:3,
  roomType : 'UlTra Deluxe Room',
  amenities : 'Air conditioner, Free Wifi, Kitchen , TV, Servant Room' ,
  price : 300,
  photo : 'https://cf.bstatic.com/images/hotel/840x460/235/235521193.jpg',
  checkinTime : new Date('14 Jan-2021'),
  checkOutTime  : new Date('18 Jan-2021'),
  rating:4.5
}]
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
