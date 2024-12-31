// when some error either from the server sidse comes then display this page after build 

"use client";
const error = ({error,reset}) => {
  return (
    <div>
      error in review id {error.message}
      <button onClick={reset}>TryAgain</button>
    </div>
  )
}

// read documentation
// handle error in nested ek error.js uske sare child segments me kam krega 

export default error