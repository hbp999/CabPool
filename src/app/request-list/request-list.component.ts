// request-list.component.ts
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: any[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requests = this.requestService.getRequests();
  }

  acceptRequest(index: number) {
    this.requestService.updateRequestStatus(index, 'Accepted');
  }
}
