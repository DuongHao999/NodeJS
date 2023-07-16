function multipleMoongoseToObject(mongooses) {
    return mongooses.map((mongoose => {
        return mongoose.toObject();
    }))
}

function moongoseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

export { multipleMoongoseToObject, moongoseToObject };