import {
    HttpHeaders
} from '@angular/common/http';

import {
    apiHost
} from '../../constants';

const defaultOptions = {
    showError: true,
    loadingStart: false,
    loadingEnd: false,
    throwError: false,
    message: '',
    errorMessage: '',
    cache: false,
    saveInCache: false,
    headers: null
};

function buildParams( prefix, obj, add ) {
    var name;
    if ( Array.isArray( obj ) ) {
        // Serialize array item.
        obj.forEach( function( v, i ) {
            if ( prefix.endsWith("[]") ) {
                // Treat each array item as a scalar.
                add( prefix, v );
            } else {
                // Item is non-scalar (array or object), encode its numeric index.
                buildParams(
                    prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                    v,
                    add
                );
            }
        } );
    } else if ( typeof obj === "object" && obj ) {
        // Serialize object item.
        for ( name in obj ) {
            buildParams( prefix + "[" + name + "]", obj[ name ], add );
        }
    } else {
        // Serialize scalar item.
        add( prefix, obj );
    }
}
function toParamStr ( a ) {
    var prefix,
        s = [],
        add = function( key, valueOrFunction ) {
            // If value is a function, invoke it and use its return value
            var value = typeof valueOrFunction === "function" ?
                valueOrFunction() :
                valueOrFunction;
            s[ s.length ] = encodeURIComponent( key ) + "=" +
                encodeURIComponent( value == null ? "" : value );
        };
    if ( a == null ) {
        return "";
    }
    // encode params recursively.
    for ( prefix in a ) {
        buildParams( prefix, a[ prefix ], add );
    }
    // Return the resulting serialization
    return s.join( "&" );
};

function addParamsToUrl(url, params) {
    if (!params) return url;
    const paramsStr = toParamStr(params);
    if (paramsStr) url += url.includes("?") ? "&" + paramsStr : "?" + paramsStr;
    return url;
}

export var UtilsHttp = {
    initHttpUtils: function() {
        this.apiHost = apiHost + "/rest/1/db/collections/";
    },

    headers: {
        "Content-Type": "application/json"
    },
    apiHost: "",
    cache: {},

    getOptions: function(options, extraOptions: any = {}) {
        if (options.loading) {
            options.loadingStart = true;
            options.loadingEnd = true;
        } else if(options.loading === false) {
            options.loadingStart = false;
            options.loadingEnd = false;
        }
        return {
            ...defaultOptions,
            ...options,
            ...extraOptions
        };
    },

    setHeaders: function(headers) {
        this.headers = headers;
    },

    setHost: function(host) {
        this.apiHost = host;
    },

    getHost: function(): string {
        return this.apiHost;
    },

    getApiUrl: function(url) {
        return (url.startsWith("http://") || url.startsWith("https://")) ? url : this.apiHost + url;
    },
  
    getHeaders: function(options?: {headers: any, clearContentType?: boolean, noExtend?: boolean}) {
        let headers = options.noExtend ? {...options.headers} : {...this.headers, ...options.headers};
        if (options.clearContentType) delete headers['Content-Type'];

        return {
            headers: new HttpHeaders(headers)
        };
    },

    addHeaders: function(headers) {
        this.headers = {
            ...this.headers,
            ...headers
        };
    },

    post: async function(url, body, options: any = {}) {
        options = this.getOptions(options);

        try {
            if (options.loadingStart) await this.showLoading();
            url = addParamsToUrl(url, options.params);
            let res: any = await this.http.post(this.getApiUrl(url), body, this.getHeaders(options)).toPromise();

            if (options.loadingEnd) await this.dismissLoading();
            if (options.message) await this.toast(options.message);

            return res;
        } catch (e) {
            console.log(e);
            await this.errorCatch(e, options);
            return undefined;
        }
    },

    put: async function(url, body, options: any = {}) {
        options = this.getOptions(options);

        try {
            if (options.loadingStart) await this.showLoading();
            url = addParamsToUrl(url, options.params);
            let res: any = await this.http.put(this.getApiUrl(url), body, this.getHeaders(options)).toPromise();

            if (options.loadingEnd) await this.dismissLoading();
            if (options.message) await this.toast(options.message);

            return res;
        } catch (e) {
            await this.errorCatch(e, options);
            return undefined;
        }
    },

    getCache: function(name) {
        return _.cloneDeep(this.cache[name]);
    },

    setCache: function(name, value) {
        this.cache[name] = _.cloneDeep(value);
    },

    get: async function(url, options: any = {}) {
        try {
            options = this.getOptions(options);

            let cacheName = 'GET: ' + url;

            if (options.cache) {
                let cacheData = this.getCache(cacheName);
                if (cacheData) return cacheData;
            }

            if (options.loadingStart) await this.showLoading();

            url = addParamsToUrl(url, options.params);
            let res: any = await this.http.get(this.getApiUrl(url), this.getHeaders(options)).toPromise();

            if (options.cache || options.saveInCache) {
                this.setCache(cacheName, res);
            }

            if (options.loadingEnd) await this.dismissLoading();
            if (options.message) await this.toast(options.message);

            return res;
        } catch (e) {
            await this.errorCatch(e, options);
            return undefined;
        }
    },

    delete: async function(url, options: any = {}) {
        try {
            options = this.getOptions(options);
            if (options.loadingStart) await this.showLoading();
            url = addParamsToUrl(url, options.params);

            const res = await this.http.delete(this.getApiUrl(url), this.getHeaders(options)).toPromise();

            if (options.loadingEnd) await this.dismissLoading();
            if (options.message) await this.toast(options.message);

            return res;
        } catch (e) {
            await this.errorCatch(e, options);
            return undefined;
        }
    },

    getFileBase64Data: function(base64Data) {
        return this.isDataURL(base64Data) ? this.dataURLtoBase64(base64Data) : base64Data
    },

    saveFile: function(data, fileName) {
        if (data.length || data.size) {
            const blob = data instanceof Blob ? new Blob([data]) : this.convertBase64ToBlob(data);
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        } else {
            console.log('No data');
        }
    },

    saveTextFile: function(text, fileName) {
        if (text.length) {
            const a = document.createElement('a');
            a.href = 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text);
            a.download = fileName;
            a.click();
            a.remove();
        } else {
            console.log('No data');
        }
    },
    
    sc: async function(scriptName, body, options: any = {}) {
        if (!scriptName.includes('.')) scriptName = "Settings." + scriptName;
        return await this.post(`${apiHost}/rest/1/code/${this.config.get(scriptName)}/exec`, body, options);
    },

};

export interface UtilsHttpInterface {
    /** internal */
    getCache(name: string): any;
    setCache(name: string, value): any;
    getFileBase64Data(base64Data: string): string;
    getOptions(options: {[key:string]: any}, extraOptions?: {[key:string]: any});
    /** common */
    setHeaders(headers: {[key:string]: string}): void;
    setHost(host: string): void;
    getHost(): string;
    getApiUrl(url: string): string;
    getHeaders(options?: {headers: any, clearContentType?: boolean, noExtend?: boolean}): {headers: HttpHeaders};
    addHeaders(headers: {[key:string]: string}): void;
    post(url: string, body, options?): Promise<any>;
    put(url: string, body, options?): Promise<any>;
    get(url: string, options?): Promise<any>;
    delete(url: string, options?): Promise<any>;
    saveFile(data: Blob|string, fileName: string): void;
    saveTextFile(text: string, fileName: string): void;
    sc(scriptName: string, body, options?): Promise<any>;
};
