import { create } from "zustand";

interface ActiveListStore {
  members: string[];            // repsent active members
  add: (id: string) => void;    // add member by ID
  remove: (id: string) => void; // remove member by ID
  set: (ids: string[]) => void; // set entire list of members by ID
}

const useActiveList = create<ActiveListStore>((set) => ({
  members: [], // the initial state of the store
  add: (id) => set((state) => ({ members: [...state.members, id] })),
  remove: (id) =>
    set((state) => ({
      members: state.members.filter((memberId) => memberId !== id),
    })),
  set: (ids) => set({ members: ids }),
}));

export default useActiveList;
