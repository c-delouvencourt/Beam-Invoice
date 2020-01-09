module.exports = {
  OK: {
    error: false,
    type: 0,
    code: ""
  },
  DB_ERROR: {
    error: true,
    type: 3,
    code: "E_DB_ERROR"
  },
  CANT_UPLOAD: {
    error: true,
    type: 3,
    code: "E_CANT_UPLOAD"
  },
  NO_PERMISSION: {
    error: true,
    type: 1,
    code: "E_NO_PERMISSION"
  },
  NO_PERMISSION_ADMIN: {
    error: true,
    type: 1,
    code: "E_NO_PERMISSION_ADMIN"
  },
  ROUTES_ERROR: {
    error: true,
    type: 3,
    code: "E_ROUTES_ERROR"
  },
  INVALID_REQUEST: {
    error: true,
    type: 1,
    code: "E_INVALID_REQUEST"
  },
  IP_RESTRICTION: {
    error: true,
    type: 1,
    code: "E_ALREADY_REQUESTED_IP"
  },
};
