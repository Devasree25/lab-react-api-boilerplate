import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        console.log(res.data.books)
        setData(res.data.books)
      })


      .catch((error) => {
        console.error("Failed to get books", error)
      })


  }, [])

  return (
    <>
      <div id="body">
        {
          data.map((items) => {
            return (
              <div key={items.id}> <br /><hr /> 
                <h1 id="title">{items.title}</h1>
                <img src={items.imageLinks.thumbnail} alt="" id="img" />
                 <h5>{items.description}</h5>
                {/* <div> */}
                {/* </div> */}
                <div id="author">
                  {
                    items.authors.map((el, i) => {
                      return (
                        <div key={i}>
                          <h1>{el}</h1>
                        </div>
                      )
                    })
                  }

                </div>

              </div>




            )
          })
        }

      </div>

    </>
  )

}
export default App;