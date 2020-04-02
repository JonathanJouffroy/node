const app = require('../index')
const supertest = require('supertest')
const Users = require('../user')
const Products = require('../product')
const Orders = require('../order')


describe("Testing the API", () => {
   
   //Get Users
    it("tests if getUser is running", async () => {
      const response = await supertest(app).get('/v1/users')
      expect(response.status).toBe(200);
    });

    //Get Products
    it("tests if GetProduct is running", async () => {
      const response = await supertest(app).get('/v1/products')
      expect(response.status).toBe(200);
    });

    //Get orders
    it("tests if GET ORDERS is running", async () => {
      const response = await supertest(app).get('/v1/orders')
      expect(response.status).toBe(200);
    });

    //Post Users
    it("Tests the post new users endpoint and returns as success message", async () => {

      const response = await supertest(app).post('/v1/users').send({
        name: "Pado", 
        firstname: "Vit", 
        email: "vitpadov@tedleworm.us",
        password: "Iehhdda52eavae"
      });
  
      expect(response.status).toBe(201);

    });


    //Post Products
    it("Tests the post new Product endpoint and returns as success message", async () => {

      const response = await supertest(app).post('/v1/products').send({

        name: "Casque SoundLink® II",
        description: "Lorsque vous voulez que votre musique vous accompagne dans vos déplacements.",
        quantity: 40,
        price: 160
      });
  
      expect(response.status).toBe(201);

    });


    //Post Orders
    it("Tests the post new Orders endpoint and returns as success message", async () => {
      const response = await supertest(app).post('/v1/orders').send({

        name_order: "15",
        price_order: 200, 
        ship_address: "7 cours de la république", 
        billing_address: "7 cours de la république"
      });
  
      expect(response.status).toBe(201);
  
    });

    //Delete
    afterEach(async () => {
          await Users.deleteOne({
            name: 'Pado'
          })
        })

    afterEach(async () => {
          await Products.deleteOne({
            name: 'Casque circum-aural sans fil SoundLink® I'
          })
        })

    afterEach(async () => {
      await Orders.deleteOne({
        name_order: '11'
      })
    })



  });


  



