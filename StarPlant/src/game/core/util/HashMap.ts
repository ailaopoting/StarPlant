/**
* hashmap实现
*/
class HashMap {
    public size: number;
    private keys: Array<any>;
    private values: Array<any>;
    constructor() {
        this.keys = new Array<any>();
        this.values = new Array<any>();
    }

    public clear(): void {
        while(this.keys.length > 0) {
            this.keys.pop();
        }
        while(this.values.length > 0) {
            this.values.pop();
        }
        this.updateSize();
    }

    public delete(key: any): boolean {
        var result: boolean = false;
        var index = this.keys.indexOf(key);
        if(index != -1) {
            this.keys.splice(index);
            this.values.splice(index);
            this.updateSize();
            result = true;
        }
        return result;
    }


    public forEach(callbackfn: (value: any,key: any,map: HashMap) => void,thisArg?: any): void {
        var i: number = 0;
        for(i = 0;i < this.size;i++) {
            callbackfn.call(thisArg,this.values[i],this.keys[i],this);
        }
    }

    public get(key: any): any {
        var result: any = null;
        var index = this.keys.indexOf(key);
        if(index != -1) {
            result = this.values[index];
        }
        return result;
    }

    public has(key: any): boolean {
        var index = this.keys.indexOf(key);
        return index != -1;
    }

    public add(key: any,value: any): void {
        this.keys.push(key);
        this.values.push(value);
        this.updateSize();
    }

    private updateSize(): void {
        this.size = this.keys.length;
    }

}

