
class Repository {
  constructor(Model) {
    this.model = Model;
    this.q = this.model.query();
  }

  /**
   * Khởi tạo query.
   * @returns {Repository}
   */
  query() {
    this.q = this.model.query();
    return this;
  }

  /**
   * create function.
   * @param data
   * @returns {Promise<*>}
   */
  async create({ data }) {
    try {
      return await this.model.query().insert(data);
    } catch (e) {
      throw e;
    }
  }

  /**
   * updateById function.
   * @param id
   * @param dataUpdate
   * @returns {Promise<void>}
   */
  async updateById({ id, dataUpdate = {} }) {
    try {
      return await this.model.query()
        .where('id', id)
        .update(dataUpdate);
    } catch (e) {
      throw e;
    }
  }

  /**
   * updateAndFetchById function.
   * @param id
   * @param dataUpdate
   * @returns {Promise<*|QM>}
   */
  async updateAndFetchById({ id, dataUpdate = {} }) {
    try {
      return await this.model.query()
        .updateAndFetchById(id, dataUpdate);
    } catch (e) {
      throw e;
    }
  }

  /**
   * deleteById function.
   * @param id
   * @returns {Promise<QM extends Objection.Model>}
   */
  async deleteById({ id }) {
    try {
      return await this.model.query()
        .where('id', id)
        .delete();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   *
   * @param id
   * @param column
   * @returns {Promise<*|QM>}
   */
  async findById({ id, column = '*' }) {
    try {
      return await this.model.query()
        .column(column).findById(id);
    } catch (e) {
      throw e;
    }
  }

  /**
   * getByIds function.
   * @param ids
   * @param limit
   * @param page
   * @param column
   * @returns {Promise<void>}
   */
  async getByIds({ ids, limit = -1, page = 0, column= '*' }) {
    try {
      const query = this.model.query()
        .column(column)
        .whereIn('id', ids);

      if(limit === -1) {
        return await query;
      }

      return (await query.page(page, limit)).results;
    } catch (e) {
      throw e;
    }
  }

  /**
   *
   * @param column
   * @param clause
   * @param value
   * @returns {*|Query|Objection.QueryBuilder<QM extends Objection.Model, RM, RV>}
   */
  where(column, clause = '=', value) {
    if(typeof column === 'function') {
      this.q = this.q.where(column);
    } else if(value) {
      this.q = this.q.where(column, clause, value);
    } else {
      this.q = this.q.where(column, clause);
    }
    return this;
  }

  /**
   * orWhere function.
   * @param column
   * @param clause
   * @param value
   * @returns {Repository}
   */
  orWhere(column, clause = '=', value) {
    console.log(typeof column);
    if(typeof column === 'function') {
      this.q = this.q.orWhere(column);
    } else if(value) {
      this.q = this.q.orWhere(column, clause, value);
    } else {
      this.q = this.q.orWhere(column, clause);
    }

    return this;
  }

  /**
   *
   * @param column
   * @param value
   * @returns {*|void|Objection.QueryBuilder<QM extends Objection.Model, RM, RV>}
   */
  whereIn(column, value) {
    this.q = this.q.whereIn(column, value);
    return this;
  }

  /**
   * whereNotIn function.
   * @param column
   * @param value
   * @returns {Repository}
   */
  whereNotIn(column, value) {
    this.q = this.q.whereNotIn(column, value);
    return this;
  }

  /**
   * whereNotNull function.
   * @param column
   * @returns {Repository}
   */
  whereNotNull(column) {
    this.q = this.q.whereNotNull(column);
    return this;
  }

  /**
   *
   * @param relation
   * @returns {*}
   */
  eager(relation) {
    this.q = this.q.eager(relation);
    return this;
  }

  /**
   * orderBy function.
   * @param column
   * @param order
   * @returns {*}
   */
  orderBy(column, order) {
    try {
      this.q = this.q.orderBy(column, order);
      return this;
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * orderByRaw function.
   * @param rawQuery
   * @returns {Repository}
   */
  orderByRaw(rawQuery) {
    this.q = this.q.orderByRaw(rawQuery);
    return this;
  }

  /**
   * column function.
   * @param columns
   * @returns {Repository}
   */
  column(columns = '*') {
    this.q = this.q.column(columns);
    return this;
  }

  /**
   * del function.
   * @returns {Promise<*>}
   */
  async del() {
    try {
      return await this.q.delete();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * update function.
   * @param data
   * @returns {Promise<*>}
   */
  async update(data = {}) {
    try {
      return await this.q.update(data);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * first function.
   * @returns {Promise<*>}
   */
  async first() {
    try {
      return await this.q.first();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * limit function.
   * @param limit
   * @returns {Promise<*>}
   */
  async limit(limit) {
    return await this.q.limit(limit);
  }

  /**
   * last function.
   * @returns {Promise<*>}
   */
  async last() {
    try {
      return await this.qlast();
    } catch (e) {
      console.log(e);
    }
  }

  /**
   *
   * @returns {Promise<*>}
   */
  async getData({ page = 0, limit = -1 }){
    try {

      if(limit === -1) {
        return await this.q;
      }

      return (await this.q.page(page, limit)).results;
    } catch (e) {
      console.log(e);
    }
  }

}
module.exports = Repository;