/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const { ObjectId } = require('mongodb');
const AppError = require('../common/error');
const UserService = require('./user.service');

const container = {
    userRepository: {
        findAll: jest.fn(() => ([{
            _id: new ObjectId("507f191e810c19729de860ea"),
            username: "cgonzales",
            firstName: "christian",
            lastName: "gonzales"
        }])),
        isUsernameUnique: jest.fn((username) => {
            if (username === "erodriguez") {
                return false;
            }

            return true;
        }),
        create: jest.fn((data) => {
            data._id = new ObjectId("507f191e810eee729de860ea");
        })
    },
    passwordRepository: {
        create: jest.fn((data) => {
            data._id = new ObjectId("507f191e810eee729de860eb");
        })
    }
};

describe("User service test", () => {
    const userService = new UserService(container);

    describe("Get All", () => {
        it("should get all users", async () => {
            const result = await userService.getAll();

            expect(result).toEqual([
                {
                    _id: new ObjectId("507f191e810c19729de860ea"),
                    username: "cgonzales",
                    firstName: "christian",
                    lastName: "gonzales"
                }
            ]);
        });
    });

    describe("Create", () => {
        it("should create a successful user", async () => {
            await userService.create({
                username: "cgonzales",
                firstName: "christian",
                lastName: "gonzales"
            }, "123456456789");

            expect(container.userRepository.create).toHaveBeenCalled();
            expect(container.passwordRepository.create).toHaveBeenCalled();
        });

        it("should throw an ERR_USERNAME_TAKEN error code", async () => {
            try {
                await userService.create({
                    username: "erodriguez",
                    firstName: "eduardo",
                    lastName: "rodríguez"
                }, "123456456789");

                throw new Error("Username must be unique");
            } catch (error) {
                expect(error instanceof AppError).toBe(true);
                expect(error.code).toBe("ERR_USERNAME_TAKEN");
            }
        });
    });
});