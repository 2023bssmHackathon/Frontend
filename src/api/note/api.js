import { instance } from "../instance/instance";

export const createNote = async (NoteData) => {
  const { data } = await instance.post(`/api/note`, NoteData);
  return data;
};

export const getNoteById = async (id) => {
  const { data } = await instance.get(`/api/note?number=${id}`);
  return data;
};

export const deleteNote = async (id) => {
  const { data } = await instance.delete(`/api/note/${id}`);
  return data;
};
