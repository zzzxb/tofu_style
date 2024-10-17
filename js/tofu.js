document.addEventListener('DOMContentLoaded', (event) => {
    autoTheme();
    fileElement();
})

function autoTheme() {
    let hours = new Date().getHours();
    theme(hours < 18 ? 'light' : 'dark');
}

function fileElement() {
    let tf = document.getElementsByClassName('tf_file');
    for (let i = 0; i < tf.length; i++) {
        let element = tf.item(i);
        let randomId = generateRandomID(6);
        element.innerHTML = '<label>' + element.innerHTML + '</label>'
            + '<input type="file" class="tf_upload_file" id="file_' + randomId + '" onchange="getFileName(\'' + randomId + '\')"/>'
            + '<span id="' + "file_s_" + randomId + '" style="color: orangered"></span>';
    }
}

function getFileName(id) {
    let fileInput = document.getElementById('file_' + id);
    document.getElementById('file_s_' + id).textContent = fileInput.files[0].name;
}

function themeIcon(name) {
    let isLight = name === 'light';
    let tt = document.getElementById('tf_theme');
    tt.innerHTML = '';
    let sun = '<svg onclick="theme(\'light\')" t="1729134926548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12718" width="32" height="32"><path d="M512.09375 783.40625c-148.21875 0-271.6875-123.46875-271.6875-271.6875S363.875 239.9375 512.09375 239.9375s271.6875 123.46875 271.6875 271.6875-123.46875 271.78125-271.6875 271.78125z m0-49.40625c123.46875 0 222.28125-98.8125 222.28125-222.28125S635.65625 289.34375 512.09375 289.34375 289.8125 388.15625 289.8125 511.71875s98.8125 222.28125 222.28125 222.28125zM487.4375 91.71875h49.40625v98.8125h-49.40625V91.71875z m0 741.09375h49.40625v98.8125h-49.40625V832.8125zM932 486.96875V536.375H833.1875v-49.40625H932z m-741 0V536.375H92.1875v-49.40625h98.8125z m602.71875-291.46875l34.59375 34.59375-69.1875 69.1875-34.59375-34.59375 69.1875-69.1875zM270.03125 719.1875l34.59375 34.59375-69.1875 69.09375-34.59375-34.59375 69.1875-69.09375z m558.28125 74.0625l-34.59375 34.59375-69.1875-69.1875 34.59375-34.59375 69.1875 69.1875zM304.625 269.5625l-34.59375 34.59375-74.0625-74.0625 34.59375-34.59375 74.0625 74.0625z" p-id="12719" fill="#ffffff"></path><path d="M517.71875 514.90625m-236.25 0a236.25 236.25 0 1 0 472.5 0 236.25 236.25 0 1 0-472.5 0Z" p-id="12720" fill="#ffffff"></path></svg>'
    let moon = '<svg onclick="theme(\'dark\')" t="1729134942956" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12901" width="32" height="32"><path d="M511.9 202.8h0.3c16.8 0 30.3-13.5 30.3-30.3V92.4C542.4 75.6 528.8 62 512 62s-30.4 13.6-30.4 30.4v80.1c0 16.8 13.5 30.3 30.3 30.3zM203.2 512c0-16.8-13.6-30.4-30.4-30.4H92.4C75.6 481.6 62 495.2 62 512s13.6 30.4 30.4 30.4h80.3c16.8 0 30.5-13.6 30.5-30.4zM931.6 481.6h-80.1c-16.8 0-30.4 13.6-30.4 30.4s13.6 30.4 30.4 30.4h80.1c16.8 0 30.4-13.6 30.4-30.4 0-16.8-13.6-30.4-30.4-30.4zM512.1 821.2h-0.3c-16.8 0-30.3 13.5-30.3 30.3v80.1c0 16.8 13.6 30.4 30.4 30.4 16.8 0 30.4-13.6 30.4-30.4v-80.1c0.1-16.8-13.4-30.3-30.2-30.3zM735.83 517.56c-11.88-7.07-26.86-5.94-37.51 2.64-24.79 19.9-54.76 30.37-86.53 30.37-76.44 0-138.74-62.24-138.74-138.81 0-31.59 10.37-61.3 29.78-86 8.58-10.75 9.52-25.74 2.36-37.63-7.07-11.88-20.74-18.11-34.31-15.56-55.05 9.9-105.38 38.95-141.76 81.95C292.36 397.99 272 453.44 272 510.4 272 643.65 380.39 752 513.48 752c57.12 0 112.64-20.46 156.28-57.52 43.07-36.59 72.11-87.32 81.72-142.68 2.45-13.58-3.87-27.16-15.65-34.24zM291.7 200.75c9.6 16.9 31.1 22.8 47.9 13.2 16.9-9.6 22.8-31.1 13.2-47.9-0.1-0.1-0.2-0.3-0.2-0.4l-17.6-30.5c-9.8-16.8-31.4-22.4-48.1-12.5-16.6 9.7-22.3 31-12.8 47.7l17.6 30.4zM809.6 373.35c6.2 0 12.3-1.7 17.7-4.8l60.7-35.5c16.9-9.6 22.7-31.1 13.1-48s-31.1-22.7-48-13.1c-0.2 0.1-0.4 0.2-0.6 0.4l-60.7 35.5c-16.8 9.8-22.4 31.3-12.7 48.1 6.4 10.8 17.9 17.5 30.5 17.4zM139.6 325.75l60 36.6c16.5 10.2 38.2 5.2 48.4-11.3 10.2-16.5 5.2-38.2-11.3-48.4-0.1-0.1-0.3-0.2-0.4-0.3l-60-36.7c-16.6-10.1-38.2-4.9-48.3 11.7s-5 38.3 11.6 48.4zM691.9 218.15c16.6 10.1 38.2 4.9 48.3-11.6l18.4-30c10.1-16.6 4.9-38.2-11.6-48.3s-38.2-4.9-48.3 11.6l-18.4 30c-10.2 16.5-5 38.1 11.6 48.3zM732.5 823.05c-9.3-17-30.7-23.2-47.7-13.9s-23.2 30.7-13.9 47.7c0.2 0.4 0.5 0.9 0.8 1.3l17.6 30.4c10.1 16.6 31.7 21.9 48.3 11.8 16.1-9.8 21.6-30.5 12.6-47l-17.7-30.3zM196.7 655.35l-60.7 35.4c-16.9 9.5-22.9 31-13.4 47.9s31 22.9 47.9 13.4c0.3-0.2 0.6-0.4 0.9-0.5l60.7-35.5c16.9-9.6 22.7-31.1 13.1-48s-31.1-22.7-48-13.1c-0.1 0.1-0.3 0.2-0.5 0.4zM884.4 698.15l-60-36.6c-16.5-10.2-38.2-5.2-48.4 11.3s-5.2 38.2 11.3 48.4c0.1 0.1 0.3 0.2 0.4 0.3l60 36.7c16.6 10.1 38.2 4.9 48.3-11.7s5-38.3-11.6-48.4zM331.5 805.45c-16.5-10.2-38.2-5-48.3 11.5l-18.5 30c-10.2 16.5-5 38.2 11.6 48.4s38.2 5 48.4-11.6l18.4-29.9c10.2-16.5 5-38.2-11.6-48.4 0.1 0 0.1 0 0 0z" p-id="12902" fill="#2c2c2c"></path></svg>'
    tt.innerHTML = isLight ? moon : sun;
}

