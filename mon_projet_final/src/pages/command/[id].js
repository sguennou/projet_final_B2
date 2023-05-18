import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "@/components/Navbar"
import { useRouter } from "next/router"
import moment from "moment"
function CommandDetail() {
  const router = useRouter()
  const id = router.query.id
  const [scan, setScan] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return
      const response = await axios.get(`http://localhost:3001/nmapscan/${id}`)
      const scan = response.data.scan
      setScan(scan)
    }
    fetchData()
  }, [id])

  return (
    <div>
      <NavBar />
      <div className="pt-2 pl-2">
        {scan && (
          <div>
            <div>
              <div>
                started_at🕒🏁:{" "}
                {moment(new Date(scan.started_at)).format("dddd d MMMM YYYY")}
              </div>
            </div>
            <div>
              <div>
                finished_at🛑🏁:{" "}
                {moment(new Date(scan.finished_at)).format("dddd d MMMM YYYY")}
              </div>
            </div>
            <div>
              <div>command_line💻💬: {scan.command_line}</div>
            </div>
            {scan.options && (
              <div>
                <div>options💻💬: {scan.options.join(", ")}</div>
              </div>
            )}
            <div>
              <div>scan_results🔍📊: {scan.scan_results.ip_address}</div>
            </div>
          </div>
        )}
        <table className="table-auto border-collapse border border-slate-500 w-100">
          <thead>
            <tr>
              <th className="border-collapse border border-slate-500 p-2">
                Version
              </th>
              <th className="border-collapse border border-slate-500 p-2">
                Protocole
              </th>
              <th className="border-collapse border border-slate-500">Port</th>
            </tr>
          </thead>
          <tbody>
            {scan && scan.scan_results && scan.scan_results.open_ports ? (
              scan.scan_results.open_ports.map((port) => {
                return (
                  <tr className="p-2" key={port.port_number}>
                    <td className="p-3 border border-slate-600">
                      {port.banner}
                    </td>
                    <td className="p-3 border border-slate-600">
                      {port.protocol}
                    </td>
                    <td className="p-3 border border-slate-600">
                      {port.port_number}
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CommandDetail
