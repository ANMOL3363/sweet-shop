const Sweet = require('../models/sweet.model');

exports.addSweet = async (req, res) => {
  try {
    const sweet = new Sweet(req.body);
    await sweet.save();
    res.status(201).json({ message: 'Sweet added successfully', sweet });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};



exports.getSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


exports.searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }

    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const sweets = await Sweet.find(filter);
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.purchaseSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;

    const sweet = await Sweet.findById(sweetId);

    if (!sweet) {
      return res.status(404).json({ message: 'Sweet not found' });
    }

    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: 'Sweet out of stock' });
    }

    sweet.quantity -= 1;
    await sweet.save();

    res.json({ message: 'Sweet purchased successfully', sweet });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.restockSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }

    const sweet = await Sweet.findById(sweetId);

    if (!sweet) {
      return res.status(404).json({ message: 'Sweet not found' });
    }

    sweet.quantity += Number(quantity);
    await sweet.save();

    res.json({ message: 'Sweet restocked successfully', sweet });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;

    const sweet = await Sweet.findByIdAndDelete(sweetId);

    if (!sweet) {
      return res.status(404).json({ message: 'Sweet not found' });
    }

    res.json({ message: 'Sweet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

