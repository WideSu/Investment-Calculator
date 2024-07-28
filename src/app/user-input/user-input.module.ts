import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [UserInputComponent],
    imports: [FormsModule],
    exports: [UserInputComponent]// very imp, else app.component won't see user-input.module
})
export class UserInputModule {}