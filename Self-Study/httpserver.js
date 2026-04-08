const http = require('http');

let products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1200 }
];

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/products") {
    res.end(JSON.stringify(products));
  }

  else if (req.method === "POST" && req.url === "/products") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newProduct = JSON.parse(body);
      newProduct.id = products.length + 1;
      products.push(newProduct);
      res.end(JSON.stringify(newProduct));
    });
  }

  else if (req.method === "PUT" && req.url.startsWith("/products/")) {
    const id = parseInt(req.url.split("/")[2]);
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const updatedData = JSON.parse(body);
      products = products.map(p =>
        p.id === id ? { ...p, ...updatedData } : p
      );
      res.end(JSON.stringify({ message: "Updated" }));
    });
  }

  else if (req.method === "DELETE" && req.url.startsWith("/products/")) {
    const id = parseInt(req.url.split("/")[2]);
    products = products.filter(p => p.id !== id);
    res.end(JSON.stringify({ message: "Deleted" }));
  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }

});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});