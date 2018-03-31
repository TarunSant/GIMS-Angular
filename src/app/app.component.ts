import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  links = [ '01 Initiation', 
            '02 Questionnaire', 
            '03 Forms', 
            '04 Documents Upload', 
            '05 Application Life Cycle'
          ];
}
