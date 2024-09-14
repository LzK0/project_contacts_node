import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createContact = async (data: Prisma.ContactCreateInput) => {
    try {
        return await prisma.contact.create({ data });
    } catch (err) {
        console.log(err)
        return false;
    }
}

export const listContacts = async () => {
    return await prisma.contact.findMany({
        orderBy: {
            updatedAt: "asc"
        }
    });
}

export const updateContact = async (number: any, data: Prisma.ContactUpdateInput) => {
    try {
        console.log(number)
        console.log(data)
        return await prisma.contact.update({
            where: { number: number},
            data
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

export const deleteContact = async (number: any) => {
    try {
        return await prisma.contact.delete({ where: { number } });
    } catch (err) {
        console.log(err);
        return false;
    }
}