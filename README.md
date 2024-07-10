
# Chrauma Portfolio Web

This repository contains the front-end and back-end code for the Chrauma game portfolio website. The website showcases various aspects of the game, including screenshots, music, and other resources.

![Chrauma Homepage](/Chrauma.png)

## Project Structure

The project is divided into two main parts: `Front` and `Back`.

### Back

The back-end of the project is responsible for handling authentication and database interactions. It is built using Node.js and Express.js.

- **config**: Configuration files for authentication and database.
  - `auth.config.js`
  - `db.config.js`
- **controllers**: Controllers for managing authentication.
  - `auth.controller.js`
- **middlewares**: Middleware for handling JWT authentication and user verification.
  - `authJwt.js`
  - `verifySignUp.js`
- **models**: Database models.
  - `user.model.js`
- **routes**: API routes.
  - `index.js`
- **server.js**: Entry point for the back-end server.

### Front

The front-end of the project is responsible for the user interface and is built using HTML, CSS, and JavaScript.

- **CSS**: Stylesheets for the website.
  - `login.css`
  - `style.css`
  - `theme.css`
- **HTML**: HTML files for different pages.
  - `login.html`
  - `register.html`
- **JS**: JavaScript files for various functionalities.
  - `assets.js`
  - `behaviour.js`
  - `login.js`
  - `register.js`
  - `screenshots.js`
  - `theme.js`

### Resources

This directory contains various resources used in the website.

- **assets**: Various assets like images and icons.
- **logos**: Logos related to the game.
- **musics**: Music files for the game.
- **others**: Other miscellaneous files.
- **screenshots**: Screenshots of the game.
- **slides**: Slides related to the game.
- **wallpapers**: Wallpapers from the game.

## Setup Instructions

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/fgmcolas/portfolio_web.git
   cd portfolio-web

2. **Install back-end dependencies:**

    ```sh
    cd Back
    npm install

3. **Configure the back-end:**

    Update auth.config.js and db.config.js with your configuration details.

4. **Run the back-end server:**

    ```sh
    node server.js

Open the front-end:

Open `index.html` in your browser to view the website.

## Contribution

If you wish to contribute to the project, please fork the repository and create a pull request with your changes.
License

This project is licensed under the MIT License. See the LICENSE file for more details.
Acknowledgments

Special thanks to our team for their hard work and dedication.

Feel free to reach out if you have any questions or need further assistance.
