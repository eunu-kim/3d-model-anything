import type { RoomModule } from '../packages/room-runtime/types';
export const ROOMS: RoomModule[] = [{id:'office-v4', label:'Wes’s office', build:async () => (await import('./office-v4')).officeV4.build()}];
// No id: the first room. An id that is not registered: an error, never another room.
export const roomById = (id:string|null) => {
  if (id === null) return ROOMS[0];
  const room = ROOMS.find(r=>r.id===id);
  if (!room) throw new Error(`room ${JSON.stringify(id)} is not registered in demos/index.ts; registered: ${ROOMS.map(r=>r.id).join(', ')}`);
  return room;
};
export type {BuiltRoom, RoomModule} from '../packages/room-runtime/types';
