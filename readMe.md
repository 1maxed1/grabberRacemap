# Grabber for Racemap APIs

@version 1.0
@Racemap.com

## Introduction

This grabber is designed for real-time visualization of data during a race

## Usage

Download the repository with these [instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=cli)

> Or run:
> gh repo clone https://github.com/1maxed1/grabberRacemap.git

## Working with the different grabbers

In every folder there is a HTML-file and a Javascript-File

Each grabber is named after its purpose

## Leaderboard.js

> 1. Open the leaderBoard.html file
> 2. Input your [eventId](https://docs.racemap.com/data-api) and the number of people you want to show as queryParams
>    Sample: pathTo**leaderBoard.html**?**eventId**=someEventId&**anzahl**=5
>    The site will automatically reload itself showing the Rank and Name of the first 5 starters

## fromStart.js

> 1. Open the fromStart.html file
> 2. Input your [eventId](https://docs.racemap.com/data-api)] as a queryParam
>    > Sample: pathTo**fromStart.html**?**eventId**=someEventId
>    > The site will automatically reload itself showing the distance of the 1st starter to the start line

# toFinish.js

> 1. Open the toFinish.html file
> 2. Input your [eventId](https://docs.racemap.com/data-api) as a queryParam
>    The site will automatically reload itself showing the distance of the 1st starter to the finish line
