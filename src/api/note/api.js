import { instance } from "../instance/instance";

export const createNote = async (NoteData) => {
  const { data } = await instance.post(`/api/note`, NoteData);
  return data;
};

export const getNoteByNumber = async (number) => {
  const { data } = await instance.get(`/api/note?number=${number}`);
  return data;
};

export const deleteNote = async (id) => {
  const { data } = await instance.delete(`/api/note/${id}`);
  return data;
};
