# DemystDataAssignment
# Loan Application System


## Overview

The Loan Application System is a user-friendly web application built with React and Node.js. It simplifies the loan application process, making it quick and hassle-free. Whether you're a business owner or an individual, you can easily apply for a loan and get a decision in no time.

## Features

- **Streamlined Application**: Submit your loan application within minutes.
- **Integration**: Seamlessly integrates with accounting software providers.
- **Instant Decision**: Get a loan approval decision instantly.
- **Docker Support**: Dockerized for easy deployment (see [Docker Section](#docker-support)).
- **Responsive**: Accessible on all devices - desktop, tablet, and mobile.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker Desktop (optional, for Docker deployment).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/utkarsh-senpai/DemystDataAssignment.git
   cd DemystDataAssignment
   
#Install dependencies:

npm install

Start the application:

npm start

Open your browser and access http://localhost:3000.


#Docker Support

This project is Docker-ready for easy deployment. Follow these steps to run the application in a Docker container:
Build the Docker image:

docker build -t loan-application .

Run the Docker container:

docker run -p 3000:3000 loan-application
Access the application in your browser at http://localhost:3000.


#Usage

Fill out the loan application form with your details.

Choose your preferred accounting provider.

Click "Submit Application."

Receive an instant decision on your loan application.


#Technologies Used

React.js: JavaScript library for building user interfaces.

Node.js: Backend server for API integration.

CSS: Styling the application.

