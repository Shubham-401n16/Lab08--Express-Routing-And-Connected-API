'use strict';

class Model {
    constructor(schema){
    this.schema = schema;
    }

    async create (record) {
        let newRecord = await this.schema(record);
        return newRecord.save();
    }
    async read (_id) {
        let record = await this.schema.findOne({_id});
        return record;
    }

    async readByQuery (query) {
        let results = await this.schema.find(query);
        return results;
    }
    async update (id, record) {
        let result = await this.schema.findByIdAndUpdate(_id, record, { new: true });// new :true returns back a single record
        return result;
    }
    async delete (id) {
        let record = await this.schema.findByIdAndDelete(_id);
        return record;
    }
}

module.exports = Model;