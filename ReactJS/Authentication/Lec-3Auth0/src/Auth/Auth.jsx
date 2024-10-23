// Signup Page

export const formDataFromLocalStorage = (user) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user)
    localStorage.setItem('users' , JSON.stringify(users))
}

// Login Page

export const getFormDataFromLocalStorage = (email) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email)
}
