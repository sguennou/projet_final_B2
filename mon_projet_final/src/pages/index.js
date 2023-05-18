import React, { useState } from "react"
import NavBar from "@/components/Navbar"
import Image from "next/image"
import axios from "axios"
function Start() {
  const [commands, setCommands] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post(
      "http://localhost:3001/nmapscan",
      commands
    )
    console.log(response)
  }

  return (
    <div className="bg-blue-200">
      <NavBar />
      <div className="flex justify-center my-8">
        <Image src="/nmap.png" alt="nmap" width={350} height={200} />
      </div>
      <div className="max-w-xl mx-auto px-4 bg-blue-300">
        <h2 className="text-center text-xl font-bold mb-4">
          Le chasseur de scans,Nmap 🔍🌎🏹
        </h2>
        <p className="text-center mb-8">
          Parcourez les réseaux avec élégance en lançant des scans Nmap grâce à
          notre formulaire intuitif ci-dessous🌐💻✨
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="started_at">
              Started At
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:border-blue-500"
              type="date"
              id="started_at"
              name="started_at"
              onChange={(event) =>
                setCommands({ ...commands, started_at: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="finished_at">
              Finished At
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:border-blue-500"
              type="date"
              id="finished_at"
              name="finished_at"
              onChange={(event) =>
                setCommands({ ...commands, finished_at: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="command_line">
              Command Line
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              id="command_line"
              name="command_line"
              onChange={(event) =>
                setCommands({ ...commands, command_line: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="ip_address">
              IP Address
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              id="ip_address"
              name="ip_address"
              onChange={(event) =>
                setCommands({ ...commands, ip_address: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700" htmlFor="host_name">
              Host Name
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              id="id_hostname"
              name="hostname"
              onChange={(event) =>
                setCommands({ ...commands, host_name: event.target.value })
              }
            />
          </div>
          <div>
            <label>port_number</label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              id="portnumber"
              onChange={(event) =>
                setCommands({ ...commands, port_number: event.target.value })
              }
            ></input>
          </div>
          <div>
            <label>protocol</label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              id="protocol"
              onChange={(event) =>
                setCommands({ ...commands, protocol: event.target.value })
              }
            ></input>
          </div>
          <div>
            <label>banner</label>
            <input
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              id="banner"
              onChange={(event) =>
                setCommands({ ...commands, banner: event.target.value })
              }
            ></input>
          </div>
          <div className="mx-auto flex">
            <button
              className="mx-auto mt-2 p-1 font-bold text-black-400 bg-gray-300 hover:font-bold hover:bg-gray-400 active:bg-gray-500 px-2 rounded-lg border border-black-900"
              type="submit"
              value="c'est parti 🚀"
            >
              c'est parti 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Start
