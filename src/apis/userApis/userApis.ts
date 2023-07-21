
import { Octokit, App } from "octokit";
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit ({
    // auth: 'YOUR-TOKEN'
  })
  
  

export const getUser = async (userName: string) => {
    const userResponse = await octokit.request('GET /users/{username}', {
        username: userName,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    return userResponse
}
export const getUserRepo = async (userName: string) => {
  const userResponse = await octokit.request('GET /users/{username}/repos', {
      username: userName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
  return (userResponse)
}




