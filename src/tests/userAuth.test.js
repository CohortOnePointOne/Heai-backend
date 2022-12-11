import mongoose from "mongoose";
import testBase from "./index.js"
import { createUsers, deleteUsers } from './testdata/userTestData';
let password
describe("Authorise a User", function(){
    beforeAll((done)=>{
       done()
    })

    beforeEach(async function (){
       await createUsers()
    })

    afterEach(async function () {
        await deleteUsers()
        // await  mongoose.connect.close
    })

    afterAll(async ()=>{
        mongoose.connection.close();
    })

    it("should sign in a user", async ()=>{
        const res =  await testBase.post('/auth/user/signin').send({
            email: 'user1@gmail.com',
            password: '12345678'
        })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            token: expect.stringMatching(/^(?:[\w-]*\.){2}[\w-]*$/),
          });
    })

    it("should not register given a wrong email", async()=>{
        const res =  await testBase.post('/auth/user/signin').send({
            email: 'use@gmail.com',
            password: "12345678"
        })
        expect(res.status).toBe(400)
    })
})