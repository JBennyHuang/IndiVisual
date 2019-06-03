/**
 * @function getQueryResponse(...) formats the response of a query which reads from the db
 * 
 * @param {err}     : error thrown by the request to the database
 * @param {qres}    : the results from the query
 * 
 * @returns {JSON}  : { success: , message: }
 */
function getQueryResponse(err, qres) {
    let response;

    // if there is an error, just throw the error in the response
    if (err) {
        response = {
            success: false,
            message: err
        }
    }

    // if there is an actual response, and it is not empty, show the query results
    else if (qres && qres.rows && qres.rows.length) {
        response = {
            success: true,
            message: qres.rows
        }
    }
    else {
        response = {
            success: false,
            message: 'No results'
        }
    }
    return response;
}

/**
 * @function postQueryResponse(...) formats the response of a query which writes to the db
 * 
 * @param {err}     : error thrown by the request to the database
 * @param {qres}    : the results from the query
 * 
 * @returns {JSON}  : { success: , message: }
 */
function postQueryResponse(err, qres) {
    let response;

    // if there is an error, just throw the error in the response
    if (err) {
        response = {
            success: false,
            message: err
        }
    }

    else {
        response = {
            success: true,
            message: qres.rows
        }
    }
    return response;
}

/**
 * @function putQueryResponse(...) formats the response of a query which updates the db
 * 
 * @param {err}     : error thrown by the request to the database
 * @param {qres}    : the results from the query
 * 
 * @returns {JSON}  : { success: , message: }
 */
function putQueryResponse(err, qres) {
    let response;

    // if there is an error, just throw the error in the response
    if (err) {
        response = {
            success: false,
            message: err
        }
    }

    else {
        response = {
            success: true,
            message: qres.rows
        }
    }
    return response;
}

/**
 * @function deleteQueryResponse(...) formats the response of a query which deletes rows of the db
 * 
 * @param {err}     : error thrown by the request to the database
 * @param {qres}    : the results from the query
 * 
 * @returns {JSON}  : { success: , message: }
 */
function deleteQueryResponse(err, qres) {
    let response;

    // if there is an error, just throw the error in the response
    if (err) {
        response = {
            success: false,
            message: err
        }
    }

    else {
        response = {
            success: true,
            message: qres.rows
        }
    }
    return response;
}

module.exports = {
    getQueryResponse,
    postQueryResponse,
    putQueryResponse,
    deleteQueryResponse
}