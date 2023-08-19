export default class PeepModel {
    constructor(_id = null, username, name, content, dateCreated) {
        this._id = _id;
        this.username = username;
        this.name = name;
        this.content = content;
        this.dateCreated = dateCreated;
    }
}