export async function getChatroomMessages(id: string) {

  const accessToken = localStorage.getItem('token');

  if (!accessToken) return;

  const res = await fetch(`https://chatroomsbackend-production.up.railway.app/api/chatroom-messages/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
    
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd logowania')
  }

  return res.json()
}

