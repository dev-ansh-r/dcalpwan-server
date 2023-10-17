# LoRaWAN Network Controller

LoRaWAN Network Controller is a Go application that provides a web-based interface for managing LoRaWAN gateways, applications, and network settings.

## Getting Started

### Prerequisites

- Go 1.20 or later
- Docker (optional, for containerization)
- PostgreSQL (if you're using a PostgreSQL database)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dev-ansh-r/dcalpwan-server.git
```

2. Start the application with go
```bash
cd dcalpwan-server
go mod download
go run main.go 
```
**Warning** please setup migration and databases and .env file for the same

3. Open a web browser and visit [http://localhost:8080] to access the application.

### Usage
* Access the home page at /.
* Manage gateways at /gateways.
* Manage applications at /applications.
* Configure network settings at /network.
