export interface LoginPayload {
 email: string
  password: string
}

export interface RegisterPayload {
    email: string
    password: string
    nick: string
}

export interface LoginResponse {
 accessToken: string
 
}

export interface User {
  email: string;
  id: string;
  nick: string;
}

export async function loginRequest(payload: LoginPayload): Promise<LoginResponse> {
  const res = await fetch('https://chatroomsbackend-production.up.railway.app/api/authentication/sign-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include'
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd logowania')
  }

  return res.json()
}



export async function registerRequest(payload: RegisterPayload) {

  const res = await fetch('https://chatroomsbackend-production.up.railway.app/api/authentication/sign-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || 'Błąd logowania')
  }

}


export const getMe = async () => {

    const accessToken = localStorage.getItem('token');

  if (!accessToken) return;

  const res = await fetch('https://chatroomsbackend-production.up.railway.app/api/authentication/me', {
    method: "GET",
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error('Nie udało się pobrać danych użytkownika');
  return res.json();
}