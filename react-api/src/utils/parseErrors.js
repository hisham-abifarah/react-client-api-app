 // util to return only message from error object return on save of user
  // npm install lodash

import _ from "lodash";

export default function(errors) {
  const result = {};
  _.forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  return result;
}