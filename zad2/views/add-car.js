function renderPage() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Add Car</title>
    </head>
    <body>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/add-car">Add car</a></li>
            <li><a href="/car">Last added car</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <form action="/add-car" method="POST">
          <input type="text" name="make" placeholder="make"/>
          <input type="text" name="model" placeholder="model"/>
          <input type="number" name="year" placeholder="year"/>
          <input type="text" name="color" placeholder="color"/>
          <button>Add car</button>
        </form>
      </main>
    </body>
    </html>
  `;
}

module.exports = { renderPage };