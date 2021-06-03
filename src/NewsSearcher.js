import React,{useState , useEffect}  from 'react' ;
import './App.css'
import RenderDoc from './RenderDoc' ;
import {
  Link
} from "react-router-dom";

const NewsSearcher = () => {

  const APIKEY = '0ee3c67232e6405c8b30826f1b661d38' ;
  //useState

  //Changes whenever the value in input is changed
  const [userquery , setUserQuery] = useState('') ;
    
  // Changes only when button is clicked
  const [request, setRequest] = useState('') ;

  //result returned from the api
  const [results, setResults] = useState([]);


  //useEffect 

  useEffect (() => {
    const Fetch_function = async() => {
        await fetch(`https://newsapi.org/v2/everything?q=${request}&apiKey=${APIKEY}`) 
          .then(data => data.json())
          .then(result => setResults(result.articles))
          .catch(err => console.error(err))
      }
      Fetch_function() ;
  } , [request]) ;
  
  const updateUserQuery = e => {
    setUserQuery(e.target.value) ;
  }
  
  const SubmitFunction = e => {
    e.preventDefault() ;
    setRequest(userquery) ;
    setUserQuery('') ;
  }
  const ResetFunction = () =>{
    setUserQuery('') ;
    setRequest('')
  }
  


    return(
        <div className='NewsSearcher'>
          <div className='headers'>
            <h1> Fact Searcher </h1>
              <nav>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about' >About us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <form className='form_'>
                <input
                type="text" 
                placeholder='Search' 
                value={userquery} 
                onChange={updateUserQuery}
                className='input_data'
                />
                <button onClick={SubmitFunction} type='submit' className='button_submit'> Submit </button>
                <button onClick={ResetFunction} type='reset' className='button_reset'> Reset All </button>
            </form>
            <div>

                {results != null &&
                    <div className='result'>
                        {results.map(result => {
                            return(
                            <div>
                            <RenderDoc
                            key={result.id} 
                            title={result.title} 
                            image={result.urlToImage}
                            source={result.url}
                            />
                            </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default NewsSearcher ;