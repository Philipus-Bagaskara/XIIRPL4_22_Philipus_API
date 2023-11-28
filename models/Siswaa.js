const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Mohon isikan nama'],
        unique: true 
    },
    TTL: {
        type: String,
        required: [true, 'Mohon isikan Tempat dan Tanggal Lahir']
    },
    alamat: {
        type: String,
        required: [true, 'Mohon isikan alamat']
    },
    nohp: {
        type: Number,
        required: [true, 'Mohon isikan nomor hp terlebih dahulu'],
        unique: true
    },
    NIK: {
        type: Number,
        required: [true, 'Mohon isikan NIK anda terlebih dahulu'],
        unique: true
    }
})

module.exports = mongoose.model('siswa', SiswaSchema)