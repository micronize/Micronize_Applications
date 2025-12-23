
  async function sendData() {
    const response = await fetch('sql3.freesqldatabase.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Alex',
        age: 15
      })
    });

    const result = await response.json();
    console.log(result);
  }

