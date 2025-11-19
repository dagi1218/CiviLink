### **1. List Notifications**  
`GET /api/v1/notifications`  
![GET](https://img.shields.io/badge/GET-2196F3?style=flat&labelColor=000)

**Auth:** citizen | officer  
**Query Parameters:**  
- `page`  
- `limit`  
- `unreadOnly=true` (optional)

**Response:**  
List of notifications ordered by `createdAt`.

---

### **2. Mark a Notification as Read**  
`PUT /api/v1/notifications/:id/mark-read`  
![PUT](https://img.shields.io/badge/PUT-FFC107?style=flat&labelColor=000)

**Auth:** owner  
**Response:** `200 OK`

---

### **3. Mark All Notifications as Read**  
`PUT /api/v1/notifications/mark-all-read`  
![PUT](https://img.shields.io/badge/PUT-FFC107?style=flat&labelColor=000)

**Auth:** owner

---

### **4. Delete Notification**  
`DELETE /api/v1/notifications/:id`  
![DELETE](https://img.shields.io/badge/DELETE-F44336?style=flat&labelColor=000)

**Auth:** owner  
**Behavior:** Delete the notification.

---
