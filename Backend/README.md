# Backend API Documentation

## POST /users/register Endpoint

### Description
Creates a new user account in the system. This endpoint validates user input, hashes the password securely, stores the user data in the database, and returns an authentication token along with the user information.

#### Request Body
The request body must be a JSON object with the following required fields:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

#### Field Requirements

| Field | Type | Required | Validation Rules |
|-------|------|----------|------------------|
| `fullname.firstname` | String | Yes | Minimum 3 characters |
| `fullname.lastname` | String | No | Minimum 3 characters (if provided) |
| `email` | String | Yes | Must be a valid email format |
| `password` | String | Yes | Minimum 6 characters |



### Response

#### Example Response
* `user` (object):
   * `fullname` (object).
      * `firstname` (string): User's first name (minimum 3 characters).
      * `lastname` (string): User's last name (minimum 3 characters).
   * `email` (string): User's email address (must be a valid email).
   * `password` (string): User's password (minimum 6 characters).
* `token` (String): JWT Token

### Status Codes

| Status Code | Description |
|-------------|-------------|
| `201 Created` | User successfully registered and created |
| `400 Bad Request` | Validation errors in request data |
| `500 Internal Server Error` | Server error during user creation |

### Security Features

- **Password Hashing**: Passwords are securely hashed using bcrypt with a salt rounds of 10
- **JWT Token**: Returns a JSON Web Token valid for 24 hours for authentication
- **Input Validation**: All fields are validated using express-validator
- **Password Protection**: Password field is excluded from user object in response

### Authentication Token

The returned JWT token contains:
- **Payload**: User ID (`_id`)
- **Expiration**: 24 hours from creation
- **Algorithm**: HS256
- **Secret**: Environment variable `JWT_SECRET`



### Notes

- Email addresses must be unique in the system
- The `lastname` field is optional but must meet minimum length requirements if provided
- The returned token can be used for authenticated requests to other endpoints
- Password is never returned in the response for security purposes