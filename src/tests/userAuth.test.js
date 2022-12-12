import testBase from "./index.js"


describe("Authorise a User", function(){
    const user = {
        name: "user1",
        username: "sign_User",
        email: "user1@gmail.com",
        passowrd: "user12323"
    }

    beforeAll(async function(){
        await testBase.post('/auth/user/signup').send(user)
    })

    it("should sign in a user", async ()=>{
        const res =  await testBase.post('/auth/user/signin').send({
            email: "mart@gmail.com",
            password: "$2b$08$tp1coRdGS27AwYm9qnTF8.rdhiyUSYYIvGVpAcKO7n858I1RiUPx6"
        })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            token: expect.stringMatching(/^(?:[\w-]*\.){2}[\w-]*$/),
          });
    })
})