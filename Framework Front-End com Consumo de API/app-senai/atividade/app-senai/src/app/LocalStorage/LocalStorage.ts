import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';


class LocalStorage implements Storage {

    [name: string]: any;
    readonly length: number = 0;
    clear(): void { }
    getItem(key: string): string | null { return null; }
    key(index: number): string | null { return null; }
    removeItem(key: string): void { }
    setItem(key: string, value: string): void { }

}


@Injectable({
    providedIn: 'root'
})

export class LocalstorageService implements Storage {

    private storage: Storage;

    constructor() {

        //eu uso minha implementação do armazenamento local
        this.storage = new LocalStorage();

        //depois eu verifico se a aplicação está rodando
        //no lado do servidor ou do browser
        AppComponent.isBrowser.subscribe(isBrowser => {
            //se for do browser
            //uso a implementação padrão do armazenamento local pois ela está disponível
            //se for do lado do servidor continuo usando o meu armazenamento
            //pois o localStorage padrão não está disponível
            if (isBrowser) {
                this.storage = localStorage;
            }
        });
    }

    [name: string]: any;

    length: number =0;

    clear(): void {
        this.storage.clear();
    }

    getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    key(index: number): string | null {
        return this.storage.key(index);
    }

    removeItem(key: string): void {
        return this.storage.removeItem(key);
    }

    setItem(key: string, value: string): void {
        return this.storage.setItem(key, value);
    }
}