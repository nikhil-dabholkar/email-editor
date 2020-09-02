import { Component, OnInit } from '@angular/core';
import {
  IpEmailBuilderService,
  IPDefaultEmail,
  Structure,
  TextBlock,
  ImageBlock
} from 'ip-email-builder';
import { BehaviorSubject } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: BehaviorSubject<boolean>;
 
  constructor(private _ngb: IpEmailBuilderService) {
    this.isLoading = _ngb.isLoading;
  }
 
  sendTestMail() {
    const to = prompt('Where to send?');
    if (!to) {
      return;
    }
    debugger;
    this._ngb.sendTestEmail({ to });
  }
 
  ngOnInit() {
    this._ngb.Email = new IPDefaultEmail({
      structures: [
        new Structure('cols_1', [
          [
            new TextBlock(
              `<p class="ql-align-center">This text and Image are injected from <strong>Root Module</strong>.
              It's an example of dynamic Email, which allow you to create many awesome things, like Newsletter!</p>`,
              {
                lineHeight: {
                  value: 22,
                  unit: 'px'
                }
              }
            ),
            new TextBlock(
              `<h2 class="ql-align-center">It looks like this!</h2>`
            ),
            new ImageBlock(
              'https://image.ibb.co/iXV3S9/Screen_Shot_2018_09_14_at_17_15_38.png'
            )
          ]
        ])
      ]
    });
  }
}