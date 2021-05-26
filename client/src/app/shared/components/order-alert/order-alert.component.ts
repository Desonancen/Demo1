import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/admin/shared/services/alert.service';

@Component({
  selector: 'app-order-alert',
  templateUrl: './order-alert.component.html',
  styleUrls: ['./order-alert.component.scss']
})
export class OrderAlertComponent implements OnInit {

  @Input() delay = 5000

  public text: string
  public type = 'success'
  alertSub: Subscription

  constructor( private alerService: AlertService) { }

  ngOnInit() {
    this.alerService.alert$.subscribe( alert => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout( () => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }

  ngOnDestroy() {
    if (this.alertSub) {
        this.alertSub.unsubscribe()
    }
  }

}
