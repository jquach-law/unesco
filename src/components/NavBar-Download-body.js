
function DownloadBody({handleChange, handleSubmit, inputs}) {
    return (
      <div>
        <h1>Download Pictures of each site</h1>
        <p>
            World Heritage site ID ranges between 1-1654.<br/>
            Please enter number between 1-1654:
        </p>
        <form onSubmit={handleSubmit}>
          <label>Enter lower range:
              <input type="number" name="lower" 
                value={inputs.lower || ""} 
                onChange={handleChange}/>
          </label><br/>
          <label>Enter upper range:
              <input type="number" name="upper" 
                value={inputs.upper || ""} 
                onChange={handleChange}/>
          </label><br/>
          <input type="submit" />
        </form>
      </div>
    )
}

export default DownloadBody