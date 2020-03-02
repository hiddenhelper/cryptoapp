import {Component, OnInit, Input} from '@angular/core';
@Component({
 selector: 'app-list-card',
 templateUrl: './list-card.component.html',
 styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent {
 @Input() coin;
 @Input() fiat;
}