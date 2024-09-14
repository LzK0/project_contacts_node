import { Router } from "express";
import { createContact, deleteContact, listContacts, updateContact } from "../services/contactsService";
import { contactDeleteSchema, contactSchema, contactUpdateSchema } from "../schemas/contactsSchema";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "contacts",
        functions: {
            create: "/create",
            delete: "/delete",
            list: "/list",
            update: "/update"
        }
    });
});

router.post('/create', async (req, res) => {

    const data = req.body;

    const dataValidated = contactSchema.safeParse(data);

    if (!dataValidated.success) res.status(400).json({ message: "Invalid data" });

    const { number, name, lastname } = data;


    const create = await createContact({
        name, lastname, number
    });

    if (!create) res.status(500).json({ message: "Not Founded" });

    res.status(201).json({
        message: "Created successfully",
        contact: {
            name,
            lastname,
            number
        }
    });
});

router.get('/list', async (req, res) => {
    const list = await listContacts();

    if (list.length == 0) res.status(200).json({ message: "No contacts" });

    res.status(200).json({ contacts: list });
});

router.put('/update/:number', async (req, res) => {

    const data = req.body;
    const number = req.params.number;

    const dataValidated = contactUpdateSchema.safeParse(data);
    if (!dataValidated.success) res.status(400).json({ message: "Invalid data" });

    const update = await updateContact(number, data);

    if (!update) res.status(500).json({ message: "Not Founded" });

    res.status(200).json({
        message: "Updated successfully",
        contact: {
            name: data.name,
            lastname: data.lastname,
            number: data.number
        }
    });
});

router.delete('/delete/:number', async (req, res) => {

    const number = req.params.number;

    console.log(number);
    const dataValidated = contactDeleteSchema.safeParse({ number });
    if (!dataValidated.success) res.status(400).json({ message: "Invalid data" });

    const delContact = await deleteContact(number);

    if (!delContact) return res.status(500).json({ message: "Not Founded" });

    res.status(200).json({ message: "Deleted successfully" });
});

export default router;