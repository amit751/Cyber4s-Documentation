Node- 
  -FS:
      -readdirSync()
      -writeFileSync()
      -readFileSync()
      -unlink()

EXPRESS- 
// creates a server
  const app = express()
  app.listen('PORT', () => {console.log("listening to..PORT")})
    app.use(()=>{}); // middleware.
    app.use(app.json()); // middleware to parse all incoming requests.

    app.get('/b', (request, response) => {
      const body = request.body;
      response.status(200).send();
    })
    app.get('/b/:id', (request, response) => {
      const body = request.body;
      response.status(200).send();
    })
    app.post('/b', (request, response) => {
      const body = request.body;
      const bodyContent = {property: 'value'};
      response.status(200).json();  // response.json(object) stringifies the object and sends the response. 
    })
    app.put('/b/:id', (request, response) => {
      const body = request.body;
      const bodyContent = {property: 'value'};
      response.status(200).json(bodyContent);
    })
    app.delete('/b/:id', (request, response) => {
      const body = request.body;
      const bodyContent = {property: 'value'};
      response.status(200).send(JSON.stringify(bodyContent));
    })

JEST-
// create a test file.
  describe("test headline" , ()=>{
    
    test("specific test" , ()=>{
    });
    
    it("specific test" , ()=>{
    });

 });
 
  -expect().toBe() // matcers : EqualTo , isNan ...

  // REFER TO ALL THE TESTS IN A FILE, UNLESS YOU WRITE THEM INSIDE A DESCRIBE BLOCK: THEN REFERS ONLY TO TESTS INSIDE THIS BLOCK
  -beforeAll()
  -afterAll()
  -beforeEach()
  -afterEach()

SUPERTEST- (NEED TO LEARN METHODS)

// post example

// describe('POST /users', function() {
//   it('responds with json', function(done) {
//     request(app)
//       .post('/users')
//       .send({name: 'john'})
//       .set('accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         return done();
//       });
//   });
// });



const options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestBody),
}
  // creates network requests to server.
  const request = require('supertest');
  const app = require('SERVER_PATH');   // gets a server file path
    request(app).get('/b');
    request(app).get('/b/:id');
    request(app).post('/b').send(options);
    request(app).put('/b/:id').send(options);
    request(app).delete('/b/:id');

PUPPETEER-
// everything is async because every action takes time.
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch(   // loads new browser (default to chrome)
    {
      headless: false,
      slowMo: 42
    }
  ); 
  const page = await browser.newPage();     //  defines the tab to work with.
  await page.goto(url);   // method of page, enters the url
  await page.screenshot({path: 'screenshot.png'});  // takes a screenshot and save it to path value.
  await page.evaluate(() => {})   //  runs the callback inside the browser console.
  await page.waitForSelector('input#textInput');   //  waits for the selector to appear in page.
  await page.click('input#addButton');   //  clicks an element by selector.
  browser.close();    //    closes the browser.

NOCK-
//  listening to url requests and manipulates the response.
nock('https://www.example.io')  //   intercepts the url server by the route filter.
    .get()   //   filters the route of the request.
    .times()  //  times to manipulate the response.
    .reply(200, fakeData_AsObject)

  -NOCK-PUPPETEER:
  
