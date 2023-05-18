import React, { useState, useEffect } from "react"
import NavBar from "@/components/Navbar"
import axios from "axios"
import Link from "next/link"

function History() {
  const [historyData, setHistoryData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/nmapscan", {
        headers: { "Content-Type": "application/json" },
      })
      const scans = response.data.scans

      console.log(scans)
      setHistoryData(scans)
    }
    fetchData()
  }, [])

  return (
    <div>
      <NavBar />
      <h1 className="text-center text-black-500 text-4xl font-bold mt-10">
        Historique📜
      </h1>
      <div className="flex flex-col items-center mt-10">
        {historyData.length > 0 ? (
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Host Name🖥️</th>
                <th className="px-4 py-2">IP Address📡</th>
                <th className="px-4 py-2">Action💫</th>
              </tr>
            </thead>
            <tbody>
              {historyData.length &&
                historyData.map(
                  (historyItem) =>
                    historyItem.scan_results && (
                      <tr key={historyItem.id}>
                        <td className="border px-4 py-2">
                          {historyItem.scan_results.host_name}
                        </td>
                        <td className="border px-4 py-2">
                          {historyItem.scan_results.ip_address}
                        </td>
                        <td className="border px-4 py-2">
                          <Link
                            className="bg-blue-400 rounded p-2"
                            href={"/command/" + historyItem._id}
                          >
                            Scruter de plus près🧐
                          </Link>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        ) : (
          <p> Malheureusement, aucun historique n'a été trouvé 😕</p>
        )}
      </div>
    </div>
  )
}

export default History
