const {errorMessage} = require('../utils/CatchError');
const dataRoute = require('../route/data');

module.exports = (app) => {
    
    app.use('/api/data', dataRoute)

    app.use(errorMessage);
};