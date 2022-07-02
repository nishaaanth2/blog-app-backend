# BlogApp Backend
![Language](https://img.shields.io/badge/language-nodejs%203-orange.svg)  

BlogApp Backend is build with  
1) nodeJS (express)
2) joi validation
3) Mongo DB (Robo3T GUI)
4) JWT AuthToken

## Installation

Clone the repo locally, 
```bash
cd blog-app-backend/
```

```bash
npm i
```

```bash
cp .env.example .env
```
complete `.env` with proper details

## Setup [Mongo DB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) in mac

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

You can install Robo3T, GUI for your local Mongo DB.

## Run

```bash
nodemon
```

## Postman Collection
You can find postman collection in `docs\blogappAPI.json`

## Author

<table>
<tr>
<td>
     <img src="https://avatars.githubusercontent.com/u/42349645?s=400&u=2d016bef6c5d5535666017bee0c28ca0929a221d&v=4" width="180"/>
     
     Nishaanth M S

<p align="center">
<a href = "https://github.com/nishaaanth2"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/nishaaanth2"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "www.linkedin.com/in/nishaaanth2"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>
</tr> 
  </table>
