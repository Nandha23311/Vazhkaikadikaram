var saveUser = require('./controller/SaveController.js')

module.exports = function (router) {
    router.post('/api/funapp/saveuser', saveUser.newSave);
    router.get('/api/funapp/home', saveUser.home);
    router.get('/api/funapp/login', saveUser.login)
    router.post('/api/funapp/moblogin', saveUser.view)
    router.post('/api/funapp/view', saveUser.view)


    router.get('/', saveUser.home);
    router.post('/s', saveUser.newSave);
    router.post('/view', saveUser.view)
}
