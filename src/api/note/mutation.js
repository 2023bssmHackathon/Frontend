import { useMutation, useQueryClient } from "react-query";
import { createNote, deleteNote } from "./api";

export const useAddNoteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(
      (NoteData) => {
        return createNote(NoteData);
      },
      {
        onSuccess: () => {
          alert("성공적으로 쪽지가 보내졌어요!");
          queryClient.invalidateQueries("notes");
        },
        onError: () => {
          alert("쪽지 보내기에 실패했어요...");
        },
      }
    );
  };

export const useDeleteNoteMutation = (deleteNoteId) => {
    const queryClient = useQueryClient();
  return useMutation(() => deleteNote(deleteNoteId), {
    onSuccess: () => {
      alert("쪽지가 삭제되었어요.");
      queryClient.invalidateQueries("notes");
    },
    onError: () => {
      alert("쪽지를 삭제하지 못 했어요.");
    },
  });
};