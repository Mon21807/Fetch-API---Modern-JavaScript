document.getElementById('fetch-users-btn').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsers(users) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ''; // Clear previous content

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = `${user.first_name} ${user.last_name}`;
        avatar.classList.add('avatar');

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.innerHTML = `
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>Email: ${user.email}</p>
        `;

        userCard.appendChild(avatar);
        userCard.appendChild(userInfo);
        userContainer.appendChild(userCard);
    });
}
