const { ObjectId } = require('mongodb');
const schema = require('./schema');

describe('Schema test', () => {
    describe('User validation', () => {
        it("Successful validate structure", async () => {
            const user = {
                _id: new ObjectId("507f191e810c19729de860ea"),
                username: "cgonzales",
                firstName: "christian",
                lastName: "gonzales"
            };

            const result = await schema.users.validateAsync(user);

            expect(result).toEqual({
                _id: new ObjectId("507f191e810c19729de860ea"),
                username: "cgonzales",
                firstName: "christian",
                lastName: "gonzales"
            });
        });

        describe("Validation property required", () => {
            it("username test", async () => {
                try {
                    const user = {
                        _id: new ObjectId("507f191e810c19729de860ea"),
                        Username: "cgonzales",
                        firstName: "christian",
                        lastName: "gonzales"
                    };

                    await schema.users.validateAsync(user);
                } catch (error) {
                    expect(error.message).toBe('"username" is required');
                }
            });

            it("firstname test", async () => {
                try {
                    const user = {
                        _id: new ObjectId("507f191e810c19729de860ea"),
                        username: "cgonzales",
                        FirstName: "christian",
                        lastName: "gonzales"
                    };

                    await schema.users.validateAsync(user);
                } catch (error) {
                    expect(error.message).toBe('"firstName" is required');
                }
            });

            it("lastName test", async () => {
                try {
                    const user = {
                        _id: new ObjectId("507f191e810c19729de860ea"),
                        username: "cgonzales",
                        firstName: "christian",
                        LastName: "gonzales"
                    };

                    await schema.users.validateAsync(user);
                } catch (error) {
                    expect(error.message).toBe('"lastName" is required');
                }
            });
        });

        describe("Property size", () => {
            it("username size test", async () => {
                try {
                    const user = {
                        _id: new ObjectId("507f191e810c19729de860ea"),
                        username: "cgonzales2012",
                        firstName: "christian",
                        LastName: "gonzales"
                    };

                    await schema.users.validateAsync(user);
                } catch (error) {
                    expect(error.message).toBe('"username" length must be less than or equal to 10 characters long');
                }
            });

            it("firstName size test", async () => {
                try {
                    const user = {
                        _id: new ObjectId("507f191e810c19729de860ea"),
                        username: "cgonzales",
                        firstName: "christiangonzalescruz",
                        lastName: "gonzales"
                    };

                    await schema.users.validateAsync(user);
                } catch (error) {
                    expect(error.message).toBe('"firstName" length must be less than or equal to 20 characters long');
                }
            });

            it("lastName size test", async () => {
                try {
                    const user = {
                        _id: new ObjectId("507f191e810c19729de860ea"),
                        username: "cgonzales",
                        firstName: "christian",
                        lastName: "gonzalescruzsadasdasdasdasdsadasdasdasdasdasdsadasdasdsadadsa"
                    };

                    await schema.users.validateAsync(user);
                } catch (error) {
                    expect(error.message).toBe('"lastName" length must be less than or equal to 50 characters long');
                }
            });
        });
    });

    describe("Password validation", () => {
        it("Successful validate structure", async () => {
            const password = {
                userId: "507f191e810c19729de860ea",
                password: "5464da6dasdasd",
            };
            const result = await schema.passwords.validateAsync(password);

            expect(result).toEqual({
                userId: "507f191e810c19729de860ea",
                password: "5464da6dasdasd",
            });
        });

        describe("Validation property required", () => {
            it("userId test", async () => {
                try {
                    const password = {
                        UserId: "507f191e810c19729de860ea",
                        password: "5464da6dasdasd",
                    };
                    await schema.passwords.validateAsync(password);
                } catch (error) {
                    expect(error.message).toBe('"userId" is required');
                }
            });

            it("password test", async () => {
                try {
                    const password = {
                        userId: "507f191e810c19729de860ea",
                        Password: "5464da6dasdasd",
                    };
                    await schema.passwords.validateAsync(password);
                } catch (error) {
                    expect(error.message).toBe('"password" is required');
                }
            });
        });
    });
});
