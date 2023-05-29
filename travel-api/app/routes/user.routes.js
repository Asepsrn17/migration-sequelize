const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "authorization, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/booking", [authJwt.verifyToken], controller.addBooking);
  app.post(
    "/api/bus",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createBus
  );
  app.get(
    "/api/bus",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAllBus
  );

  app.delete(
    "/api/bus/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteBus
  );
};
