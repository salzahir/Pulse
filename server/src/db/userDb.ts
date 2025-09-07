import prisma from "./prisma";
import { comparePassword, hashPassword } from "../utils/hash";

export const postFakeUser = async (userID: string) => {
    return await prisma.user.create({
        data: {
            id: userID,
            email: `${userID}@example.com`,
            name: `${userID}`,
            username: 'user_' + userID,
            password: 'password123' 
        }
    });
};

export const postUser = async (
    email: string,
    name: string,
    username: string,
    password: string
) => {
    const hashedPassword = await hashPassword(password);
    return await prisma.user.create({
        data: {
            id: crypto.randomUUID(),
            email,
            name,
            username,
            password: hashedPassword,
            isOnline: false,
            lastSeen: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
    });
};

export const postLoginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) throw new Error('User not found');

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');

    return user;
};

const seedFakeUsers = async () => {
    try {
        await postFakeUser("Dexter Morgan");
        console.log("✅ Inserted Dexter");

        await postFakeUser("Arthur Mitchell");
        console.log("✅ Inserted Arthur");
    } catch (err) {
        console.error("❌ Seeding failed:", err);
    } finally {
        await prisma.$disconnect();
    }
};

seedFakeUsers();