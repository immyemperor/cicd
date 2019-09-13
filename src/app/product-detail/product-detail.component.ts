import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product_details={
      "product_id":"gsdjghsdjf",
      "product_type":"phone",
      "product_name":"abc",
      "description":"abc@gdhd.com",
      "associated_groups":["aaa","sssshjd","ghjsdg"],
      "groups_count":6,
      "branch_config":{
        "application_path":"http://www.application.com",
        "communication_path":"http://www.communication.com"
      },
      "product_picture":"https://ss7.vzw.com/is/image/VerizonWireless/iPhoneX-Svr?$device-lg$",
    }
  constructor() { }

  ngOnInit() {
  }

}