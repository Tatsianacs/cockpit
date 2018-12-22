import {Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated //Native, None
})

export class ServerElementComponent implements OnInit, OnChanges {
    @Input('srvElement') element: { type: string, name: string, content: string };
    @ViewChild('heading') header: ElementRef;
    @ContentChild('contentParagraph') paragraph: ElementRef;

    constructor() {
        console.log('constructor called');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('onchanges called');
        console.log(changes);
    }

    ngOnInit() {
        console.log('init called');
    }

}
