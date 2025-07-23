// middleware/pass-user-to-view.js
const passUserToView = (req, res, next) => {
    res.local.user = req.session.user ? req.session.user : null;
    next();
};

module.exports = passUserToView;