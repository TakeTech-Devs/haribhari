/**
 * @class
 */
class APIFeatures {
    /**
     * @constructor
     * @param {*} query
     * @param {*} queryStr
     */
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    /**
     * search
     * @return{*}
     */
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i',
            },
        } : {};
        this.query = this.query.find({...keyword});
        return this;
    }

    /**
     * filter
     * @return {*}
     */
    filter() {
        const queryCopy = {...this.queryStr};
        // Removing fields from the query
        const removeFields = ['keyword', 'limit', 'page'];
        removeFields.forEach((el) => delete queryCopy[el]);
        // Advance filter for price, ratings etc
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr
            .replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    /**
     * pagination
     * @param {Number} resultPerPage
     * @return{*}
     */
    pagination(resultPerPage = 10) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = APIFeatures;
