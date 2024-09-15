// pages/index.tsx
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

type Trademark = {
  name: string
  owner: string
  lawFirm: string
  attorney: string
  status: string
}

const Home = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Trademark[]>([])
  const [owner, setOwner] = useState('')
  const [lawFirm, setLawFirm] = useState('')
  const [attorney, setAttorney] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSearch = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await axios.get(`/api/search`, {
        params: { query, owner, lawFirm, attorney, status },
      })
      setResults(response.data)

      // Update URL with search query parameters
      router.push({
        pathname: '/',
        query: { query, owner, lawFirm, attorney, status },
      })
    } catch (err) {
      setError('Error fetching results')
    }
    setLoading(false)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Trademark Search</h1>
      <div className="flex space-x-4 mb-4">
        <input
          className="border p-2 flex-grow"
          placeholder="Search trademarks"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="flex space-x-4 mb-4">
        <input
          className="border p-2"
          placeholder="Owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Law Firm"
          value={lawFirm}
          onChange={(e) => setLawFirm(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Attorney"
          value={attorney}
          onChange={(e) => setAttorney(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : results.length > 0 ? (
        <ul>
          {results.map((trademark, index) => (
            <li key={index} className="border-b p-4">
              <h2 className="text-lg font-bold">{trademark.name}</h2>
              <p>Owner: {trademark.owner}</p>
              <p>Law Firm: {trademark.lawFirm}</p>
              <p>Attorney: {trademark.attorney}</p>
              <p>Status: {trademark.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No results found</div>
      )}
    </div>
  )
}

export default Home
