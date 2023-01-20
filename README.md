#### Asset Tracker for Ampersand Rwanda

## Introduction
This project is developed as part of the assessment to join the Ampersand Rwanda development team. I am excited to be working on this project which aims at solving a core problem at Ampersand and can boos the productivity of the stations, hence furthering the mission of Ampersand. 

## The problem
### Overview
Ampersand operates a battery swap network. Electric motorcycles come to swap stations and they have their depleted batteries swapped out with charged batteries. The batteries charge at the station. The drivers that bring the batteries pay only for the energy used in the battery at every swap. Ampersand needs to know which battery was used by which driver at which station. Ampersand also needs to know how much energy was used in each battery and convert that to a dollar amount to charge the drivers at the time of swap.

1. Design and implement a system that will track the assets in motion. Battery Swap, telematics onboard. 
How would you organize the data? What technologies would you use? Where would you see key risks?
> Answered here and more [information here around system design](ANSWER1.md)

2. How would you calculate the distance traveled by each driver? Total energy consumed by each driver. The total energy is theoretically consumed by each driver.
> [Find answer here](ANSWER2.md)

3. What's a good way to predict and optimize for how many batteries should be at a given station?
> [Find answer here](ANSWER3.md)

*Instructions*
> Please code this in your own time and upload it to Git Hub or GitLab. Please include instructions on how to install and run for users to test the code. Please also provide comments in your code around design decisions. Use any language or framework you feel comfortable with. We are looking for coding ability, understanding of systems, architecture design, and documentation. All code and documentation should be written by the Applicant.

## About Developer
I am Fabrice Hafashimana, and I am a full stack developer with over 3 years of experince. I am a graduate of the Andela Technical Leadership Program in its cohort 5 of 2021. This 9 month program equipped me with the skills to thrive in a fast paced learning environemnt and inspired my spirit to deliver high quality products. 

I have experience working with different technologies from development tools to DevOps tools like:
1. React/TailwindCSS/MaterialUI fro frontend
2. NodeJS (Express), Python (Django, Flask, FastAPI) for backend/ API development
3. Docker 
4. AWS, Digital Ocean and Google Cloud for hosting scalable products

Recently, I have been working with *GraphQL using Typescript* which has boosted my productivity.

I am a life long learner and I believe in the power of skills that come from experience. The kind of spirit you need to thrive in the tech space.

## How to get started
To test this project, you will need to have the following installed on your local machine.
> Docker (docker compose) would be ideal for fast starting but it not the sole requirement

- NodeJS ([Download from here](https://nodejs.org/en/))
- Docker ([Download from here](https://www.docker.com/products/docker-desktop/))
- Yarn (`npm install -g yarn`)
- Git ([Download from here](https://git-scm.com/downloads))

#### With docker
```
mkdir asset_tracker
cd asset_tracker
git clone https://github.com/feyton/asset_tracker_ampersand.git .
cp .env.sample .env
docker compose up --build -d 
open http://localhost:4000
```

#### Without docker
> Be sure to have a MongoDB database hosted or running on your machine

```
mkdir asset_tracker
cd asset_tracker
git clone https://github.com/feyton/asset_tracker_ampersand.git .
cp .env.sample .env
yarn install
yarn start
open http://localhost:4000

```


## Technologies used:
1. Nodejs (A Javascript runtime engine)
2. Express/MongoDB/Socket.io
3. Docker for containerized deployment 
4. Socket.io for real-time update