import request from 'supertest';
import Ajv from 'ajv';
import factSchema from '../helpers/fact-json-schema.json'; 
import BreedsSchema from '../helpers/breed-list-json-schema.json'; 
import { app } from '../../build/src/app';

//Fact Api Tests
describe('API /Fact Integration Tests', () => {
    const ajv = new Ajv();
    
    it('/fact Should Return Status 200', async () => {
        //Act
        const response = await request(app).get('/api/fact');
        //Assert Status
        expect(response.status).toBe(200);
    });

    it('/fact Should have Valid Json Schema', async () => {
        //Act
        const response = await request(app).get('/api/fact');
        //Assert Json Schema
        const validate = ajv.compile(factSchema);
        const isValid = validate(response.body);
        // Expect the validation to pass
        expect(isValid).toBeTruthy(); 
    });
    //Todo add error cases
});

//Breed
describe('API /breed Integration Tests', () => {
    const ajv = new Ajv();
    
    it('/breed/list Should Return Status 200', async () => {
        //Act
        const response = await request(app).get('/api/breed/list');
        //Assert Status
        expect(response.status).toBe(200);
    });

    it('/breed/list Should have Valid Json Schema', async () => {
        //Act
        const response = await request(app).get('/api/breed/list');
        //Assert Json Schema
        const validate = ajv.compile(BreedsSchema);
        const isValid = validate(response.body);
        // Expect the validation to pass
        expect(isValid).toBeTruthy(); 
    });
    
    it('/breed/list Should have response time within a certain threshold', async () => {
        const startTime = performance.now();
        const response = await request(app).get('/api/breed/list');
        const endTime = performance.now();
    
        const responseTime = endTime - startTime;

        expect(responseTime).toBeLessThan(6000); 
    });

    //Todo add error cases
    //Todo add /info tests
});
