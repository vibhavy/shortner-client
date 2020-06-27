import config from './Config';

/**
 * 
 * @param {String} path : api path
 * @param {String} payload : post data
 */
export async function postData(path, payload = null, method = 'POST') {
    try {
        let res = await fetch(`${config.apiPath}${path}`, {
            method: method,
            body: JSON.stringify(payload), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        return res.json();
    } catch (err) {
        return;
    }
}

/**
 * 
 * @param {String} path : api path
 */
export async function getData(path) {
    try {
        let res = await fetch(`${config.apiPath}${path}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        return res.json();
    } catch (err) {
        return;
    }
}

/**
 * 
 * @param {String} str 
 */
export function isUrl(str){
    let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str))
        return true;
    else
        return false;
}

/**
 * 
 * @param {*} key : value of the key from the path
 */
export function urlParam(key = null) {
    let pathName = window.location.pathname;
    let value = pathName.split('/');

    // if key is not null
    if(!key)
        return value;
    else
        return value[key];
}


