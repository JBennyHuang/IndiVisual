/**
 * @function getQueryFormat(...) transforms a key-value dictionary into a valid SQL Query for GET requests
 * 
 * @param {JSON} queryParams    : a dictionary where keys are column names and values are entries of the columns
 * @param {string} table        : the table of the database
 * 
 * @returns {string}
 */
function getQueryFormat(queryParams, table) {
    
    // if no query parameters are given, there will be no WHERE clause in the query string
    if (!(queryParams && Object.keys(queryParams).length)) {
        return `SELECT * FROM ${table}`;
    }

    // otherwise, properly format the query string

    // Default string for joining SQL WHERE clauses
    const andString = ' AND ';

    const conditions = conditionFormat(queryParams, andString);
    return `SELECT * FROM ${table} WHERE ${conditions}`;
}

/**
 * @function postQueryFormat(...) transforms a key-value dictionary in a valid SQL Query for POST requests
 * 
 * @param {JSON} queryParams    : a dictionary where keys are column names and values are entries of the columns
 * @param {string} table        : the table of the database
 * 
 * @returns {string}
 */
function postQueryFormat(queryParams, table) {
    // columns and values are required, we do not want an empty row
    if (!(queryParams && Object.keys(queryParams).length)) return '';

    // columnArr and valueArr will contain the column names
    // and the corresponding values, respectively
    columnArr = [];
    valueArr = [];

    Object.keys(queryParams).forEach((key) => {
        columnArr.push(key);
        const value = queryParams[key];
        let valueString = '';
        if (isNaN(value)) {
            valueString = `'${value}'`;
        }
        else {
            valueString = `${value}`;
        }
        valueArr.push(valueString);
    });

    const [columns, values] = [columnArr.join(), valueArr.join()];
    return `INSERT INTO ${table} (${columns}) VALUES (${values}) RETURNING *`; 
}

/**
 * @function putQueryFormat(...) transforms two key-value dictionaries into an array where the first element 
 *      is a valid SET clause and the second is a valid WHERE clause
 * 
 * @param {JSON} queryParams    : dictionary containing the updates and conditions parameters
 * @param {string} table        : the table of the database
 * 
 * @returns {string}
 */
function putQueryFormat(queryParams, table) {
    // there must have parameters, otherwise we cannot update
    if (!(queryParams && Object.keys(queryParams).length)) return '';
    
    // otherwise, properly format the query string
    const [updateParams, conditionParams] = [queryParams.updates, queryParams.conditions];
    const andString = ' AND ';
    const updates = conditionFormat(updateParams, undefined);
    const conditions = conditionFormat(conditionParams, andString);
    return `UPDATE ${table} SET ${updates} WHERE ${conditions} RETURNING *`;
}

/**
 * @function deleteQueryFormat(...) transforms a key-value dictionary into a valid SQL WHERE clause for DELETE requests
 * 
 * @param {JSON} queryParams    : a dictionary where keys are column names and values are entries of the columns
 * @param {string} table        : the table of the database
 * 
 * @returns {string}
 */
function deleteQueryFormat(queryParams, table) {
    // there must have parameters, otherwise we cannot delete
    if (!(queryParams && Object.keys(queryParams).length)) return '';

    // otherwise, properly format the query string

    // Default string for joining SQL WHERE clauses
    const andString = ' AND ';

    const conditions = conditionFormat(queryParams, andString);
    return `DELETE FROM ${table} WHERE ${conditions} RETURNING *`;
}

// private functions

/**
 * 
 * @param {JSON} queryParams 
 * @param {string} relationString 
 * 
 * @returns {string}
 */
function conditionFormat(queryParams, relationString) {
    conditionArr = [];
    Object.keys(queryParams).forEach((key) => {
        const value = queryParams[key];
        let conditionString = '';

        // determine whether value should be a string or an int
        if (isNaN(value)) {
            conditionString = `${key} = '${value}'`;
        }
        else {
            conditionString = `${key} = ${value}`;
        }

        // push each condition onto the condition array
        conditionArr.push(conditionString);
    });

    // join the conditions given their relationships
    return conditionArr.join(relationString);
}


// functions that will be exported for public use
module.exports = {
    getQueryFormat,
    postQueryFormat,
    putQueryFormat,
    deleteQueryFormat
};
