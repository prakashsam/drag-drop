import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgxSelectoModule } from "ngx-selecto";
import { NgxMoveableModule } from "ngx-moveable";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxSelectoModule, NgxMoveableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}