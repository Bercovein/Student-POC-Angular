import { Component } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
}
