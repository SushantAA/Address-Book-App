//libs
import { v4 as uuidv4 } from "uuid";

//cache
import { cacheDB } from "../app.js";

export const createContacts = (request, response) => {
  const { body } = request;

  if (Array.isArray(body)) {
    body.forEach((contact) => {
      const id = uuidv4();

      contact.id = id;

      cacheDB.set(id, contact);
    });

    const updatedData = body.map(({ id }) => cacheDB.get(id));

    return response.status(200).json(updatedData);
  }

  return response.status(400).json("Bad Request");
};

export const updateContacts = (request, response) => {
  const { body } = request;

  if (Array.isArray(body)) {
    body.forEach((contact) => {
      const { id } = contact;

      const updatedContactData = { ...cacheDB.get(id), ...contact };

      cacheDB.set(id, updatedContactData);
    });

    const updatedData = body.map(({ id }) => cacheDB.get(id));

    return response.status(200).json(updatedData);
  }

  return response.status(400).json("Bad Request");
};

export const deleteContacts = (request, response) => {
  const { body } = request;

  if (Array.isArray(body)) {
    const deletedContactCount = body.reduce((count, id) => {
      if (cacheDB.has(id)) {
        cacheDB.del(id);
        count++;
      }

      return count;
    }, 0);

    return response.status(200).json({
      deleted: deletedContactCount,
    });
  }

  return response.status(400).json("Bad Request");
};

export const searchContacts = (request, response) => {
  const { body } = request;

  if (typeof body.query === "string" && body.query.length > 0) {
    const query = body.query.toLowerCase();

    const queriedData = cacheDB.keys().reduce((result, id) => {
      const contact = cacheDB.get(id);

      if (
        contact &&
        Object.values(contact).some(
          (value) =>
            typeof value === "string" && value.toLowerCase().includes(query)
        )
      ) {
        result.push(contact);
      }

      return result;
    }, []);

    return response.status(200).json(queriedData);
  }

  return response.status(400).json("Bad Request");
};