function theme(name) {
    themeIcon(name)
    let isLight = name === 'light';
    let theme_color = isLight ? 'white' : 'black';
    let inverse_color = isLight ? 'black' : 'white';
    document.documentElement.style.setProperty('--txt-color', inverse_color);
    document.documentElement.style.setProperty('--hv-txt-color', theme_color);

    document.documentElement.style.setProperty('--border-color', inverse_color);
    document.documentElement.style.setProperty('--hv-border-color', theme_color);

    document.documentElement.style.setProperty('--bg-color', isLight ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)');
    document.documentElement.style.setProperty('--hv-bg-color', isLight ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)');

    document.documentElement.style.setProperty('--font-color', inverse_color);
    document.documentElement.style.setProperty('--hv-font-color', theme_color);
    document.documentElement.style.setProperty('--bg-image', isLight ? 'var(--bg-light)' : 'var(--bg-dark');
}

function createAlert(msg, isCenter) {
    let tc = isCenter ? 'text-align: center' : '';
    let tag = '<div class="tf_alert" style="' +
        tc +
        '"><div><svg onclick="clearAlert()" t="1729157559074"' +
        ' class="icon"' +
        ' viewBox="0 0' +
        ' 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4256" width="16" height="16"><path d="M953.107692 1024c-7.876923 0-15.753846-3.938462-23.630769-7.876923L468.676923 555.323077c-11.815385-11.815385-11.815385-31.507692 0-43.323077L933.415385 47.261538c11.815385-11.815385 31.507692-11.815385 43.323077 0s11.815385 31.507692 0 43.323077L535.630769 531.692308l441.107693 441.107692c11.815385 11.815385 11.815385 31.507692 0 43.323077-7.876923 3.938462-15.753846 7.876923-23.63077 7.876923z" fill="#d81e06" p-id="4257"></path><path d="M31.507692 1024c-7.876923 0-15.753846-3.938462-23.630769-7.876923-11.815385-11.815385-11.815385-31.507692 0-43.323077l441.107692-441.107692L7.876923 90.584615c-11.815385-11.815385-11.815385-31.507692 0-43.323077s31.507692-11.815385 43.323077 0L512 508.061538c11.815385 11.815385 11.815385 31.507692 0 43.323077L51.2 1016.123077c-3.938462 3.938462-11.815385 7.876923-19.692308 7.876923z" fill="#d81e06" p-id="4258"></path></svg>' +
        '<p>' + msg + '</p>' +
        '</div></div>'
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.innerHTML = bodyElement.innerHTML + tag;
}

function clearAlert() {
    let e = document.getElementsByClassName('tf_alert');
    for (let i = 0; i < e.length; i++) {
        let element = e.item(i);
        element.remove();
    }
}

function generateRandomID(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}