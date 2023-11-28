const Siswa = require('../models/Siswaa')

module.exports = {
    index: async (req, res) => {
        try {
            const siswa = await Siswa.find();
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Ini data semua user"
            });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },
      show: async (req, res) => {
        try {
            const siswa = await Siswa.findById(req.params.id, )
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
      },
      store: async (req, res) => {
        try {
            const siswa = await Siswa.create(req.body)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
      },
      update: async (req, res) => {
        try {
            const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body,{
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
        const id = req.params.id
      },
      delete: async (req, res) => {
        try {
            await Siswa.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
      },
}