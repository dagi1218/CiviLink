### **1. Health Check**  
`GET /api/v1/health`  
![GET](https://img.shields.io/badge/GET-2196F3?style=flat&labelColor=000)

**Auth:** none / optional API key  
**Purpose:** Check system health and uptime.

#### Response — 200 OK
```
{
  "status": "ok",
  "uptime": 12345
}
```
