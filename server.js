const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const http = require('http');
const socket = require('socket.io');
const axios = require('axios');

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'ride_sharing_db'
});

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

// Middleware for authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).send('Access denied. No token provided.');

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
};

// Middleware to check for admin role
const isAdmin = (req, res, next) => {
  // Implement your admin role check logic here
  // For example, you can check if the user has an 'admin' role in the database
  const isUserAdmin = true; // Replace with your actual check

  if (isUserAdmin) {
    next();
  } else {
    res.status(403).send('Forbidden: Admin access required');
  }
};

// User registration
//app.post('/api/register', async (req, res) => {
  //const { username, password } = req.body;
  //const hashedPassword = await bcrypt.hash(password, 10);
 // const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  //db.query(sql, [username, hashedPassword], (err, result) => {
    //if (err) throw err;
    //res.send('User registered successfully!');
 // });
//});
// User registration
app.post('/api/register', async (req, res) => {
  const { username, password, email, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'INSERT INTO users (username, password, email, phone) VALUES (?, ?, ?, ?)';
  db.query(sql, [username, hashedPassword, email, phone], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error registering user');
    }
    res.send('User registered successfully!');
  });
})

// User login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(401).send('Invalid username or password');
    }
    const user = result[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid username or password');
    }
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.send({ token });
  });
});

// Ride request
app.post('/api/ride-request', authenticateToken, (req, res) => {
  const { pickupLocation, destination, dateTime, seats } = req.body;
  const userId = req.user.userId;

  // Check if all required properties are present
  if (!pickupLocation || !destination || !dateTime || !seats) {
    return res.status(400).send('Missing required properties');
  }

  const sql = 'INSERT INTO ride_requests (user_id, pickup_location, destination, date_time, seats) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [userId, pickupLocation, destination, dateTime, seats], (err, result) => {
    if (err) {
      console.error('Error creating ride request:', err);
      return res.status(500).send('Error creating ride request');
    }
    res.send('Ride request created successfully!');
  });
});


// Ride offer
app.post('/api/ride-offer', authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const { pickupLocation, destination, dateTime, seats } = req.body;
  const sql = 'INSERT INTO ride_offers (user_id, pickup_location, destination, date_time, seats) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [userId, pickupLocation, destination, dateTime, seats], (err, result) => {
    if (err) throw err;
    res.send('Ride offer created successfully!');
  });
});

// Get all ride requests
app.get('/api/ride-requests', authenticateToken, (req, res) => {
  try {
    const sql = 'SELECT * FROM ride_requests';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
  } catch (error) {
    console.log(error.message)
  }
});

// Get all ride offers
app.get('/api/ride-offers', authenticateToken, (req, res) => {
  const sql = 'SELECT * FROM ride_offers';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Result : === ",result);
    res.send(result);
  });
});

// Ride matching
app.get('/api/match-rides', authenticateToken, (req, res) => {
  const sql = `
    SELECT r.id, r.pickup_location, r.destination, r.date_time, r.seats, o.seats AS available_seats
    FROM ride_requests r
    JOIN ride_offers o ON r.pickup_location = o.pickup_location
      AND r.destination = o.destination
      AND r.date_time = o.date_time
      AND r.seats <= o.seats
  `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Booking
app.post('/api/book-ride', authenticateToken, (req, res) => {
  const { rideOfferId, seatsBooked } = req.body;
  const userId = req.user.userId;
  const sql = 'INSERT INTO bookings (ride_offer_id, user_id, seats_booked) VALUES (?, ?, ?)';
  db.query(sql, [rideOfferId, userId, seatsBooked], (err, result) => {
    if (err) throw err;
    res.send('Ride booked successfully!');
  });
});

// Ratings and reviews
app.post('/api/rate-ride', authenticateToken, (req, res) => {
  const { rideOfferId, rating, comment } = req.body;
  const userId = req.user.userId;
  const sql = 'INSERT INTO ratings (ride_offer_id, user_id, rating, comment) VALUES (?, ?, ?, ?)';
  db.query(sql, [rideOfferId, userId, rating, comment], (err, result) => {
    if (err) throw err;
    res.send('Rating submitted successfully!');
  });
});

// Real-time updates and notifications
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Real-time ride updates
  socket.on('new-ride-request', (data) => {
    io.emit('new-ride-request', data);
  });

  socket.on('new-ride-offer', (data) => {
    io.emit('new-ride-offer', data);
  });

  // Real-time booking updates
  socket.on('new-booking', (data) => {
    io.emit('new-booking', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// User profiles and settings
app.get('/api/user-profile', authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const sql = 'SELECT username, email, phone FROM users WHERE id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

app.put('/api/update-profile', authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const { email, phone } = req.body;
  const sql = 'UPDATE users SET email = ?, phone = ? WHERE id = ?';
  db.query(sql, [email, phone, userId], (err, result) => {
    if (err) throw err;
    res.send('Profile updated successfully!');
  });
});

// Admin dashboard (Example routes)
app.get('/api/admin/users', authenticateToken, isAdmin, (req, res) => {
  const sql = 'SELECT id, username, email, phone, created_at FROM users';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/api/admin/ride-requests', authenticateToken, isAdmin, (req, res) => {
  const sql = 'SELECT * FROM ride_requests';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


//uber
app.get('/api/uber-price', async (req, res) => {
  const { start_latitude, start_longitude, end_latitude, end_longitude } = req.query;
  const uberServerToken = '6ibZu-l4MLFMM3jZf3kEfRecBPpRgdttdWLHIF-P'; // Replace with your Uber Server Token
  
  try {
    const response = await axios.get('https://api.uber.com/v1.2/estimates/price', {
      params: {
        start_latitude,
        start_longitude,
        end_latitude,
        end_longitude,
      },
      headers: {
        'Authorization': `Token ${uberServerToken}`,
      }
    });

     // Extract the distance and fare information
     const priceEstimates = response.data.prices.map(price => ({
      distance: price.distance,
      fare: price.estimate
    }));

    res.json(priceEstimates);
  } catch (error) {
    console.error('Error fetching Uber price estimate:', error);
    res.status(500).json({ error: 'Failed to fetch Uber price estimate' });
  }
});



// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
