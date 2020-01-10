/**
 * APIResponse.js
 *
 * A custom response.
 *
*/

module.exports = function APIResponse(error, pagination, data) {
  var req = this.req;
  var res = this.res;

  if (error === undefined) {
    return res.sendStatus(504);
  }

  if (error.type === 3) sails.log.error('[' + error.code + '] ' + error.message);
  if (error.type === 2) sails.log.warn('[' + error.code + '] ' + error.message);
  if (error.type === 1) sails.log.info('[' + error.code + '] ' + error.message);

  return res.json({
    error: error.error,
    code: error.code,
    message: "api.responses." + error.code,
    pagination: pagination,
    data: data
  });

};
