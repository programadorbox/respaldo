document.getElementById('user-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const firstName = document.getElementById('userFirstName').value;
    const lastName = document.getElementById('userLastName').value;
    const email = document.getElementById('userEmail').value;
  
    await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email })
    });
  
    alert('Usuario creado exitosamente');
  });
  
  document.getElementById('bootcamp-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const title = document.getElementById('bootcampTitle').value;
    const cue = document.getElementById('bootcampCue').value;
    const description = document.getElementById('bootcampDescription').value;
  
    await fetch('/api/bootcamp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, cue, description })
    });
  
    alert('Bootcamp creado exitosamente');
  });
  
  document.getElementById('loadData').addEventListener('click', async () => {
    const userList = document.getElementById('user-list');
    const bootcampList = document.getElementById('bootcamp-list');
  
    const users = await fetch('/api/user').then(res => res.json());
    const bootcamps = await fetch('/api/bootcamp').then(res => res.json());
  
    userList.innerHTML = '<h3>Usuarios</h3>';
    bootcampList.innerHTML = '<h3>Bootcamps</h3>';
  
    users.forEach(user => {
      userList.innerHTML += `<p>${user.firstName} ${user.lastName} (${user.email})</p>`;
    });
  
    bootcamps.forEach(bootcamp => {
      bootcampList.innerHTML += `<p>${bootcamp.title} - ${bootcamp.description}</p>`;
    });
  });
  