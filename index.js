import { db, aql } from "db"

/**
 * ShareDB ArangoDB adapter, interface follow https://github.com/share/sharedb/blob/master/lib/db/memory.js
 */
export default class ShareDBArango {
  /**
   * @param {string} dbName - The DB this ShareDB instance connect to, per enterprise.
   * @constructor
   */
  constructor(dbName) {
    db.useDatabase(dbName);
  }

  /**
   * Persists an op and snapshot if it is for the next version.
   *
   * @param {string} collectionName - Name of documents collection
   * @param {string} id - Document ID
   * @param {Object} op - Operation. e.g.
   *   {
   *     CreateOp: {
   *       src: '24545654654646',
   *       seq: 1,
   *       v: 0,
   *       create: { type: 'http://sharejs.org/types/JSONv0', data: { ... } },
   *       m: { ts: 12333456456 }
   *     }
   *   }
   * @param {Object} snapshot - Fulltext. e.g.
   *   {
   *     id: '24545654654646',
   *     v: 0,
   *     type: 'http://sharejs.org/types/rich-text/v1',
   *     data: {
   *       ops: [ { 'insert' : 'some text' }, ... ],
   *     },
   *     m: { ctime: 12333456456, mtime: 12333456456 },
   *   }
   * @param {Object} options - Extra options. e.g. { metadata: Boolean // whether the commit include metadata or not }
   * @param {Function} callback - callback(err, succeeded)
   * @returns {void}
   */
  commit(collectionName, id, op, snapshot, options, callback) {
    // TODO(kehuang): To be implement
  }


  /**
   * Get the named document from the database.
   * A snapshot with a version of zero is returned if the docuemnt has never been created in the database.
   *
   * @param {string} collectionName - Name of documents collection
   * @param {string} id - Document ID
   * @param {Object} fields - TODO(kehuang): To be understand. So far only include one field called $submit
   *                          e.g. { $submit: Boolean }
   * @param {Object} options - Extra options. e.g. { metadata: Boolean // whether the commit include metadata or not }
   * @param {Function} callback - callback(err, snapshot)
   * @returns {void}
   */
  getSnapshot(collectionName, id, fields, options, callback) {
    // TODO(kehuang): To be implement
  }

  /**
   * Get operations between [from, to) noninclusively. (Ie, the range should contain start but not end).
   * If end is null, this function should return all operations from start onwards.
   * The operations that getOps returns don't need to have a version: field.
   * The version will be inferred from the parameters if it is missing.
   *
   * @param {string} collectionName - Name of documents collection
   * @param {string} id - Document ID
   * @param {Number} from - Start sequence number.
   * @param {Number} to - End sequence number.
   * @param {Object} options - Extra options. e.g. { metadata: Boolean // whether the commit include metadata or not }
   * @param {Function} callback - callback(error, [list of ops])
   * @returns {void}
   */
  getOps(collectionName, id, from, to, options, callback) {
    // TODO(kehuang): To be implement
  }

  /**
   * Query multiple documents specified by query.
   *
   * @param {string} collectionName - Name of documents collection
   * @param {Object} query - A descriptor of a database query with structure defined by the database adapter (ArangoDB)
   *                         Being pass through from ShareDBConnection.createFetchQuery
   * @param {Object} fields - TODO(kehuang): To be understand. So far only include one field called $submit.
   * @param {Object} options - Extra options. e.g. { metadata: Boolean // whether the commit include metadata or not }
   * @param {Function} callback - callback(error, snapshots, extra)
   * @returns {void}
   */
  query(collectionName, query, fields, options, callback) {
    // TODO(kehuang): To be implement
  }
}
