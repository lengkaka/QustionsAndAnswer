const appId = 'h9j63Hk6qGOGqkUp5WvUtuyu-gzGzoHsz';
const appKey = 'LOstA23bt7BgiaSo156nyeS0';
AV.init({ appId, appKey });

AV.addItem = (item) => {
    console.log('调用了addItem');
}

AV.addItems = (items) => {
    console.log('调用了addItems');
}