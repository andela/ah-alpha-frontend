[![Maintainability](https://api.codeclimate.com/v1/badges/9ec787d03742d3d3fd8d/maintainability)](https://codeclimate.com/github/andela/ah-alpha-frontend/maintainability) <a href="https://codeclimate.com/github/andela/ah-alpha-frontend/test_coverage"><img src="https://api.codeclimate.com/v1/badges/9ec787d03742d3d3fd8d/test_coverage" /></a> <img src="https://img.shields.io/badge/reviewed%20by-Hound-blueviolet.svg" alt="hound"/> <img src="https://img.shields.io/badge/Team-Alpha-green.svg" alt="team"/>
[![Build Status](https://travis-ci.org/andela/ah-alpha-frontend.svg?branch=develop)](https://travis-ci.org/andela/ah-alpha-frontend)

# AUTHORS HAVEN

Website: [Authors Haven](https://ah-alpha-frontend-staging.herokuapp.com/)

# Vision

Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web.

## SetUp

This project has the following core dependencies:

    - Webpack
    - Babel
    - React & Redux
    - Semantic UI for styling

To SetUp the project clone the repo:

1. `git clone https://github.com/andela/ah-alpha-frontend.git`.
2. Change to project directory`cd ah-alpha-frontend`
3. Run `npm install` to install all the dependencies.
4. Run `npm start` to start the application.
5. Run `npm run test -- --coverage` to run tests.

## Functionality

This application allows the user to perform the following activities:

## Authentication

Authentication happens when:

1. A user can Signup and be verified to Login.
2. A user can LogIn using their social networks.

There are two types of users:

- Authenticated users
- Non-authenticated users

Authenticated users can access all funtionality of the application such as:

1. `Update` their profile.
2. `Create`, `Edit` and `Delete` an article.
3. `Like` and `Dislike` an article.
4. `Rate` an article.
5. `Favourite` and `Unfavourite` an article.
6. `Follow` and `Unfollow` other users.
7. `Comment` on articles posted.

Non-authenticated users have limited accessibilty to most functionality.

1. `View` articles.
2. Social share user articles on their social networks.
