## NestJS Marvel Character API

# Prerequisites

- Node: Node.js (version 14 or higher)
- Package manager: npm or yarn
- Postgres (version 14 or higher)
- Postman

# Installation

1. Clone the repository: git clone https://github.com/firerum/marvel-backend.git
2. Navigate to the project directory: `cd marvel-backend`
3. Install dependencies: `npm install` or `yarn install`
4. Copy the .env.example file to .env and update the variables with your own values.

# Running the app

`npm run start:dev`

# Usage

Create a Marvel character

- Send a POST request to /marvel with a JSON payload containing the data.
  {
    "name": "spider-man",
    "status": "true",
    "age": "21",
    "gender": "male",
    "accomplices": ["iron-man", "captain-america"],
    "enemies": ["thanos"]
  }

- Get all marvel characters

* Send a GET request to /marvel. This will return an array list of all marvel characters.

- Get a specific marvel character

* Send a GET request to /marvel/{id}, where {id} is the ID of the marvel character you want to retrieve.

- Update a marvel character

* Send a PUT request to /marvel/{id}, where {id} is the ID of the marvel character you want to update.\* Include a JSON payload containing the updated user data.
  {
    "age": "21",
    "accomplices": ["iron-man", "captain-america"],
  }

- Delete a user

* Send a DELETE request to /marvel/{id}, where {id} is the ID of the marvel character you want to delete.
