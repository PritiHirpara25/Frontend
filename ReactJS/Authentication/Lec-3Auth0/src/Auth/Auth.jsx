// Signup Page

export const SetformDataFromLocalStorage = (user) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user)
    localStorage.setItem('users' , JSON.stringify(users))
}
