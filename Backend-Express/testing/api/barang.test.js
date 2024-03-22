const request = require('supertest');
const app = require('../../express/server');
const db = require('../../models');
const Barang = require('../../models/barang')(db.sequelize, db.Sequelize);

// Test case for barangController
describe('barangController', () => {

  it('should retrieve all barang', async () => {
    const response = await request(app).get('/barang');
    expect(response.status).toBe(200);
 
  });

  it('should retrieve a specific barang by ID', async () => {
    const existingBarang = await Barang.findOne();
    console.log(existingBarang);
    const response = await request(app).get(`/barang/${existingBarang.kode_barang}`);
    expect(response.status).toBe(200);

  });

it('should create a new barang', async () => {
    const newBarang = {
        nama_barang: 'test barang',
        harga: 5000
    };
    const response = await request(app).post('/barang').send(newBarang);
    expect(response.status).toBe(201);
});

it('should update an existing barang', async () => {
    const existingBarang = await Barang.findOne(); // Assuming there's at least one barang in the database
    const updatedBarang = {
        name: 'Updated Barang',
        price: 200,
        quantity: 20
    };
    const response = await request(app).put(`/barang/${existingBarang.kode_barang}`).send(updatedBarang);
    expect(response.status).toBe(200);
});

it('should delete an existing barang', async () => {
    const existingBarang = await Barang.findOne();
    const response = await request(app).delete(`/barang/${existingBarang.kode_barang}`);
    expect(response.status).toBe(200);

});

  it('should respond with a specific barang when GET /barang/:id is called', async () => {
    const existingBarang = await Barang.findOne(); // Assuming there's at least one barang in the database
    const response = await request(app).get(`/barang/${existingBarang.kode_barang}`);
    expect(response.status).toBe(200);

  });
});
