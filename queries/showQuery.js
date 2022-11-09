// we import types and typed-graphql document from the generated code (`..graphclient/`)
import { postsDocument, postsQuery, execute } from '../.graphclient'

export default function showQuery() {
  const [result, setResult] = React.useState<postsQuery>()

  useEffect(() => {
    execute(postsDocument, {}).then((result) => {
      setData(result?.data)
    })
  }, [setResult])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graph Client Posts</p>
        <fieldset>
          {data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset>
      </header>
    </div>
  )
}