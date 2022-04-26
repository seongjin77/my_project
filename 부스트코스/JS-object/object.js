var memberArray = ['egoing', 'graphittie', 'leezhce'];

var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
};

memberObject.designer = 'leezche';
console.log('디자이너', memberObject.designer);
console.log('디자이너', memberObject['designer']);
delete memberObject.manager
console.log('매니저', memberObject.manager);
