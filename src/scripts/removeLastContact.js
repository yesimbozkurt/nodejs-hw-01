import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        contacts.pop();
        await writeContacts(contacts);
    } catch (err) {
        console.error( err);
    }
};

removeLastContact();
