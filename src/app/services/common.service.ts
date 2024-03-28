import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
    getBaseURL(): string {
        let url_server = '';
        if (environment.production) {
            // url_server = "http://" + window.location.hostname + ":" + environment.apiPort;
        } else {
            // url_server = environment.apiUrl + ":" + environment.apiPort;
        }
        return url_server;
    }
}
