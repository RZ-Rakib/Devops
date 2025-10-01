# Hex to RGB Conversion

A simple Node.js + Express project that converts HEX color codes to their RGB equivalents.  
Includes unit tests (Mocha + Chai) and integration tests (Supertest).

## Directory Structure

```
integration/
  hexToRgb/
    package.json
    README.MD
    server/
      server.js
      lib/
        color.js
      routes/
        hex.js
    test/
      integration/
        hex-route.test.js
      unit/
        color.test.js
```

## Installation

1. Navigate to the `hexToRgb` directory:
   ```bash
   cd integration/hexToRgb
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Starting the Server

Run the following command to start the server:
```bash
# Start normally
npm start

# OR start with nodemon (auto reload on save)
npm run dev
```
THe server will be running at `http://localhost:3000`.

### API Endpoint

- **GET /api/hex-to-rgb?hex=value**
  - Converts a hexadecimal color code to its RGB equivalent.
  - Example:
    ```bash
    http://localhost:3000/api/hex-to-rgb?hex=ffcc00
    ```
  - Response(200 OK):
    ```json
    {
      "hex": "#ffcc00",
      "rgb": {
        "r": 255,
        "g": 204,
        "b": 0
      },
      "rgbString": "rgb(255, 204, 0)"
    }
    ```
  - Error Response(400 Bad Request):
    ```json
    {
      "error": "Invalid hex color"
    }

## Testing

### Running Tests

1. Navigate to the `hexToRgb` directory:
   ```bash
   cd integration/hexToRgb
   ```
2. Run the tests:
   ```bash
   npm test
   ```

## License

This project has no license for now.