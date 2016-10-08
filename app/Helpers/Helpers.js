
'use strict';
class Helpers {
    /**
     * get json and return correct json object
     * @param status
     * @param json
     * @param error
     * @returns {{status: *, error: number, data: *}}
     * @constructor
     */

    JSONResponse(status, json, error = 0) {
        return  {
            "status": status,
            "error": error,
            "data": json
        }
    }
}
module.exports = Helpers;