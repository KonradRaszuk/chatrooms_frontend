export interface CreateChatroomPayload {
  name: string;
}

export interface DeleteChatroomPayload {
  id: string;
}

export interface CreateChatroomResponse {
  id: string;
  name: string;
}

export interface UpdateChatroomPayload {
  id: string;
  name?: string;
}

export interface UpdateChatroomResponse {
  id: string;
  name: string;
}




export async function getChatrooms() {

  const accessToken = localStorage.getItem('token');

  if (!accessToken) return;

  const res = await fetch('https://chatroomsbackend-production.up.railway.app/api/chatrooms', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
    
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd logowania')
  }

  return res.json()
}

export async function createChatroom(payload: CreateChatroomPayload) {

  const accessToken = localStorage.getItem('token');

  if (!accessToken) return;

const res = await fetch('https://chatroomsbackend-production.up.railway.app/api/chatrooms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd logowania')
  }

  return res.json()
}



export async function deleteChatroom(id: string) {
  const accessToken = localStorage.getItem('token');

  if (!accessToken) return;

  const res = await fetch(`https://chatroomsbackend-production.up.railway.app/api/chatrooms/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
    
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd usuwania')
  }
}


export async function updateChatroom({id, ...payload}: UpdateChatroomPayload) {

  const accessToken = localStorage.getItem('token');

  if (!accessToken) return;

  const res = await fetch(`https://chatroomsbackend-production.up.railway.app/api/chatrooms/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
      body: JSON.stringify(payload),
    })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd logowania')
  }

  return res.json()


}

export async function getChatroomById(id: string) {

  const accessToken = localStorage.getItem('token');

  if (!accessToken) return;

  const res = await fetch(`https://chatroomsbackend-production.up.railway.app/api/chatrooms/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
    
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd logowania')
  }

  return res.json()
}

