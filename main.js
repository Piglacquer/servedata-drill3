const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.listen(process.env.PORT || 3000)

const data = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Zephyr",
    homeTown: "Seattle"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Yellow",
    homeTown: "Vancouver"
  },
  {
    id: 3,
    firstName: "Claire",
    lastName: "Xylitol",
    homeTown: "Toledo"
  },
  {
    id: 4,
    firstName: "Daniel",
    lastName: "Winston",
    homeTown: "Akron"
  },
  {
    id: 5,
    firstName: "Edina",
    lastName: "Veritas",
    homeTown: "Wichita"
  }
]

function idCall(data, idNum) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == idNum) {
      return data[i]
    }
  }
  return false
}

app.get("/", function(request, response) {
  response.json({data})
})

app.get("/:id", function(request, response) {
  if (!idCall(data, request.params.id)) {
    response.status (404),
    response.json ({
      error: {
        "message": "No record found!"
      }
    })
  }
  response.json(idCall(data, request.params.id))
})
