import { Component } from "@angular/core";
import { LocalNotifications } from "@ionic-native/local-notifications";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(private localNotifications: LocalNotifications) {}

  onClick() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: "Hallo Phil!",
      sound: null,
      data: { secret: 'I am your personal secret' }
    });

    // Schedule multiple notifications
    this.localNotifications.schedule([
      {
        id: 2,
        text: "Servus Leon",
        sound: null,
        data: { secret: 'I am your personal secret' }
      },
      {
        id: 3,
        title: "Hoi Nils",
        text: "Multi ILocalNotification 2",
        data: { secret: 'I am your personal secret' }
      }
    ]);

    // Schedule delayed notification
    this.localNotifications.schedule({
      text: "Sorry, ich bin zu spät!",
      trigger: { at: new Date(new Date().getTime() + 3600) },
      led: "FF0000",
      sound: null
    });
  }
}
