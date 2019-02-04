import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Unidade} from './unidade.model';

@Injectable({
    providedIn: 'root'
})
export class UnidadesService implements Resolve<any> {
    unidades: any[];
    onUnidadesChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onUnidadesChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise
                .all([this.getUnidades()])
                .then(() => {
                    resolve();
                }, reject);
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getUnidades(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/e-commerce-products')
                .subscribe((response: any) => {
                    this.unidades = response;
                    this.onUnidadesChanged.next(this.unidades);
                    resolve(response);
                }, reject);
        });
    }
}
