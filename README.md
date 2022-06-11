# BlogApp Backend

BlogApp Backend is build with  
1) nodeJS (express)
2) joi validation
3) Mongo DB (Robo3T GUI)
4) JWT AuthToken

## Installation

```bash
npm i
```

```bash
cp .env.example .env
```
complete `.env` with proper details
## Setup [Mogo3T](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) in mac

Install Xcode Command-Line Tools
```bash
xcode-select --install
```
Hope, you have installed Homebrew and follow below steps
```bash
brew tap mongodb/brew
```
```bash
brew update
```
Install MongoDB
```bash
brew install mongodb-community@5.0
```
Start MongoDB Service
```bash
brew services start mongodb-community@5.0
```
Verify whether service started, using this command
```bash
ps aux | grep -v grep | grep mongod
```
<img width="1640" alt="Screenshot 2022-06-11 at 3 36 09 PM" src="https://user-images.githubusercontent.com/42349645/173183378-07261bef-8331-4c15-bafa-13e28e879a21.png">

## Run

```bash
nodemon
```

## Postman Collection
You can find postman collection in `docs\blogappAPI.json`
