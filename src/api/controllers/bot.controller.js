

exports.get_bot = (req, res, next) => {
    res.status(200).json({
        message: "🛠 Hello Bot ! 🛠"
    })
}