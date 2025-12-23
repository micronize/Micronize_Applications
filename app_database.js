
  async function sendData() {
    const response = await fetch('sql3.freesqldatabase.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        business: "Green Peace",
        name: 'Alex',
        email: "mark.young@micronizeapp.com",
        phone: 7203395378
      })
    });

    const result = await response.json();
    console.log(result);
  }

sendData()

