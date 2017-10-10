import {Injectable} from '@angular/core';
import {ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response,
  Http, Headers} from '@angular/http';

@Injectable()
export class CustomHttp extends Http {

}

export let customHttpProvider = {};
