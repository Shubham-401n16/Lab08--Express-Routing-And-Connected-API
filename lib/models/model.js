'use strict';

class Model {
    constructor(schema){
    this.schema = schema;
    }

    async create (record) {
        try{

            let newRecord = await new this.schema(record);
            return newRecord.save();
        }catch(e){
            console.error('Cannot create',e)
        }
    }
    async read (_id) {
        try{
            let record = await this.schema.findOne({_id});
        return record;
        }catch(e){
            console.error('Cannot get records', e);
        }
    }

    async readByQuery (query) {
        try{
            let results = await this.schema.find(query);
        return results;
        }catch(e){
            console.error('Cannot get records', e);
        }
    }
    async update (_id, record) {
        try{

            let result = await this.schema.findByIdAndUpdate(_id, record, { new: true });// new :true returns back a single record
            return result;
        }catch(e){
            console.error('Cannot update record',e);
        }
    }
    async delete (_id) {
        try{

            let record = await this.schema.findByIdAndDelete(_id);
            return record;
        }catch(e){
            console.error('Cannot delete record',e)
        }
    }
}

module.exports = Model;