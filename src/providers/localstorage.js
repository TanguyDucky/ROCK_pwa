const uuidv4 = require('uuid/v4');

/**
 * Read the previously stored UUID or generate a new one if none exists
 */
export function getUUID() {
  let uuid = localStorage.getItem('uuid');
  if (!uuid) {
    uuid = uuidv4();
    localStorage.setItem('uuid', uuid);
  }
  return { uuid };
}
