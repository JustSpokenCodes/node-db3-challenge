const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({id}).first();
}

function findSteps(scheme_id) {
    return db('steps as st')
        .join('schemes as s', 's.id', 'st.scheme_id')
        .select('st.scheme_id', 's.scheme_name', 'st.instructions')
        .where({scheme_id});
}

async function add(schemes) {
    const [id] = await db('schemes').insert(schemes);
    return findById(id);
}

async function update(changes, id) {
    await db('schemes')
        .where({id})
        .update(changes);

    return findById(id);
}

function remove(id) {
    return db('users')
        .where({id})
        .del();
}