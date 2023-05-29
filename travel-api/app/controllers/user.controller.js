const db = require("../models");
const { user, bus, booking } = db;

exports.addBooking = async (req, res) => {
  const { tujuan, tanggal, userId, busId } = req.body;

  try {
    const getUser = await user.findOne({ where: { id: userId } });
    if (!getUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const getBus = await bus.findOne({ where: { id: busId } });
    if (!getBus) {
      return res.status(404).json({ status: false, message: "Bus not found" });
    }
    const payload = {
      userId: userId,
      busId: busId,
      destination: tujuan,
      trip_date: tanggal,
    };

    const getBooking = await booking.create(payload);

    return res.json({
      status: true,
      message: "Booking created successfully",
      data: getBooking,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating booking",
      error: error.message,
    });
  }
};

exports.createBus = async (req, res) => {
  const { id, nama_bus, number_plate, kapasitas } = req.body;

  try {
    const Bus = await bus.create({
      id,
      nameBus: nama_bus,
      numberPlate: number_plate,
      capacity: kapasitas,
    });

    return res.json({
      status: true,
      message: "Bus created successfully",
      data: Bus,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error creating bus",
      error: error.message,
    });
  }
};

exports.findAllBus = async (req, res) => {
  try {
    const buses = await bus.findAll();
    return res.json({
      status: true,
      message: "Buses retrieved successfully",
      data: buses,
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error retrieving buses",
      error: err.message,
    });
  }
};

exports.deleteBus = async (req, res) => {
  const { id } = req.params;

  try {
    const Bus = await bus.destroy({ where: { id } });

    if (Bus === 0) {
      return res.status(404).json({
        status: false,
        message: "Bus not found",
      });
    }

    return res.json({
      status: true,
      message: "Bus deleted successfully",
      data: Bus,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error deleting bus",
      error: error.message,
    });
  }
};
