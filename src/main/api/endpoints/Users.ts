import { request, APIRequestContext  } from '@playwright/test';

async function usersEndpoint(): Promise<any[]> {
    const apiRequestContext: APIRequestContext = await request.newContext();
    const response = await apiRequestContext.get('https://gorest.co.in/public/v2/users');
    const data = await response.json()
    return data;
};

export { usersEndpoint}
