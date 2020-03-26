const connection = require('../database/connection')

const crypto = require('crypto')

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*')
        if (ongs) {
            if (ongs.length > 0) {
                return res.json({
                    ongs
                })
            } else {
                return res.json({
                    error: "No registered ONGs"
                })
            }
        } else {
            return res.json({
                error: "Cannot get ONGs information"
            })
        }
    },
    async create(req, res) {
        const {
            name,
            email,
            whattsapp,
            city,
            uf
        } = req.body

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            whattsapp,
            city,
            uf
        })
        return res.json({
            id
        })
    }
}