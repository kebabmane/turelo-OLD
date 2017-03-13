# Turelo - Open Source, Angular + Lambda + DynamoDB Project

[![Code Climate](https://codeclimate.com/github/kebabmane/turelo/badges/gpa.svg)](https://codeclimate.com/github/kebabmane/turelo)
[![Test Coverage](https://codeclimate.com/github/kebabmane/turelo/badges/coverage.svg)](https://codeclimate.com/github/kebabmane/turelo/coverage)
[![Issue Count](https://codeclimate.com/github/kebabmane/turelo/badges/issue_count.svg)](https://codeclimate.com/github/kebabmane/turelo)

I wanted to try building a basic Angular2 app, generally my most used web app day to day is an RSS reader so I decided to build one

Perviously I have built an RSS Reader with Ruby on Rails but its heavy and ended up costing $50AUD per month for a small system, looking at options moving forward I decided to go for a serveless application architecture.

The RSS Webpp is written with Angular2 and Material Design Language and grabs data from an Amazon API Gateway that pulls data from Lambda and DynamoDB

Some scheduled Lambda Tasks do an update on the Feeds in the database

A seperate repo will be setup providing Cloudformation & Serverless Scripts so other people can deploy/contribute as required

This is very very alpha software and should not be used by anyone during this phase

Cheers
Rhys / @kebabman