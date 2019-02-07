import { Component, OnInit } from '@angular/core';
declare var firebase;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  pending = new Array()
  allPending = new Array();
  constructor() {
    this.getAllpending().then((res: any) => {
      this.allPending = res
    })
  }

  ngOnInit() {
  }

  getAllpending() {
    return new Promise((pass, fail) => {
      firebase.database().ref("Tempuploads/").on('value', data => {
        var details = data.val();
        var keys = Object.keys(details)
        for (var x = 0; x < keys.length; x++) {
          var picUrl = details[keys[x]].downloadurl
          var picDesc = details[keys[x]].description
          var picName = details[keys[x]].name
          var uid = details[keys[x]].uid;
          var cat = details[keys[x]].category;
          var likes = 0;
          var location = details[keys[x]].location;
          var name1 = details[keys[x]].name1;
          var price = details[keys[x]].price;
          var com = details[keys[x]].comments

          firebase.database().ref("profiles/" + details[keys[x]].uid).on('value', profile => {
            let obj = {
              name: profile.val().name,
              email: profile.val().email,
              userPic: profile.val().downloadurl,
              picUrl: picUrl,
              picDesc: picDesc,
              picName: picName,
              user: uid,
              cat: cat,
              likes: likes,
              location: location,
              name1: name1,
              price: price,
              comments: com
            }
            this.pending.push(obj)
          })
        }
        pass(this.pending)
      })
    })
  }

  approve(i) {
    console.log(i);
  }

  decline() {

  }

}
